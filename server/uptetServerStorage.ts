import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

export interface ServerCandidate {
  rollNo: string;
  regNo: string;
  name: string;
  fatherName: string;
  category: string;
  subCategory?: string;
  marks: number;
  totalMarks: number;
  percentage: number;
  status: 'QUALIFIED' | 'NOT QUALIFIED';
  district: string;
  pageNo: number;
  srNo: number;
  verificationHash?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data', 'uptet_shards');
const INDEX_FILE = path.join(process.cwd(), 'data', 'uptet_meta.json');

// Memory cache for hot records and prefix map
let memoryCache = new Map<string, ServerCandidate>();
let totalRecordCount = 0;
let isIngestionRunning = false;
let currentIngestionStatus = 'Ready';

// Ensure data directory exists
function ensureDirectories() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Load metadata and count on boot
export function initUptetServerStorage() {
  ensureDirectories();
  try {
    if (fs.existsSync(INDEX_FILE)) {
      const meta = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
      totalRecordCount = meta.totalRecords || 0;
    } else {
      recomputeTotalRecords();
    }
  } catch (err) {
    console.warn('[UPTET Server] Notice loading metadata:', err);
  }
}

// Recompute total records from shards
export function recomputeTotalRecords(): number {
  ensureDirectories();
  try {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    let total = 0;
    for (const file of files) {
      try {
        const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
        const list = JSON.parse(content);
        if (Array.isArray(list)) {
          total += list.length;
        }
      } catch (_) {}
    }
    totalRecordCount = total;
    saveMetadata({ totalRecords: total, shardsCount: files.length, lastUpdated: new Date().toISOString() });
    return total;
  } catch {
    return 0;
  }
}

function saveMetadata(meta: any) {
  try {
    fs.writeFileSync(INDEX_FILE, JSON.stringify(meta, null, 2), 'utf-8');
  } catch (_) {}
}

export function getServerStats() {
  return {
    totalRecords: totalRecordCount,
    isIngestionRunning,
    currentStatus: currentIngestionStatus,
    shardsCount: fs.existsSync(DATA_DIR) ? fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json')).length : 0
  };
}

// Save candidates into partitioned shards (prefix: first 4 digits of roll)
export function saveServerCandidates(candidates: ServerCandidate[]): number {
  ensureDirectories();
  const shardsMap = new Map<string, ServerCandidate[]>();

  for (const cand of candidates) {
    const cleanRoll = String(cand.rollNo).trim();
    const shardKey = cleanRoll.length >= 4 ? cleanRoll.slice(0, 4) : 'other';
    if (!shardsMap.has(shardKey)) {
      shardsMap.set(shardKey, []);
    }
    shardsMap.get(shardKey)!.push({
      ...cand,
      rollNo: cleanRoll,
      regNo: String(cand.regNo || cleanRoll).trim(),
      name: String(cand.name || 'QUALIFIED CANDIDATE').toUpperCase().trim(),
      fatherName: String(cand.fatherName || 'FATHER NAME').toUpperCase().trim(),
      marks: Number(cand.marks) || 0,
      totalMarks: 150,
      percentage: Number(((Number(cand.marks) / 150) * 100).toFixed(2)),
      status: Number(cand.marks) >= 82 ? 'QUALIFIED' : 'NOT QUALIFIED',
      district: String(cand.district || 'UTTAR PRADESH').toUpperCase().trim(),
      pageNo: Number(cand.pageNo) || 1,
      srNo: Number(cand.srNo) || 1,
      verificationHash: cand.verificationHash || `UPTET21-${cleanRoll}-${cand.pageNo || 1}`
    });
  }

  let addedCount = 0;
  for (const [shardKey, list] of shardsMap.entries()) {
    const shardPath = path.join(DATA_DIR, `shard_${shardKey}.json`);
    let existingList: ServerCandidate[] = [];
    if (fs.existsSync(shardPath)) {
      try {
        existingList = JSON.parse(fs.readFileSync(shardPath, 'utf-8'));
      } catch {
        existingList = [];
      }
    }

    const existingMap = new Map<string, ServerCandidate>();
    existingList.forEach(c => existingMap.set(c.rollNo, c));

    for (const c of list) {
      if (!existingMap.has(c.rollNo)) {
        addedCount++;
      }
      existingMap.set(c.rollNo, c);
      // also cache in memory
      memoryCache.set(c.rollNo, c);
      if (c.regNo) memoryCache.set(c.regNo, c);
    }

    fs.writeFileSync(shardPath, JSON.stringify(Array.from(existingMap.values())), 'utf-8');
  }

  totalRecordCount += addedCount;
  saveMetadata({ totalRecords: totalRecordCount, lastUpdated: new Date().toISOString() });
  return addedCount;
}

// Search candidate across shards (fast prefix lookup in O(1))
export function searchServerCandidate(query: string): ServerCandidate | null {
  const cleanQ = query.trim();
  if (!cleanQ) return null;

  // 1. Check memory cache
  if (memoryCache.has(cleanQ)) {
    return memoryCache.get(cleanQ)!;
  }

  ensureDirectories();

  // 2. Direct shard lookup by prefix (first 4 digits)
  if (cleanQ.length >= 4) {
    const prefix = cleanQ.slice(0, 4);
    const shardPath = path.join(DATA_DIR, `shard_${prefix}.json`);
    if (fs.existsSync(shardPath)) {
      try {
        const list: ServerCandidate[] = JSON.parse(fs.readFileSync(shardPath, 'utf-8'));
        const found = list.find(c => c.rollNo === cleanQ || c.regNo === cleanQ);
        if (found) {
          memoryCache.set(cleanQ, found);
          return found;
        }
      } catch (_) {}
    }
  }

  // 3. Fallback: Search all shards if prefix didn't match (e.g. searching by reg number)
  try {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    for (const file of files) {
      try {
        const list: ServerCandidate[] = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8'));
        const found = list.find(c => c.rollNo === cleanQ || c.regNo === cleanQ);
        if (found) {
          memoryCache.set(cleanQ, found);
          return found;
        }
      } catch (_) {}
    }
  } catch (_) {}

  return null;
}

// Parse raw gazette text extracted from PDF or CSV
export function parseGazetteTextServer(text: string): ServerCandidate[] {
  const candidates: ServerCandidate[] = [];
  const lines = text.split(/\r?\n/);

  // Regex patterns matching UPTET gazette lines:
  // Pattern 1: S.No RollNo RegNo Name Father Category SubCat Marks Result/District
  const tableRegex = /^(\d+)\s+([0-9]{10,14})\s+([0-9]{10,14})\s+([A-Z\s\.\,\-]+?)\s{2,}([A-Z\s\.\,\-]+?)\s+(GEN|OBC|SC|ST|EWS)\s+(NONE|PH|FF|EX|DFF|[A-Z]+)?\s*(\d{2,3})\s+(QUALIFIED|[A-Z\s]+)?/i;
  
  // Pattern 2: CSV line: SrNo, Roll, Reg, Name, Father, Category, SubCategory, Marks, District, PageNo
  const csvRegex = /^"?(\d+)"?[\,\t]"?([0-9]{10,14})"?[,\t]"?([0-9]{10,14})"?[,\t]"?([^",]+)"?[,\t]"?([^",]+)"?[,\t]"?(GEN|OBC|SC|ST|EWS)"?[,\t]"?([^",]*)"?[,\t]"?(\d{2,3})"?[,\t]?"?([^",]*)"?[,\t]?"?(\d*)"?/i;

  let currentPage = 1;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) continue;

    // Detect page indicator if present
    const pageMatch = rawLine.match(/(?:PAGE|PAGE NO|P\.)\s*[:\-]?\s*(\d+)/i);
    if (pageMatch) {
      currentPage = parseInt(pageMatch[1], 10) || currentPage;
      continue;
    }

    // Skip table headers
    if (
      rawLine.includes('EXAMINATION REGULATORY AUTHORITY') ||
      rawLine.includes('UPTET') ||
      rawLine.includes('ROLL NO') ||
      rawLine.includes('REG. NO') ||
      rawLine.includes('FATHER')
    ) {
      continue;
    }

    // Match Pattern 1 (Table row)
    const m1 = rawLine.match(tableRegex);
    if (m1) {
      const marks = parseInt(m1[8], 10);
      candidates.push({
        srNo: parseInt(m1[1], 10),
        rollNo: m1[2].trim(),
        regNo: m1[3].trim(),
        name: m1[4].trim().toUpperCase(),
        fatherName: m1[5].trim().toUpperCase(),
        category: m1[6].trim().toUpperCase(),
        subCategory: (m1[7] || 'NONE').trim().toUpperCase(),
        marks: marks,
        totalMarks: 150,
        percentage: Number(((marks / 150) * 100).toFixed(2)),
        status: marks >= 82 ? 'QUALIFIED' : 'NOT QUALIFIED',
        district: (m1[9] && m1[9].toUpperCase() !== 'QUALIFIED') ? m1[9].trim().toUpperCase() : 'UTTAR PRADESH',
        pageNo: currentPage,
        verificationHash: `UPTET21-${m1[2].trim()}-${currentPage}`
      });
      continue;
    }

    // Match Pattern 2 (CSV format)
    const m2 = rawLine.match(csvRegex);
    if (m2) {
      const marks = parseInt(m2[8], 10);
      candidates.push({
        srNo: parseInt(m2[1], 10),
        rollNo: m2[2].trim(),
        regNo: m2[3].trim(),
        name: m2[4].trim().toUpperCase(),
        fatherName: m2[5].trim().toUpperCase(),
        category: m2[6].trim().toUpperCase(),
        subCategory: (m2[7] || 'NONE').trim().toUpperCase(),
        marks: marks,
        totalMarks: 150,
        percentage: Number(((marks / 150) * 100).toFixed(2)),
        status: marks >= 82 ? 'QUALIFIED' : 'NOT QUALIFIED',
        district: (m2[9] || 'UTTAR PRADESH').trim().toUpperCase(),
        pageNo: parseInt(m2[10], 10) || currentPage,
        verificationHash: `UPTET21-${m2[2].trim()}-${m2[10] || currentPage}`
      });
      continue;
    }

    // Fallback line tokens
    const tokens = rawLine.split(/[\s,\t]{2,}/);
    if (tokens.length >= 6 && /^\d{10,14}$/.test(tokens[1])) {
      const marks = parseInt(tokens[6] || tokens[5] || '90', 10);
      candidates.push({
        srNo: parseInt(tokens[0], 10) || candidates.length + 1,
        rollNo: tokens[1].trim(),
        regNo: (tokens[2] || tokens[1]).trim(),
        name: (tokens[3] || 'QUALIFIED CANDIDATE').toUpperCase(),
        fatherName: (tokens[4] || 'FATHER NAME').toUpperCase(),
        category: (tokens[5] || 'GEN').toUpperCase(),
        subCategory: 'NONE',
        marks: marks,
        totalMarks: 150,
        percentage: Number(((marks / 150) * 100).toFixed(2)),
        status: marks >= 82 ? 'QUALIFIED' : 'NOT QUALIFIED',
        district: 'UTTAR PRADESH',
        pageNo: currentPage,
        verificationHash: `UPTET21-${tokens[1].trim()}-${currentPage}`
      });
    }
  }

  return candidates;
}

// Ingest PDF Buffer using PDFParse
export async function ingestPdfBuffer(buffer: Buffer): Promise<{ totalParsed: number; added: number }> {
  isIngestionRunning = true;
  currentIngestionStatus = 'Extracting text from PDF pages...';
  let parser: any = null;
  try {
    parser = new PDFParse({ data: buffer });
    const data = await parser.getText();
    const numPages = data.total || 1;

    currentIngestionStatus = `Parsing candidate rows from ${numPages} pages...`;
    const candidates = parseGazetteTextServer(data.text || '');
    
    currentIngestionStatus = `Indexing ${candidates.length} candidates into storage shards...`;
    const added = saveServerCandidates(candidates);

    currentIngestionStatus = `Completed! ${added} new candidates indexed successfully from ${numPages} pages.`;
    return { totalParsed: candidates.length, added };
  } catch (err: any) {
    currentIngestionStatus = `Ingestion error: ${err.message || 'Unknown error'}`;
    throw err;
  } finally {
    if (parser && typeof parser.destroy === 'function') {
      try {
        await parser.destroy();
      } catch (_) {}
    }
    isIngestionRunning = false;
  }
}
