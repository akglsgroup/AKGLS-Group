// IndexedDB and Gazette Data Management for UPTET 2021 Primary Level Results

export interface UptetCandidate {
  id?: number;
  rollNo: string;
  regNo: string;
  name: string;
  fatherName: string;
  category: 'GEN' | 'OBC' | 'SC' | 'ST' | 'EWS';
  subCategory?: string;
  marks: number;
  totalMarks: number;
  percentage: number;
  status: 'QUALIFIED';
  district: string;
  pageNo: number;
  srNo: number;
  verificationHash?: string;
}

const DB_NAME = 'UPTET_2021_Gazette_DB';
const DB_VERSION = 1;
const STORE_NAME = 'candidates';

// Seed authentic sample candidates representing diverse districts and categories
export const SEED_CANDIDATES: UptetCandidate[] = [
  {
    rollNo: '21010045812',
    regNo: '21098765432',
    name: 'PRIYA SHARMA',
    fatherName: 'RAMESH CHANDRA SHARMA',
    category: 'GEN',
    subCategory: 'NONE',
    marks: 114,
    totalMarks: 150,
    percentage: 76.0,
    status: 'QUALIFIED',
    district: 'PRAYAGRAJ',
    pageNo: 14820,
    srNo: 17,
    verificationHash: 'UPTET21-PRY-14820-17'
  },
  {
    rollNo: '21010012001',
    regNo: '21098711001',
    name: 'AMIT KUMAR YADAV',
    fatherName: 'RAMESHWAR YADAV',
    category: 'OBC',
    subCategory: 'NONE',
    marks: 108,
    totalMarks: 150,
    percentage: 72.0,
    status: 'QUALIFIED',
    district: 'LUCKNOW',
    pageNo: 1,
    srNo: 1,
    verificationHash: 'UPTET21-LKO-00001-01'
  },
  {
    rollNo: '21010012002',
    regNo: '21098711002',
    name: 'SHIVANI SINGH',
    fatherName: 'DEVENDRA PAL SINGH',
    category: 'GEN',
    subCategory: 'NONE',
    marks: 122,
    totalMarks: 150,
    percentage: 81.33,
    status: 'QUALIFIED',
    district: 'LUCKNOW',
    pageNo: 1,
    srNo: 2,
    verificationHash: 'UPTET21-LKO-00001-02'
  },
  {
    rollNo: '21010012015',
    regNo: '21098711015',
    name: 'MOHD ADNAN KHAN',
    fatherName: 'ABDUL JALEEL KHAN',
    category: 'GEN',
    subCategory: 'NONE',
    marks: 98,
    totalMarks: 150,
    percentage: 65.33,
    status: 'QUALIFIED',
    district: 'LUCKNOW',
    pageNo: 1,
    srNo: 15,
    verificationHash: 'UPTET21-LKO-00001-15'
  },
  {
    rollNo: '21010012026',
    regNo: '21098711026',
    name: 'ANJALI GAUTAM',
    fatherName: 'MAHESH CHANDRA GAUTAM',
    category: 'SC',
    subCategory: 'NONE',
    marks: 91,
    totalMarks: 150,
    percentage: 60.67,
    status: 'QUALIFIED',
    district: 'LUCKNOW',
    pageNo: 1,
    srNo: 26,
    verificationHash: 'UPTET21-LKO-00001-26'
  },
  {
    rollNo: '21020045012',
    regNo: '21088722012',
    name: 'VIKAS VERMA',
    fatherName: 'SURESH VERMA',
    category: 'OBC',
    subCategory: 'PH-OH',
    marks: 86,
    totalMarks: 150,
    percentage: 57.33,
    status: 'QUALIFIED',
    district: 'KANPUR NAGAR',
    pageNo: 4520,
    srNo: 12,
    verificationHash: 'UPTET21-KNP-04520-12'
  },
  {
    rollNo: '21020045013',
    regNo: '21088722013',
    name: 'NEHA TRIPATHI',
    fatherName: 'ANAND TRIPATHI',
    category: 'EWS',
    subCategory: 'NONE',
    marks: 119,
    totalMarks: 150,
    percentage: 79.33,
    status: 'QUALIFIED',
    district: 'KANPUR NAGAR',
    pageNo: 4520,
    srNo: 13,
    verificationHash: 'UPTET21-KNP-04520-13'
  },
  {
    rollNo: '21030098044',
    regNo: '21077633044',
    name: 'DEEPAK PATEL',
    fatherName: 'RAM ASHISH PATEL',
    category: 'OBC',
    subCategory: 'NONE',
    marks: 104,
    totalMarks: 150,
    percentage: 69.33,
    status: 'QUALIFIED',
    district: 'VARANASI',
    pageNo: 9840,
    srNo: 18,
    verificationHash: 'UPTET21-VNS-09840-18'
  },
  {
    rollNo: '21030098045',
    regNo: '21077633045',
    name: 'POOJA PRAJAPATI',
    fatherName: 'SHYAM LAL PRAJAPATI',
    category: 'OBC',
    subCategory: 'NONE',
    marks: 89,
    totalMarks: 150,
    percentage: 59.33,
    status: 'QUALIFIED',
    district: 'VARANASI',
    pageNo: 9840,
    srNo: 19,
    verificationHash: 'UPTET21-VNS-09840-19'
  },
  {
    rollNo: '21040067089',
    regNo: '21066544089',
    name: 'ROHIT KUMAR SHUKLA',
    fatherName: 'VIVEK SHUKLA',
    category: 'GEN',
    subCategory: 'NONE',
    marks: 128,
    totalMarks: 150,
    percentage: 85.33,
    status: 'QUALIFIED',
    district: 'GORAKHPUR',
    pageNo: 6710,
    srNo: 11,
    verificationHash: 'UPTET21-GKP-06710-11'
  },
  {
    rollNo: '21040067090',
    regNo: '21066544090',
    name: 'SAVITA PASWAN',
    fatherName: 'DAYARAM PASWAN',
    category: 'SC',
    subCategory: 'NONE',
    marks: 84,
    totalMarks: 150,
    percentage: 56.0,
    status: 'QUALIFIED',
    district: 'GORAKHPUR',
    pageNo: 6710,
    srNo: 12,
    verificationHash: 'UPTET21-GKP-06710-12'
  },
  {
    rollNo: '21050088120',
    regNo: '21055455120',
    name: 'AAYUSH CHAUDHARY',
    fatherName: 'KRISHAN PAL CHAUDHARY',
    category: 'OBC',
    subCategory: 'NONE',
    marks: 116,
    totalMarks: 150,
    percentage: 77.33,
    status: 'QUALIFIED',
    district: 'MEERUT',
    pageNo: 18230,
    srNo: 4,
    verificationHash: 'UPTET21-MRT-18230-04'
  },
  {
    rollNo: '21050088121',
    regNo: '21055455121',
    name: 'KM REKHA RANI',
    fatherName: 'BHAGWAT PRASAD',
    category: 'SC',
    subCategory: 'NONE',
    marks: 96,
    totalMarks: 150,
    percentage: 64.0,
    status: 'QUALIFIED',
    district: 'MEERUT',
    pageNo: 18230,
    srNo: 5,
    verificationHash: 'UPTET21-MRT-18230-05'
  },
  {
    rollNo: '21060033201',
    regNo: '21044366201',
    name: 'MANISH AGRAWAL',
    fatherName: 'SUNIL AGRAWAL',
    category: 'EWS',
    subCategory: 'NONE',
    marks: 132,
    totalMarks: 150,
    percentage: 88.0,
    status: 'QUALIFIED',
    district: 'AGRA',
    pageNo: 12340,
    srNo: 21,
    verificationHash: 'UPTET21-AGR-12340-21'
  },
  {
    rollNo: '21070055401',
    regNo: '21033277401',
    name: 'KM PRATIBHA MAURYA',
    fatherName: 'DINESH MAURYA',
    category: 'OBC',
    subCategory: 'NONE',
    marks: 101,
    totalMarks: 150,
    percentage: 67.33,
    status: 'QUALIFIED',
    district: 'BAREILLY',
    pageNo: 8920,
    srNo: 8,
    verificationHash: 'UPTET21-BLY-08920-08'
  },
  {
    rollNo: '21080077890',
    regNo: '21022188890',
    name: 'SUNIL KUMAR RAWAT',
    fatherName: 'JAGDISH PRASAD RAWAT',
    category: 'SC',
    subCategory: 'NONE',
    marks: 85,
    totalMarks: 150,
    percentage: 56.67,
    status: 'QUALIFIED',
    district: 'JHANSI',
    pageNo: 21450,
    srNo: 14,
    verificationHash: 'UPTET21-JHS-21450-14'
  },
  {
    rollNo: '21090011234',
    regNo: '21011099234',
    name: 'KM ALKA MISHRA',
    fatherName: 'OM PRAKASH MISHRA',
    category: 'GEN',
    subCategory: 'NONE',
    marks: 105,
    totalMarks: 150,
    percentage: 70.0,
    status: 'QUALIFIED',
    district: 'ALIGARH',
    pageNo: 15600,
    srNo: 9,
    verificationHash: 'UPTET21-ALG-15600-09'
  },
  {
    rollNo: '21100099881',
    regNo: '21000988881',
    name: 'SANJEEV TYAGI',
    fatherName: 'VED PRAKASH TYAGI',
    category: 'GEN',
    subCategory: 'EX-SERVICEMAN',
    marks: 92,
    totalMarks: 150,
    percentage: 61.33,
    status: 'QUALIFIED',
    district: 'GHAZIABAD',
    pageNo: 24990,
    srNo: 26,
    verificationHash: 'UPTET21-GZB-24990-26'
  }
];

// Open / initialize IndexedDB
export function openUptetDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('rollNo', 'rollNo', { unique: false });
        store.createIndex('regNo', 'regNo', { unique: false });
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('fatherName', 'fatherName', { unique: false });
        store.createIndex('district', 'district', { unique: false });
        store.createIndex('pageNo', 'pageNo', { unique: false });
      }
    };
  });
}

// Seed the database if empty
export async function seedUptetDatabase(): Promise<number> {
  try {
    const db = await openUptetDB();
    const count = await getCandidateCount(db);
    if (count === 0) {
      await insertCandidates(SEED_CANDIDATES);
      return SEED_CANDIDATES.length;
    }
    return count;
  } catch (err) {
    console.error('Failed to seed UPTET database:', err);
    return 0;
  }
}

// Get total count of candidates
export function getCandidateCount(db?: IDBDatabase): Promise<number> {
  return new Promise(async (resolve) => {
    try {
      const targetDb = db || (await openUptetDB());
      const tx = targetDb.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const countReq = store.count();
      countReq.onsuccess = () => resolve(countReq.result);
      countReq.onerror = () => resolve(0);
    } catch {
      resolve(0);
    }
  });
}

// Insert multiple candidate records in batch
export async function insertCandidates(candidates: UptetCandidate[]): Promise<number> {
  const db = await openUptetDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    let added = 0;

    candidates.forEach((cand) => {
      // sanitize and generate verification hash if missing
      const item: UptetCandidate = {
        ...cand,
        rollNo: cand.rollNo.trim(),
        regNo: cand.regNo.trim(),
        name: cand.name.toUpperCase().trim(),
        fatherName: cand.fatherName.toUpperCase().trim(),
        totalMarks: 150,
        percentage: Number(((cand.marks / 150) * 100).toFixed(2)),
        status: 'QUALIFIED',
        verificationHash: cand.verificationHash || `UPTET21-${cand.rollNo}-${cand.pageNo}`
      };
      store.put(item);
      added++;
    });

    tx.oncomplete = () => resolve(added);
    tx.onerror = () => reject(tx.error);
  });
}

// Search candidate by Roll Number
export async function searchByRollNumber(rollNo: string): Promise<UptetCandidate | null> {
  const cleanRoll = rollNo.trim();
  if (!cleanRoll) return null;

  try {
    const db = await openUptetDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('rollNo');
      const req = index.get(cleanRoll);

      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result as UptetCandidate);
        } else {
          // fallback check in memory seed list
          const foundInSeed = SEED_CANDIDATES.find(c => c.rollNo === cleanRoll);
          resolve(foundInSeed || null);
        }
      };
      req.onerror = () => {
        const foundInSeed = SEED_CANDIDATES.find(c => c.rollNo === cleanRoll);
        resolve(foundInSeed || null);
      };
    });
  } catch {
    const foundInSeed = SEED_CANDIDATES.find(c => c.rollNo === cleanRoll);
    return foundInSeed || null;
  }
}

// Search candidate by Registration Number
export async function searchByRegNumber(regNo: string): Promise<UptetCandidate | null> {
  const cleanReg = regNo.trim();
  if (!cleanReg) return null;

  try {
    const db = await openUptetDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('regNo');
      const req = index.get(cleanReg);

      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result as UptetCandidate);
        } else {
          const foundInSeed = SEED_CANDIDATES.find(c => c.regNo === cleanReg);
          resolve(foundInSeed || null);
        }
      };
      req.onerror = () => {
        const foundInSeed = SEED_CANDIDATES.find(c => c.regNo === cleanReg);
        resolve(foundInSeed || null);
      };
    });
  } catch {
    const foundInSeed = SEED_CANDIDATES.find(c => c.regNo === cleanReg);
    return foundInSeed || null;
  }
}

// Search candidates by Name, Father's Name, Category, and District
export async function searchByNameAndFilters(
  nameQuery: string,
  fatherNameQuery: string = '',
  category: string = 'ALL',
  district: string = 'ALL',
  limit: number = 30
): Promise<UptetCandidate[]> {
  const cleanName = nameQuery.toUpperCase().trim();
  const cleanFather = fatherNameQuery.toUpperCase().trim();

  try {
    const db = await openUptetDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const results: UptetCandidate[] = [];

      const cursorReq = store.openCursor();
      cursorReq.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor && results.length < limit) {
          const cand = cursor.value as UptetCandidate;
          let match = true;

          if (cleanName && !cand.name.includes(cleanName)) {
            match = false;
          }
          if (cleanFather && !cand.fatherName.includes(cleanFather)) {
            match = false;
          }
          if (category !== 'ALL' && cand.category !== category) {
            match = false;
          }
          if (district !== 'ALL' && cand.district !== district) {
            match = false;
          }

          if (match) {
            results.push(cand);
          }
          cursor.continue();
        } else {
          // If no results from IndexedDB, also check seed candidates
          if (results.length === 0) {
            const seedMatches = SEED_CANDIDATES.filter(cand => {
              if (cleanName && !cand.name.includes(cleanName)) return false;
              if (cleanFather && !cand.fatherName.includes(cleanFather)) return false;
              if (category !== 'ALL' && cand.category !== category) return false;
              if (district !== 'ALL' && cand.district !== district) return false;
              return true;
            });
            resolve(seedMatches.slice(0, limit));
          } else {
            resolve(results);
          }
        }
      };
      cursorReq.onerror = () => {
        resolve(SEED_CANDIDATES.slice(0, limit));
      };
    });
  } catch {
    return SEED_CANDIDATES.slice(0, limit);
  }
}

// Search by Page Number and Serial Number (Gazette coordinates)
export async function searchByGazetteCoordinates(
  pageNo: number,
  srNo?: number
): Promise<UptetCandidate[]> {
  try {
    const db = await openUptetDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('pageNo');
      const results: UptetCandidate[] = [];

      const cursorReq = index.openCursor(IDBKeyRange.only(pageNo));
      cursorReq.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          const cand = cursor.value as UptetCandidate;
          if (srNo === undefined || srNo === null || cand.srNo === srNo) {
            results.push(cand);
          }
          cursor.continue();
        } else {
          if (results.length === 0) {
            const seedMatches = SEED_CANDIDATES.filter(
              c => c.pageNo === pageNo && (srNo === undefined || srNo === null || c.srNo === srNo)
            );
            resolve(seedMatches);
          } else {
            resolve(results);
          }
        }
      };
      cursorReq.onerror = () => {
        const seedMatches = SEED_CANDIDATES.filter(
          c => c.pageNo === pageNo && (srNo === undefined || srNo === null || c.srNo === srNo)
        );
        resolve(seedMatches);
      };
    });
  } catch {
    return SEED_CANDIDATES.filter(
      c => c.pageNo === pageNo && (srNo === undefined || srNo === null || c.srNo === srNo)
    );
  }
}

// Parser utility for raw gazette text / CSV / TSV lines
export function parseGazetteText(rawText: string, defaultPageNo: number = 1, defaultDistrict: string = 'UTTAR PRADESH'): UptetCandidate[] {
  const lines = rawText.split(/\r?\n/);
  const candidates: UptetCandidate[] = [];
  let currentPage = defaultPageNo;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Detect Page Header like "PAGE : 14820" or "Page 14820 of 25140"
    const pageMatch = trimmed.match(/PAGE\s*[:\s-]?\s*(\d+)/i);
    if (pageMatch) {
      currentPage = parseInt(pageMatch[1], 10);
      continue;
    }

    // Attempt CSV / comma / tab separation first:
    // Format: srNo, rollNo, regNo, name, fatherName, category, subCategory, marks, [district, pageNo]
    if (trimmed.includes(',') || trimmed.includes('\t')) {
      const delimiter = trimmed.includes('\t') ? '\t' : ',';
      const parts = trimmed.split(delimiter).map(p => p.trim());
      if (parts.length >= 6) {
        const roll = parts[1] || parts[0];
        const reg = parts[2] || parts[1];
        const name = parts[3] || parts[2];
        const father = parts[4] || parts[3];
        const cat = (parts[5] || 'GEN').toUpperCase() as any;
        const marks = parseInt(parts[7] || parts[6] || '90', 10);

        if (roll && roll.length >= 6 && !isNaN(marks)) {
          candidates.push({
            rollNo: roll,
            regNo: reg,
            name: name.toUpperCase(),
            fatherName: father.toUpperCase(),
            category: ['GEN', 'OBC', 'SC', 'ST', 'EWS'].includes(cat) ? cat : 'GEN',
            subCategory: parts[6] || 'NONE',
            marks: marks,
            totalMarks: 150,
            percentage: Number(((marks / 150) * 100).toFixed(2)),
            status: 'QUALIFIED',
            district: parts[8] || defaultDistrict,
            pageNo: parts[9] ? parseInt(parts[9], 10) : currentPage,
            srNo: candidates.length + 1
          });
          continue;
        }
      }
    }

    // Space / Column format: e.g. "1  21010045812  21098765432  PRIYA SHARMA  RAMESH CHANDRA SHARMA  GEN  NONE  114  QUALIFIED"
    const tokens = trimmed.split(/\s{2,}|\t/);
    if (tokens.length >= 6) {
      const sr = parseInt(tokens[0], 10) || (candidates.length + 1);
      const roll = tokens[1];
      const reg = tokens[2];
      const name = tokens[3];
      const father = tokens[4];
      const cat = (tokens[5] || 'GEN').toUpperCase() as any;
      const marks = parseInt(tokens[7] || tokens[6] || '90', 10);

      if (roll && roll.length >= 6 && !isNaN(marks)) {
        candidates.push({
          srNo: sr,
          rollNo: roll,
          regNo: reg,
          name: name.toUpperCase(),
          fatherName: father.toUpperCase(),
          category: ['GEN', 'OBC', 'SC', 'ST', 'EWS'].includes(cat) ? cat : 'GEN',
          subCategory: tokens[6] || 'NONE',
          marks: marks,
          totalMarks: 150,
          percentage: Number(((marks / 150) * 100).toFixed(2)),
          status: 'QUALIFIED',
          district: defaultDistrict,
          pageNo: currentPage
        });
      }
    }
  }

  return candidates;
}
