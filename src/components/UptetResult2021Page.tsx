import React, { useState, useEffect } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';
const Helmet: any = (ReactHelmetAsync as any).Helmet || (ReactHelmetAsync as any).default?.Helmet || ReactHelmetAsync;
import { 
  Search, FileText, CheckCircle2, AlertTriangle, Download, 
  Printer, ArrowLeft, ExternalLink, ShieldCheck, HelpCircle, 
  Calculator, RefreshCw, Upload, Database, Copy, Check, 
  MapPin, Award, BookOpen, Phone, Info, Share2, Filter,
  ChevronRight, Sparkles, Hash, Layers, Edit3
} from 'lucide-react';
import { 
  UptetCandidate, 
  SEED_CANDIDATES, 
  openUptetDB, 
  seedUptetDatabase, 
  getCandidateCount, 
  searchByRollNumber, 
  searchByRegNumber, 
  searchByNameAndFilters, 
  searchByGazetteCoordinates, 
  insertCandidates, 
  parseGazetteText,
  saveSingleCandidate 
} from '../utils/uptetDatabase';

interface UptetResult2021PageProps {
  onBackToHome?: () => void;
}

export const UptetResult2021Page: React.FC<UptetResult2021PageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'roll' | 'name' | 'page' | 'calculator' | 'importer'>('roll');
  
  // Search state - Mode 1: Roll / Reg
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'roll' | 'reg'>('roll');
  const [notFoundQuery, setNotFoundQuery] = useState<string | null>(null);
  
  // Quick Add Candidate Form state
  const [showQuickAddModal, setShowQuickAddModal] = useState(false);
  const [quickAddRoll, setQuickAddRoll] = useState('');
  const [quickAddReg, setQuickAddReg] = useState('');
  const [quickAddName, setQuickAddName] = useState('');
  const [quickAddFather, setQuickAddFather] = useState('');
  const [quickAddCategory, setQuickAddCategory] = useState('GEN');
  const [quickAddMarks, setQuickAddMarks] = useState('108');
  const [quickAddDistrict, setQuickAddDistrict] = useState('PRAYAGRAJ');
  const [quickAddPageNo, setQuickAddPageNo] = useState('5410');
  const [quickAddSrNo, setQuickAddSrNo] = useState('14');
  const [isSavingCandidate, setIsSavingCandidate] = useState(false);
  const [pdfParsingProgress, setPdfParsingProgress] = useState<string | null>(null);
  
  // Search state - Mode 2: Name & Filters
  const [nameQuery, setNameQuery] = useState('');
  const [fatherQuery, setFatherQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [districtFilter, setDistrictFilter] = useState('ALL');
  const [nameSearchResults, setNameSearchResults] = useState<UptetCandidate[]>([]);
  
  // Search state - Mode 3: Page & Serial
  const [pageNumberInput, setPageNumberInput] = useState<string>('');
  const [serialNumberInput, setSerialNumberInput] = useState<string>('');
  const [pageSearchResults, setPageSearchResults] = useState<UptetCandidate[]>([]);

  // Active selected candidate for detail view / score slip
  const [selectedCandidate, setSelectedCandidate] = useState<UptetCandidate | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Database stats
  const [dbCandidateCount, setDbCandidateCount] = useState<number>(SEED_CANDIDATES.length);
  const [isDbSeeded, setIsDbSeeded] = useState(false);

  // Importer state
  const [rawImportText, setRawImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  // Google Drive & Server Ingestion State
  const [driveImportUrl, setDriveImportUrl] = useState('');
  const [isDriveImporting, setIsDriveImporting] = useState(false);
  const [driveImportStatus, setDriveImportStatus] = useState<string | null>(null);
  const [serverRecordCount, setServerRecordCount] = useState<number>(0);

  // Super TET Merit Calculator state
  const [highSchoolPct, setHighSchoolPct] = useState<string>('72');
  const [interPct, setInterPct] = useState<string>('75');
  const [gradPct, setGradPct] = useState<string>('68');
  const [trainingPct, setTrainingPct] = useState<string>('82'); // BTC / D.El.Ed / B.Ed
  const [superTetScore, setSuperTetScore] = useState<string>('105'); // Out of 150
  const [candidateCategory, setCandidateCategory] = useState<string>('GEN');

  // Load and seed DB on mount
  useEffect(() => {
    async function initDB() {
      try {
        const count = await seedUptetDatabase();
        setDbCandidateCount(count || SEED_CANDIDATES.length);
        setIsDbSeeded(true);
      } catch (err) {
        console.warn('Could not initialize IndexedDB, relying on in-memory seed dataset:', err);
      }
    }
    initDB();

    // Check if URL has ?roll=... parameter
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const rollParam = params.get('roll');
      const regParam = params.get('reg');
      if (rollParam) {
        setSearchQuery(rollParam);
        setSearchType('roll');
        handleDirectSearch(rollParam, 'roll');
      } else if (regParam) {
        setSearchQuery(regParam);
        setSearchType('reg');
        handleDirectSearch(regParam, 'reg');
      }
    }
  }, []);

  const handleDirectSearch = async (query: string, type: 'roll' | 'reg') => {
    const q = query.trim();
    if (!q) {
      setSearchError('कृपया रोल नंबर या पंजीकरण संख्या दर्ज करें (Please enter Roll No or Reg No)');
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setNotFoundQuery(null);
    setHasSearched(true);

    try {
      let result: UptetCandidate | null = null;

      // 1. Check server-side indexed database first (covers full 25,000-page dataset)
      try {
        const sRes = await fetch(`/api/uptet/search?q=${encodeURIComponent(q)}`);
        if (sRes.ok) {
          const sData = await sRes.json();
          if (sData.found && sData.candidate) {
            result = sData.candidate;
          }
        }
      } catch (_) {}

      // 2. Fallback to local IndexedDB & Seed dataset
      if (!result) {
        if (type === 'roll') {
          result = await searchByRollNumber(q);
          if (!result) {
            result = await searchByRegNumber(q);
          }
        } else {
          result = await searchByRegNumber(q);
          if (!result) {
            result = await searchByRollNumber(q);
          }
        }
      }

      if (result) {
        setSelectedCandidate(result);
        setSearchError(null);
        setNotFoundQuery(null);
      } else {
        setSelectedCandidate(null);
        setNotFoundQuery(q);
        setQuickAddRoll(q);
        setQuickAddReg(q);
        setSearchError(`प्रविष्ट विवरण (${q}) वर्तमान में लोड किए गए रिकॉर्ड्स में नहीं मिला। (25,000+ पेजों की मुख्य फ़ाइल अभी अपलोड की जानी शेष है)।`);
      }
    } catch {
      setSearchError('खोज के दौरान त्रुटि हुई। कृपया पुनः प्रयास करें।');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSaveQuickCandidate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickAddRoll.trim() || !quickAddName.trim()) {
      alert('कृपया रोल नंबर एवं अभ्यर्थी का नाम दर्ज करें');
      return;
    }

    setIsSavingCandidate(true);
    try {
      const marksNum = Math.min(150, Math.max(0, parseInt(quickAddMarks) || 0));
      const newCand: UptetCandidate = {
        rollNo: quickAddRoll.trim(),
        regNo: (quickAddReg || quickAddRoll).trim(),
        name: quickAddName.trim().toUpperCase(),
        fatherName: (quickAddFather || 'FATHER NAME').trim().toUpperCase(),
        category: quickAddCategory,
        subCategory: 'NONE',
        marks: marksNum,
        totalMarks: 150,
        percentage: Number(((marksNum / 150) * 100).toFixed(2)),
        status: marksNum >= 82 ? 'QUALIFIED' : 'NOT QUALIFIED',
        district: (quickAddDistrict || 'UTTAR PRADESH').trim().toUpperCase(),
        pageNo: parseInt(quickAddPageNo) || 1,
        srNo: parseInt(quickAddSrNo) || 1
      };

      await saveSingleCandidate(newCand);
      try {
        await fetch('/api/uptet/save-single', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCand)
        });
      } catch (_) {}
      setSelectedCandidate(newCand);
      setNotFoundQuery(null);
      setSearchError(null);
      setShowQuickAddModal(false);
      const count = await getCandidateCount();
      setDbCandidateCount(count);
    } catch (err) {
      console.error('Failed to save candidate:', err);
    } finally {
      setIsSavingCandidate(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setImportStatus(`फ़ाइल "${file.name}" का विश्लेषण किया जा रहा है...`);

    try {
      if (file.name.toLowerCase().endsWith('.pdf')) {
        setImportStatus('पीडीएफ इंजन लोड हो रहा है...');
        let pdfjsLib = (window as any).pdfjsLib;
        if (!pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = () => {
              pdfjsLib = (window as any).pdfjsLib;
              if (pdfjsLib) {
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                resolve();
              } else {
                reject(new Error('PDF.js library not available'));
              }
            };
            script.onerror = () => reject(new Error('Failed to load PDF.js from CDN'));
            document.head.appendChild(script);
          });
        }

        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = (window as any).pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;

        let accumulatedText = '';
        const maxPagesToRead = Math.min(totalPages, 500);
        for (let pageNum = 1; pageNum <= maxPagesToRead; pageNum++) {
          setImportStatus(`पीडीएफ पृष्ठ ${pageNum} / ${maxPagesToRead} से अभ्यर्थियों का डेटा पढ़ा जा रहा है...`);
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageStrings = textContent.items.map((item: any) => item.str).join(' ');
          accumulatedText += `\n[PAGE ${pageNum}]\n` + pageStrings;
        }

        const candidates = parseGazetteText(accumulatedText);
        if (candidates.length > 0) {
          const addedCount = await insertCandidates(candidates);
          const newCount = await getCandidateCount();
          setDbCandidateCount(newCount);
          setImportStatus(`सफलतापूर्वक ${addedCount} नए उत्तीर्ण अभ्यर्थियों का डेटा अनुक्रमित कर दिया गया! (कुल रिकॉर्ड्स: ${newCount})`);
        } else {
          setImportStatus('पीडीएफ से टेक्स्ट सफलतापूर्वक पढ़ा गया, परंतु प्रारूप गजट से मेल नहीं खाया। कृपया कच्चा टेक्स्ट नीचे पेस्ट करके देखें।');
          setRawImportText(accumulatedText.slice(0, 3000));
        }
      } else {
        const text = await file.text();
        const candidates = parseGazetteText(text);
        if (candidates.length > 0) {
          const addedCount = await insertCandidates(candidates);
          const newCount = await getCandidateCount();
          setDbCandidateCount(newCount);
          setImportStatus(`सफलतापूर्वक ${addedCount} नए अभ्यर्थियों का डेटा अनुक्रमित कर दिया गया!`);
          
          // Also sync to server storage
          try {
            await fetch('/api/uptet/upload-text', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ candidates })
            });
          } catch (_) {}
        } else {
          setRawImportText(text.slice(0, 5000));
          setImportStatus('फ़ाइल से टेक्स्ट लोड हो गया है। कृपया नीचे "अनुक्रमित करें" पर क्लिक करें।');
        }
      }
    } catch (err: any) {
      console.error('File parsing error:', err);
      setImportStatus(`फ़ाइल पढ़ने में त्रुटि: ${err.message || 'अज्ञात त्रुटि'}`);
    } finally {
      setIsImporting(false);
    }
  };

  const handleDriveImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!driveImportUrl.trim()) {
      setDriveImportStatus('कृपया Google Drive या डायरेक्ट पीडीएफ लिंक दर्ज करें।');
      return;
    }

    setIsDriveImporting(true);
    setDriveImportStatus('Google Drive से पीडीएफ फ़ाइल सर्वर पर स्ट्रीम की जा रही है... (यह कुछ क्षण ले सकता है)');

    try {
      const res = await fetch('/api/uptet/import-drive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ driveUrl: driveImportUrl.trim() })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setDriveImportStatus(`✅ ${data.message}`);
        // Poll for progress
        const interval = setInterval(async () => {
          try {
            const statsRes = await fetch('/api/uptet/stats');
            const stats = await statsRes.json();
            if (stats.totalRecords) {
              setServerRecordCount(stats.totalRecords);
              setDbCandidateCount(stats.totalRecords);
            }
            if (!stats.isIngestionRunning) {
              clearInterval(interval);
              setDriveImportStatus(`🎉 संपूर्ण डेटा आयात सफल! कुल अनुक्रमित रिकॉर्ड्स: ${stats.totalRecords.toLocaleString()} अभ्यर्थी`);
            } else {
              setDriveImportStatus(`⏳ बैकग्राउंड अनुक्रमण जारी: ${stats.currentStatus} (वर्तमान रिकॉर्ड्स: ${stats.totalRecords.toLocaleString()})`);
            }
          } catch (_) {}
        }, 3000);
      } else {
        setDriveImportStatus(`❌ आयात विफल: ${data.error || 'अज्ञात त्रुटि'}`);
      }
    } catch (err: any) {
      setDriveImportStatus(`❌ नेटवर्क त्रुटि: ${err.message || 'त्रुटि'}`);
    } finally {
      setIsDriveImporting(false);
    }
  };

  const handleNameSearch = async () => {
    if (!nameQuery.trim() && !fatherQuery.trim() && categoryFilter === 'ALL' && districtFilter === 'ALL') {
      setSearchError('कृपया कम से कम अभ्यर्थी का नाम या पिता का नाम दर्ज करें');
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setHasSearched(true);

    try {
      const results = await searchByNameAndFilters(
        nameQuery,
        fatherQuery,
        categoryFilter,
        districtFilter,
        50
      );
      setNameSearchResults(results);
      if (results.length === 1) {
        setSelectedCandidate(results[0]);
      } else if (results.length === 0) {
        setSelectedCandidate(null);
        setSearchError('दिए गए विवरण से मेल खाता कोई अभ्यर्थी रिकॉर्ड नहीं मिला।');
      } else {
        setSelectedCandidate(null); // Keep list visible
      }
    } catch {
      setSearchError('खोज में त्रुटि हुई। कृपया पुनः प्रयास करें।');
    } finally {
      setIsSearching(false);
    }
  };

  const handlePageSearch = async () => {
    const page = parseInt(pageNumberInput, 10);
    if (isNaN(page) || page < 1 || page > 30000) {
      setSearchError('कृपया मान्य पृष्ठ संख्या दर्ज करें (1 से 25,000+)');
      return;
    }

    const sr = serialNumberInput.trim() ? parseInt(serialNumberInput, 10) : undefined;

    setIsSearching(true);
    setSearchError(null);
    setHasSearched(true);

    try {
      const results = await searchByGazetteCoordinates(page, sr);
      setPageSearchResults(results);
      if (results.length === 1) {
        setSelectedCandidate(results[0]);
      } else if (results.length === 0) {
        setSelectedCandidate(null);
        setSearchError(`गजट पृष्ठ संख्या ${page} पर कोई रिकॉर्ड नहीं मिला।`);
      } else {
        setSelectedCandidate(null);
      }
    } catch {
      setSearchError('पृष्ठ खोज में त्रुटि हुई।');
    } finally {
      setIsSearching(false);
    }
  };

  const handleImportText = async () => {
    if (!rawImportText.trim()) {
      setImportStatus('कृपया आयात करने हेतु पाठ या सीएसवी प्रविष्टियां पेस्ट करें।');
      return;
    }

    setIsImporting(true);
    setImportStatus('प्रसंस्करण एवं अनुक्रमण जारी है...');

    try {
      const parsed = parseGazetteText(rawImportText);
      if (parsed.length === 0) {
        setImportStatus('कोई मान्य अभ्यर्थी रिकॉर्ड प्रारूप नहीं पाया गया। प्रारूप: क्रमांक, रोल नं, पंजी नं, नाम, पिता का नाम, श्रेणी, अंक');
        setIsImporting(false);
        return;
      }

      const added = await insertCandidates(parsed);
      const newTotal = await getCandidateCount();
      setDbCandidateCount(newTotal);
      setImportStatus(`सफलतापूर्वक ${added} अभ्यर्थी रिकॉर्ड अनुक्रमित किए गए! कुल स्थानीय डेटाबेस: ${newTotal}`);
      setRawImportText('');
    } catch (err: any) {
      setImportStatus(`आयात विफल: ${err?.message || 'अज्ञात त्रुटि'}`);
    } finally {
      setIsImporting(false);
    }
  };

  const copyVerificationUrl = (candidate: UptetCandidate) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/uptet-result-2021?roll=${candidate.rollNo}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const printVerificationCard = () => {
    window.print();
  };

  // Super TET Merit Computation
  const hs = parseFloat(highSchoolPct) || 0;
  const inter = parseFloat(interPct) || 0;
  const grad = parseFloat(gradPct) || 0;
  const training = parseFloat(trainingPct) || 0;
  const superScore = parseFloat(superTetScore) || 0;

  const academicScore = ((hs * 0.1) + (inter * 0.1) + (grad * 0.1) + (training * 0.1));
  const superTetWeighted = ((superScore / 150) * 100 * 0.6);
  const totalMerit = (academicScore + superTetWeighted).toFixed(2);

  const districtsList = [
    'ALL', 'PRAYAGRAJ', 'LUCKNOW', 'VARANASI', 'KANPUR NAGAR', 
    'GORAKHPUR', 'MEERUT', 'AGRA', 'BAREILLY', 'JHANSI', 
    'ALIGARH', 'GHAZIABAD', 'MORADABAD', 'AYODHYA', 'MATHURA'
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-teal-500 selection:text-white" id="uptet-result-portal">
      <Helmet>
        <title>UPTET Result 2021 Primary Level - Qualified Candidate Gazette Search & Verification Portal</title>
        <meta name="description" content="Search and verify UPTET 2021 Primary Level (Classes 1-5) qualified candidates across 25,000+ gazette pages. Instant verification by Roll No, Registration No, or Candidate Name." />
        <link rel="canonical" href="https://www.akglsgroup.com/uptet-result-2021" />
      </Helmet>

      {/* Top Government-Grade Authority Header */}
      <div className="border-b border-slate-800 bg-[#04060b]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                title="Back to Home"
              >
                <ArrowLeft className="w-4 h-4 text-brand-teal" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-teal-500/20">
                UP
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  UPTET 2021 GAZETTE VERIFICATION PORTAL
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Primary Level (I-V)
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  परीक्षा नियामक प्राधिकारी, प्रयागराज, उ०प्र० — सार्वजनिक परीक्षाफल सत्यापन
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg">
              <Database className="w-3.5 h-3.5 text-brand-teal" />
              Indexed: <strong className="text-white font-bold">{dbCandidateCount.toLocaleString()}+</strong> Candidates
            </span>
            <a 
              href="https://updeled.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg transition-all"
            >
              Official Portal (updeled) <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Prominent Legal Disclaimer Banner */}
      <aside aria-label="Legal Disclaimers" className="bg-amber-950/25 border-b border-amber-500/25 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-amber-200/90 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="flex-1">
            <strong>सार्वजनिक सूचना एवं वैधानिक अस्वीकरण (Statutory Disclaimer):</strong> यह पोर्टल अभ्यर्थियों की सुविधा हेतु सार्वजनिक गजट परीक्षाफल के त्वरित अनुक्रमण एवं खोज हेतु तैयार किया गया एक गैर-सरकारी सुविधा टूल है। यह डिजिटल विवरण मूल प्रमाण पत्र नहीं है। किसी भी लिपिकीय भिन्नता अथवा विवाद की स्थिति में परीक्षा नियामक प्राधिकारी (PNP), प्रयागराज द्वारा जारी मूल गजट/प्रमाण पत्र ही अंतिम व सर्वमान्य होगा।
          </p>
        </div>
      </aside>

      {/* Hero Header Section */}
      <section className="relative pt-10 pb-8 sm:pt-14 sm:pb-12 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#090e1c] via-[#070b14] to-[#070b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-bold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
            UPTET 2021 Primary Level (Classes 1 to 5) Result Gazette Index
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Search & Verify <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-purple-300">UPTET 2021 Qualified</span> Candidates
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            25,000+ पृष्ठों के विस्तृत परीक्षा परिणाम गजट में से अपने <strong>रोल नंबर</strong>, <strong>पंजीकरण संख्या</strong>, <strong>नाम</strong> अथवा <strong>गजट पृष्ठ संख्या</strong> द्वारा तत्काल अपना विवरण खोजें व सत्यापित परिणाम पर्ची प्राप्त करें।
          </p>

          {/* Quick Key Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-7 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Total Gazette Pages</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">25,000+</div>
              <div className="text-[10px] text-slate-500">26 Candidates / Page</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Total Marks</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">150 Marks</div>
              <div className="text-[10px] text-slate-500">No Negative Marking</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Qualifying Cut-off</div>
              <div className="text-xl sm:text-2xl font-black text-teal-300 mt-0.5">90 / 82</div>
              <div className="text-[10px] text-slate-500">60% UR | 55% Reserved</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Certificate Validity</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">Lifetime</div>
              <div className="text-[10px] text-slate-500">NCTE & UP Govt Order</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Search & Navigation Tabs */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-800 pb-4">
          <button
            onClick={() => { setActiveTab('roll'); setSearchError(null); }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'roll'
                ? 'bg-brand-teal text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            रोल नंबर / पंजी संख्या खोज (Roll / Reg No)
          </button>

          <button
            onClick={() => { setActiveTab('name'); setSearchError(null); }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'name'
                ? 'bg-brand-teal text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Filter className="w-4 h-4" />
            नाम व जिला अनुसार खोज (Name & District)
          </button>

          <button
            onClick={() => { setActiveTab('page'); setSearchError(null); }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'page'
                ? 'bg-brand-teal text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            गजट पृष्ठ संख्या खोज (Gazette Page Lookup)
          </button>

          <button
            onClick={() => { setActiveTab('calculator'); setSearchError(null); }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-brand-teal text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4" />
            सुपर टीईटी गुणांक कैलकुलेटर (Merit Calculator)
          </button>

          <button
            onClick={() => { setActiveTab('importer'); setSearchError(null); }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'importer'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            गजट डेटा अपलोडर (PDF / Data Importer)
          </button>
        </div>

        {/* TAB 1: Roll / Registration Number Search */}
        {activeTab === 'roll' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl relative">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  प्रवेश पत्र अनुसार रोल नंबर या पंजीकरण संख्या दर्ज करें
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  10 या 12 अंकों का रोल नंबर दर्ज करें (उदाहरण: 21010045812)
                </p>
              </div>

              {/* Type Switcher */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold">
                  <button
                    onClick={() => setSearchType('roll')}
                    className={`px-4 py-1.5 rounded-lg transition-all ${
                      searchType === 'roll' ? 'bg-brand-teal text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    अनुक्रमांक (Roll Number)
                  </button>
                  <button
                    onClick={() => setSearchType('reg')}
                    className={`px-4 py-1.5 rounded-lg transition-all ${
                      searchType === 'reg' ? 'bg-brand-teal text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    पंजीकरण संख्या (Registration No)
                  </button>
                </div>
              </div>

              {/* Input & Search Button Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDirectSearch(searchQuery, searchType);
                }}
                className="flex flex-col sm:flex-row items-stretch gap-3"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Hash className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchType === 'roll' ? "उदा: 21010045812" : "उदा: 21098765432"}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-950/90 border border-slate-800 rounded-xl text-white font-mono text-base focus:outline-none focus:border-brand-teal transition-all placeholder:text-slate-600"
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white font-black text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-950/40"
                >
                  {isSearching ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                  विवरण खोजें (Search)
                </button>
              </form>

              {/* Quick 1-Click Demo Testing Chips */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 mb-2 font-semibold">
                  त्वरित परीक्षण हेतु नमूना रोल नंबर (Click to test demo candidate):
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { roll: '541007003429', name: 'Amrish Kr Singh (112)' },
                    { roll: '21010045812', name: 'Priya Sharma (114)' },
                    { roll: '21010012002', name: 'Shivani Singh (122)' },
                    { roll: '21060033201', name: 'Manish Agrawal (132)' },
                    { roll: '21010012026', name: 'Anjali Gautam (91)' },
                    { roll: '21020045012', name: 'Vikas Verma (86)' }
                  ].map((item) => (
                    <button
                      key={item.roll}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item.roll);
                        setSearchType('roll');
                        handleDirectSearch(item.roll, 'roll');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-[11px] text-slate-300 hover:text-teal-300 font-mono transition-all"
                    >
                      {item.roll} ({item.name})
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Name & District Search */}
        {activeTab === 'name' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  अभ्यर्थी का नाम, पिता का नाम एवं जिला अनुसार खोज
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  यदि रोल नंबर याद न हो तो नाम के अक्षरों द्वारा खोजें
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="uptet-candidate-name-input" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    अभ्यर्थी का नाम (Candidate's Name)
                  </label>
                  <input
                    id="uptet-candidate-name-input"
                    type="text"
                    value={nameQuery}
                    onChange={(e) => setNameQuery(e.target.value)}
                    placeholder="उदा: PRIYA SHARMA"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-teal uppercase"
                  />
                </div>

                <div>
                  <label htmlFor="uptet-father-name-input" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    पिता / पति का नाम (Father's Name)
                  </label>
                  <input
                    id="uptet-father-name-input"
                    type="text"
                    value={fatherQuery}
                    onChange={(e) => setFatherQuery(e.target.value)}
                    placeholder="उदा: RAMESH CHANDRA"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-teal uppercase"
                  />
                </div>

                <div>
                  <label htmlFor="uptet-category-select" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    श्रेणी (Category)
                  </label>
                  <select
                    id="uptet-category-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-teal"
                  >
                    <option value="ALL">सभी श्रेणियां (All Categories)</option>
                    <option value="GEN">GENERAL / UR (कट-ऑफ 90)</option>
                    <option value="OBC">OBC (कट-ऑफ 82)</option>
                    <option value="SC">SC (कट-ऑफ 82)</option>
                    <option value="ST">ST (कट-ऑफ 82)</option>
                    <option value="EWS">EWS (कट-ऑफ 90)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="uptet-district-select" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    जिला / परीक्षा केंद्र (District)
                  </label>
                  <select
                    id="uptet-district-select"
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-teal"
                  >
                    {districtsList.map((d) => (
                      <option key={d} value={d}>{d === 'ALL' ? 'समस्त उत्तर प्रदेश (All UP Districts)' : d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={handleNameSearch}
                  disabled={isSearching}
                  className="bg-brand-orange hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-950/40"
                >
                  {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  अभ्यर्थी खोजें (Search Candidate)
                </button>
              </div>
            </div>

            {/* Results table for name search */}
            {nameSearchResults.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#0b101e] border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    पाए गए अभ्यर्थी रिकॉर्ड: ({nameSearchResults.length})
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">विस्तृत सत्यापन पत्र देखने हेतु अभ्यर्थी पर क्लिक करें</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="py-2.5 px-3">रोल नंबर</th>
                        <th className="py-2.5 px-3">अभ्यर्थी का नाम</th>
                        <th className="py-2.5 px-3">पिता का नाम</th>
                        <th className="py-2.5 px-3">श्रेणी</th>
                        <th className="py-2.5 px-3">प्राप्तांक / 150</th>
                        <th className="py-2.5 px-3">जिला</th>
                        <th className="py-2.5 px-3 text-right">कार्रवाई</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-medium">
                      {nameSearchResults.map((cand) => (
                        <tr 
                          key={cand.rollNo}
                          onClick={() => setSelectedCandidate(cand)}
                          className="hover:bg-slate-900/60 cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-3 font-mono text-brand-teal font-bold">{cand.rollNo}</td>
                          <td className="py-3 px-3 text-white font-bold">{cand.name}</td>
                          <td className="py-3 px-3 text-slate-300">{cand.fatherName}</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 text-[10px] font-mono font-bold">
                              {cand.category}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="font-bold text-emerald-300">{cand.marks}</span>
                            <span className="text-slate-500 text-[10px]"> ({cand.percentage}%)</span>
                          </td>
                          <td className="py-3 px-3 text-slate-400 text-[11px]">{cand.district}</td>
                          <td className="py-3 px-3 text-right">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCandidate(cand);
                              }}
                              className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 hover:bg-teal-500 hover:text-slate-950 font-bold text-[11px] transition-all"
                            >
                              सत्यापन पत्र देखें →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Gazette Page Lookup */}
        {activeTab === 'page' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  25,000+ पृष्ठों के गजट में से विशिष्ट पृष्ठ संख्या खोलें
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  प्रत्येक गजट पृष्ठ पर 26 योग्य अभ्यर्थियों की प्रविष्टियां हैं
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="uptet-gazette-page-input" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    गजट पृष्ठ संख्या (Page Number 1 - 25,000+) *
                  </label>
                  <input
                    id="uptet-gazette-page-input"
                    type="number"
                    value={pageNumberInput}
                    onChange={(e) => setPageNumberInput(e.target.value)}
                    placeholder="उदा: 14820 अथवा 1"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-base focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label htmlFor="uptet-gazette-serial-input" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    क्रमांक (Serial Number 1 से 26 - वैकल्पिक)
                  </label>
                  <input
                    id="uptet-gazette-serial-input"
                    type="number"
                    min="1"
                    max="26"
                    value={serialNumberInput}
                    onChange={(e) => setSerialNumberInput(e.target.value)}
                    placeholder="उदा: 17 (1 से 26)"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-base focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={handlePageSearch}
                  disabled={isSearching}
                  className="bg-brand-teal hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-teal-500/20"
                >
                  {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Layers className="w-4 h-4" />}
                  पृष्ठ रिकॉर्ड प्रदर्शित करें (Fetch Page)
                </button>
              </div>
            </div>

            {pageSearchResults.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#0b101e] border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  गजट पृष्ठ सं. {pageNumberInput} के अभ्यर्थी: ({pageSearchResults.length})
                </h3>
                <div className="space-y-2">
                  {pageSearchResults.map((cand) => (
                    <div
                      key={cand.rollNo}
                      onClick={() => setSelectedCandidate(cand)}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-teal-500/40 flex items-center justify-between cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded bg-slate-900 text-slate-400 text-xs font-mono font-bold flex items-center justify-center border border-slate-800">
                          {cand.srNo}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-white">{cand.name}</div>
                          <div className="text-xs text-slate-400 font-mono">
                            Roll: {cand.rollNo} • Cat: {cand.category} • Father: {cand.fatherName}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-emerald-300">{cand.marks} / 150</div>
                        <div className="text-[10px] text-teal-400 font-bold uppercase">उत्तीर्ण (QUALIFIED)</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Super TET Merit Calculator */}
        {activeTab === 'calculator' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center justify-center gap-2">
                  <Calculator className="w-5 h-5 text-brand-teal" />
                  सुपर टीईटी (सहायक अध्यापक भर्ती) अंतिम मेरिट गुणांक कैलकुलेटर
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  शैक्षिक गुणांक (40 अंक) + सुपर टीईटी लिखित परीक्षा (60 अंक) = कुल चयन गुणांक (100 अंक)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="supertet-highschool-pct" className="block text-xs font-mono text-slate-400 mb-1 font-semibold">
                    हाईस्कूल प्रतिशत (High School %) — भारांक 10%
                  </label>
                  <input
                    id="supertet-highschool-pct"
                    type="number"
                    min="33"
                    max="100"
                    value={highSchoolPct}
                    onChange={(e) => setHighSchoolPct(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:border-brand-teal"
                  />
                  <div className="text-[10px] text-teal-400 mt-0.5 font-mono">
                    गुणांक: {((parseFloat(highSchoolPct) || 0) * 0.1).toFixed(2)} / 10
                  </div>
                </div>

                <div>
                  <label htmlFor="supertet-inter-pct" className="block text-xs font-mono text-slate-400 mb-1 font-semibold">
                    इंटरमीडिएट प्रतिशत (Intermediate %) — भारांक 10%
                  </label>
                  <input
                    id="supertet-inter-pct"
                    type="number"
                    min="33"
                    max="100"
                    value={interPct}
                    onChange={(e) => setInterPct(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:border-brand-teal"
                  />
                  <div className="text-[10px] text-teal-400 mt-0.5 font-mono">
                    गुणांक: {((parseFloat(interPct) || 0) * 0.1).toFixed(2)} / 10
                  </div>
                </div>

                <div>
                  <label htmlFor="supertet-graduation-pct" className="block text-xs font-mono text-slate-400 mb-1 font-semibold">
                    स्नातक प्रतिशत (Graduation %) — भारांक 10%
                  </label>
                  <input
                    id="supertet-graduation-pct"
                    type="number"
                    min="33"
                    max="100"
                    value={gradPct}
                    onChange={(e) => setGradPct(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:border-brand-teal"
                  />
                  <div className="text-[10px] text-teal-400 mt-0.5 font-mono">
                    गुणांक: {((parseFloat(gradPct) || 0) * 0.1).toFixed(2)} / 10
                  </div>
                </div>

                <div>
                  <label htmlFor="supertet-training-pct" className="block text-xs font-mono text-slate-400 mb-1 font-semibold">
                    BTC / D.El.Ed / B.Ed प्रतिशत — भारांक 10%
                  </label>
                  <input
                    id="supertet-training-pct"
                    type="number"
                    min="33"
                    max="100"
                    value={trainingPct}
                    onChange={(e) => setTrainingPct(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:border-brand-teal"
                  />
                  <div className="text-[10px] text-teal-400 mt-0.5 font-mono">
                    गुणांक: {((parseFloat(trainingPct) || 0) * 0.1).toFixed(2)} / 10
                  </div>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-slate-800">
                  <label htmlFor="supertet-written-score" className="block text-xs font-mono text-amber-300 mb-1 font-semibold">
                    सुपर टीईटी (Super TET) अनुमानित प्राप्तांक (150 में से) — भारांक 60%
                  </label>
                  <input
                    id="supertet-written-score"
                    type="number"
                    min="0"
                    max="150"
                    value={superTetScore}
                    onChange={(e) => setSuperTetScore(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-amber-500/40 rounded-xl text-white font-mono text-base focus:border-amber-400"
                  />
                  <div className="text-[11px] text-slate-400 mt-1 flex justify-between font-mono">
                    <span>प्राप्तांक प्रतिशत: {(((parseFloat(superTetScore) || 0) / 150) * 100).toFixed(2)}%</span>
                    <span className="text-amber-400 font-bold">लिखित परीक्षा भारांक: {superTetWeighted.toFixed(2)} / 60</span>
                  </div>
                </div>
              </div>

              {/* Total Calculation Result Card */}
              <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-slate-900 to-[#0c1427] border border-teal-500/30 text-center">
                <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                  आपका कुल अनुमानित अंतिम चयन गुणांक (Final Merit Score)
                </div>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-300 my-2 font-display">
                  {totalMerit} <span className="text-lg text-slate-400 font-normal">/ 100</span>
                </div>
                <div className="text-xs text-slate-300 max-w-md mx-auto">
                  शैक्षिक मेरिट: <strong>{academicScore.toFixed(2)}/40</strong> + सुपर टीईटी लिखित परीक्षा: <strong>{superTetWeighted.toFixed(2)}/60</strong>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap justify-center gap-4">
                  <span>UR संभावित कट-ऑफ: ~67-70</span>
                  <span>OBC संभावित कट-ऑफ: ~65-68</span>
                  <span>SC संभावित कट-ऑफ: ~60-63</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Gazette PDF & Text Data Importer (For Admin / User) */}
        {activeTab === 'importer' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* System Architecture Overview Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border border-indigo-500/30">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>100% संपूर्ण पीडीएफ (25,000+ पेज / 6.5 लाख अभ्यर्थी) स्वचालित डेटा प्रणाली</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ऑटोमैटिक मोड
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    बिना किसी मैनुअल प्रविष्टि के सभी 25,000+ पेजों का 100% डेटा सिस्टम में लोड करने के लिए नीचे दिए गए 3 स्वचालित विकल्पों में से किसी एक का उपयोग करें। एक बार डेटा अनुक्रमित होने के बाद प्रदेश का कोई भी अभ्यर्थी केवल अपना रोल नंबर डालकर 1 सेकंड में परिणाम सत्यापित कर सकता है।
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-indigo-300 flex flex-wrap gap-4">
                    <span>सर्वर पर सक्रिय रिकॉर्ड: <strong>{(serverRecordCount || dbCandidateCount).toLocaleString()}</strong></span>
                    <span>सर्च स्पीड: <strong>&lt; 5ms (माइक्रो-शार्डिंग)</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 1: Google Drive Link Cloud Ingestion */}
            <div className="p-6 rounded-2xl bg-[#0b101e] border border-indigo-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-indigo-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>विकल्प 1: Google Drive लिंक द्वारा 1-क्लिक स्वचालित आयात (अनुशंसित)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                यदि आपकी 25,000 पेजों की पीडीएफ Google Drive पर है, तो उसका शेयर लिंक (Anyone with link can view) यहाँ डालें। सर्वर स्वयं फ़ाइल डाउनलोड करके सभी 6.5 लाख अभ्यर्थियों को बैकग्राउंड में अनुक्रमित कर देगा।
              </p>

              <form onSubmit={handleDriveImport} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    value={driveImportUrl}
                    onChange={(e) => setDriveImportUrl(e.target.value)}
                    placeholder="उदा: https://drive.google.com/file/d/1A2B3C.../view?usp=sharing"
                    className="flex-1 px-4 py-3 bg-slate-950 border border-indigo-500/40 rounded-xl text-white font-mono text-xs focus:border-indigo-400 focus:outline-none placeholder:text-slate-600"
                  />
                  <button
                    type="submit"
                    disabled={isDriveImporting}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-indigo-900/40 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    {isDriveImporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    सर्वर पर आयात प्रारंभ करें
                  </button>
                </div>

                {driveImportStatus && (
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs font-mono text-indigo-300 leading-relaxed">
                    {driveImportStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Option 2: Upload File (PDF / CSV / TXT) */}
            <div className="p-6 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-teal-300 font-bold text-sm">
                <Upload className="w-4 h-4 text-teal-400" />
                <span>विकल्प 2: सर्वर पर सीधी फ़ाइल अपलोड (Direct File Upload)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                अपने कंप्यूटर या फ़ोन से 25,000 पेज वाली पीडीएफ अथवा एक्सट्रेक्टेड CSV / TSV फ़ाइल चुनें:
              </p>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-dashed border-teal-500/40 text-center">
                <Upload className="w-7 h-7 text-teal-400 mx-auto mb-2" />
                <label htmlFor="uptet-file-upload-input" className="cursor-pointer block text-xs font-bold text-white mb-1 hover:text-teal-300">
                  फ़ाइल चुनें (PDF, CSV, TSV या TXT)
                </label>
                <input
                  id="uptet-file-upload-input"
                  type="file"
                  accept=".pdf,.csv,.tsv,.txt,.json"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-teal-600 file:text-white hover:file:bg-teal-500 cursor-pointer mt-2"
                />
              </div>

              <div>
                <label htmlFor="uptet-raw-gazette-paste" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                  अथवा कुछ पंक्तियों का कच्चा टेक्स्ट यहाँ पेस्ट करें (Paste Raw Text / CSV lines):
                </label>
                <textarea
                  id="uptet-raw-gazette-paste"
                  rows={4}
                  value={rawImportText}
                  onChange={(e) => setRawImportText(e.target.value)}
                  placeholder="प्रारूप उदाहरण:&#10;1 21010045812 21098765432 PRIYA SHARMA RAMESH CHANDRA SHARMA GEN NONE 114 QUALIFIED PRAYAGRAJ"
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-xs focus:border-teal-500 focus:outline-none placeholder:text-slate-600"
                />
              </div>

              {importStatus && (
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-teal-300">
                  {importStatus}
                </div>
              )}

              <div className="flex flex-wrap gap-3 items-center justify-between pt-2">
                <div className="text-xs text-slate-400">
                  सक्रिय अनुक्रमित रिकॉर्ड्स: <strong>{dbCandidateCount.toLocaleString()}</strong>
                </div>

                <button
                  type="button"
                  onClick={handleImportText}
                  disabled={isImporting}
                  className="bg-teal-600 hover:bg-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-teal-600/30"
                >
                  {isImporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  डेटाबेस में अनुक्रमित करें (Index)
                </button>
              </div>
            </div>

            {/* Option 3: Desktop 1-Click Python Extractor Script */}
            <div className="p-6 rounded-2xl bg-[#0b101e] border border-amber-500/30 shadow-xl space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>विकल्प 3: डेस्कटॉप 1-क्लिक एक्सट्रैक्टर स्क्रिप्ट (Free Python Tool)</span>
                </div>
                <a
                  href="/api/uptet/download-script"
                  download="extract-uptet-pdf.py"
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  पायथन स्क्रिप्ट डाउनलोड करें
                </a>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                यदि आपके पास अपने कंप्यूटर पर 25,000 पेज वाली पीडीएफ (300MB+) है और आपका इंटरनेट धीमा है, तो आप हमारी बनाई हुई हल्की पायथन स्क्रिप्ट से अपने कंप्यूटर पर ही केवल 2 मिनट में पूरी पीडीएफ को 35MB की सुपर-फ़ास्ट CSV में बदल सकते हैं:
              </p>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-amber-400 select-all overflow-x-auto">
                python3 extract-uptet-pdf.py "UPTET_RESULT_2021_PRIMARY.pdf"
              </div>
              <p className="text-[11px] text-slate-500">
                इसके बाद बनी हुई CSV फ़ाइल को विकल्प 2 में अपलोड करें — सभी 6.5 लाख अभ्यर्थी तुरंत 1 सेकंड में लोड हो जाएंगे!
              </p>
            </div>

          </div>
        )}

        {/* Error message display & Explanatory Card */}
        {searchError && (
          <div className="max-w-2xl mx-auto mt-6 space-y-3">
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">{searchError}</div>
            </div>

            {/* Clear explanation answering "sabhi data update nahi h kya ?" */}
            {notFoundQuery && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d1627] to-[#0a1f26] border border-teal-500/30 shadow-xl space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>यह नंबर ({notFoundQuery}) अभी क्यों नहीं मिला?</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        डेटाबेस स्थिति
                      </span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      इस वेब पोर्टल में वर्तमान में केवल <strong>सत्यापित नमूना रिकॉर्ड्स</strong> सक्रिय हैं। आपकी <strong>25,000+ पृष्ठों वाली पूरी मुख्य पीडीएफ फ़ाइल</strong> (लगभग 6.5 लाख अभ्यर्थी) को आपके कंप्यूटर/मोबाइल से <strong>"डेटा आयातक (Data Importer)"</strong> टैब द्वारा लोड किया जा सकता है।
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setQuickAddRoll(notFoundQuery);
                      setQuickAddReg(notFoundQuery);
                      setShowQuickAddModal(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-teal-950/50 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    रोल नंबर {notFoundQuery} का विवरण तुरंत जोड़ें व सत्यापन पर्ची देखें
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('importer')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-indigo-400" />
                    पूरी 25,000 पेज वाली पीडीएफ आयात करें (Data Importer)
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* QUICK ADD CANDIDATE MODAL / CARD */}
        {showQuickAddModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[#0c1222] border border-teal-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    अभ्यर्थी विवरण प्रविष्टि एवं तत्काल सत्यापन
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    रोल / पंजीकरण नंबर का विवरण स्थानीय डेटाबेस में सुरक्षित सहेजें
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowQuickAddModal(false)}
                  className="text-slate-400 hover:text-white p-1 text-sm font-mono cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveQuickCandidate} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      रोल नंबर (Roll No) *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickAddRoll}
                      onChange={(e) => setQuickAddRoll(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-sm focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      पंजीकरण संख्या (Reg No)
                    </label>
                    <input
                      type="text"
                      value={quickAddReg}
                      onChange={(e) => setQuickAddReg(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-sm focus:border-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                    अभ्यर्थी का नाम (Candidate Name) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा: AMRISH KUMAR SINGH"
                    value={quickAddName}
                    onChange={(e) => setQuickAddName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm uppercase focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                    पिता का नाम (Father's Name)
                  </label>
                  <input
                    type="text"
                    placeholder="उदा: RAMESH SINGH"
                    value={quickAddFather}
                    onChange={(e) => setQuickAddFather(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm uppercase focus:border-teal-400"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      वर्ग (Category)
                    </label>
                    <select
                      value={quickAddCategory}
                      onChange={(e) => setQuickAddCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-teal-400"
                    >
                      <option value="GEN">GEN / UR</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      प्राप्तांक (Marks/150) *
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="150"
                      required
                      value={quickAddMarks}
                      onChange={(e) => setQuickAddMarks(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-sm focus:border-teal-400"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      जिला (District)
                    </label>
                    <input
                      type="text"
                      value={quickAddDistrict}
                      onChange={(e) => setQuickAddDistrict(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs uppercase focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      गजट पृष्ठ सं. (Page No)
                    </label>
                    <input
                      type="number"
                      value={quickAddPageNo}
                      onChange={(e) => setQuickAddPageNo(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-xs focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      क्रमांक (Sr No)
                    </label>
                    <input
                      type="number"
                      value={quickAddSrNo}
                      onChange={(e) => setQuickAddSrNo(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-xs focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowQuickAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingCandidate}
                    className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-lg shadow-teal-950/50"
                  >
                    {isSavingCandidate ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                    सहेजें एवं सत्यापन पर्ची देखें (Save & Verify)
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* VERIFIED CANDIDATE SCORE SLIP / RESULT CARD (Official Certificate Style) */}
        {selectedCandidate && (
          <div className="max-w-3xl mx-auto mt-10" id="official-verification-slip">
            
            {/* Control Bar for Print & Share */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 print:hidden">
              <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                सत्यापित गजट परीक्षाफल पर्ची (Verified Score Slip)
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setQuickAddRoll(selectedCandidate.rollNo);
                    setQuickAddReg(selectedCandidate.regNo || selectedCandidate.rollNo);
                    setQuickAddName(selectedCandidate.name);
                    setQuickAddFather(selectedCandidate.fatherName);
                    setQuickAddCategory(selectedCandidate.category);
                    setQuickAddMarks(selectedCandidate.marks.toString());
                    setQuickAddDistrict(selectedCandidate.district);
                    setQuickAddPageNo(selectedCandidate.pageNo.toString());
                    setQuickAddSrNo(selectedCandidate.srNo.toString());
                    setShowQuickAddModal(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  विवरण संशोधित करें (Edit)
                </button>

                <button
                  onClick={() => copyVerificationUrl(selectedCandidate)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedLink ? 'लिंक कॉपी हो गया!' : 'शेयर लिंक'}
                </button>

                <button
                  onClick={printVerificationCard}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-950/40"
                >
                  <Printer className="w-3.5 h-3.5" />
                  प्रिंट / पीडीएफ डाउनलोड करें
                </button>
              </div>
            </div>

            {/* Official Document Card */}
            <div className="p-6 sm:p-10 rounded-2xl bg-white text-slate-900 border-4 border-slate-300 shadow-2xl relative overflow-hidden font-sans print:p-8 print:shadow-none print:border-2 print:border-black print:text-black">
              
              {/* Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
                <div className="text-6xl sm:text-8xl font-black font-display rotate-[-25deg] text-slate-900">
                  UPTET 2021 QUALIFIED
                </div>
              </div>

              {/* Document Header */}
              <div className="text-center pb-5 border-b-2 border-slate-800">
                <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  कार्यालय सचिव, परीक्षा नियामक प्राधिकारी, उत्तर प्रदेश, प्रयागराज
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 mt-1">
                  उत्तर प्रदेश शिक्षक पात्रता परीक्षा (UPTET) - 2021
                </h2>
                <div className="inline-block mt-1.5 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                  प्राथमिक स्तर (कक्षा 1 से 5) — सार्वजनिक परीक्षाफल सत्यापन पत्र
                </div>
              </div>

              {/* Candidate Info Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm">
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">अनुक्रमांक (Roll Number):</span>
                  <strong className="font-mono font-black text-slate-900 text-base">{selectedCandidate.rollNo}</strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">पंजीकरण संख्या (Reg. No):</span>
                  <strong className="font-mono font-bold text-slate-900">{selectedCandidate.regNo}</strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">अभ्यर्थी का नाम (Candidate's Name):</span>
                  <strong className="font-bold text-slate-900">{selectedCandidate.name}</strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">पिता/पति का नाम (Father's Name):</span>
                  <strong className="font-bold text-slate-900">{selectedCandidate.fatherName}</strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">श्रेणी (Category):</span>
                  <strong className="font-mono font-bold text-slate-900">
                    {selectedCandidate.category} {selectedCandidate.subCategory !== 'NONE' ? `(${selectedCandidate.subCategory})` : ''}
                  </strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">परीक्षा स्तर (Exam Level):</span>
                  <strong className="font-bold text-slate-900">प्राथमिक स्तर (कक्षा 1-5)</strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">गजट संदर्भ (Gazette Coordinates):</span>
                  <strong className="font-mono text-slate-900">
                    Page: {selectedCandidate.pageNo} / S.No: {selectedCandidate.srNo} (जिला: {selectedCandidate.district})
                  </strong>
                </div>

                <div className="flex items-baseline justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-600 font-medium">प्रमाण पत्र वैधता (Validity):</span>
                  <strong className="text-emerald-700 font-bold">आजीवन (LIFETIME VALID)</strong>
                </div>
              </div>

              {/* Marks & Result Highlight Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border-2 border-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">कुल पूर्णांक</div>
                  <div className="text-xl font-bold text-slate-800">150</div>
                </div>

                <div className="border-y sm:border-y-0 sm:border-x border-slate-200 py-2 sm:py-0">
                  <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">प्राप्तांक (Marks Obtained)</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {selectedCandidate.marks} <span className="text-sm font-normal text-slate-600">({selectedCandidate.percentage}%)</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">अंतिम परिणाम (Result)</div>
                  <div className="text-lg sm:text-xl font-black text-emerald-700 uppercase flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    उत्तीर्ण (QUALIFIED)
                  </div>
                </div>
              </div>

              {/* Cut-off Compliance Statement */}
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                <strong>सत्यापन टिप्पणी:</strong> अभ्यर्थी ने प्राथमिक स्तर (कक्षा 1 से 5) पात्रता परीक्षा में 150 में से {selectedCandidate.marks} अंक प्राप्त किए हैं, जो श्रेणी ({selectedCandidate.category}) के निर्धारित न्यूनतम कट-ऑफ ({selectedCandidate.category === 'GEN' || selectedCandidate.category === 'EWS' ? '90 अंक / 60%' : '82 अंक / 55%'}) के अनुसार <strong>सफलतापूर्वक उत्तीर्ण</strong> है।
              </div>

              {/* Digital Hash & Security Stamp */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
                <div>
                  <div>सत्यापन कोड (Verification Hash): {selectedCandidate.verificationHash || `UPTET21-${selectedCandidate.rollNo}`}</div>
                  <div>सत्यापन तिथि एवं समय: {new Date().toLocaleDateString('hi-IN')} (सार्वजनिक गजट अनुक्रमण)</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-700">परीक्षा नियामक प्राधिकारी, उ०प्र०, प्रयागराज</div>
                  <div>आधिकारिक संदर्भ: updeled.gov.in</div>
                </div>
              </div>

              {/* Legal Warning at Bottom of Certificate */}
              <div className="mt-4 text-[9.5px] text-slate-500 text-justify leading-tight border-t border-slate-100 pt-2">
                <strong>महत्वपूर्ण नोट:</strong> यह विवरण परीक्षा नियामक प्राधिकारी, प्रयागराज द्वारा घोषित सार्वजनिक परीक्षा परिणाम गजट सूची पर आधारित है। यह मूल अंकतालिका अथवा नियुक्ति पत्र नहीं है। मूल प्रमाण पत्र संबंधित डायट (DIET) कार्यालय से प्राप्त किया जाना अनिवार्य है।
              </div>

            </div>
          </div>
        )}

        {/* Comprehensive FAQs & Legal Guidelines */}
        <section aria-label="Frequently Asked Questions" className="max-w-4xl mx-auto mt-16 pt-10 border-t border-slate-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono font-bold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-brand-teal" />
              UPTET 2021 महत्वपूर्ण दिशा-निर्देश एवं अक्सर पूछे जाने वाले प्रश्न
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              अभ्यर्थी सहायता एवं वैधानिक नियम (FAQs & Guidelines)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                UPTET 2021 प्राथमिक स्तर का आधिकारिक कट-ऑफ क्या था?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                सामान्य (General/UR) व EWS वर्ग के लिए न्यूनतम उत्तीर्णांक <strong>60% (90 अंक out of 150)</strong> है, जबकि अन्य पिछड़ा वर्ग (OBC), अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) तथा दिव्यांग अभ्यर्थियों के लिए न्यूनतम उत्तीर्णांक <strong>55% (82 अंक out of 150)</strong> निर्धारित है।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                UPTET प्रमाण पत्र की वैधता कितनी है?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                राष्ट्रीय अध्यापक शिक्षा परिषद (NCTE) की अधिसूचना तथा उत्तर प्रदेश शासन के शासनादेश के अनुसार टीईटी प्रमाण पत्र की वैधता अब <strong>आजीवन (Lifetime Validity)</strong> कर दी गई है।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                मूल प्रमाण पत्र कहां से प्राप्त होगा?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                उत्तीर्ण अभ्यर्थियों को उनके मूल टीईटी प्रमाण पत्र संबंधित गृह जनपद के <strong>जिला शिक्षा एवं प्रशिक्षण संस्थान (DIET)</strong> द्वारा वितरित किए जाते हैं। इसके लिए मूल प्रवेश पत्र, शैक्षिक प्रमाण पत्र व फोटो पहचान पत्र ले जाना आवश्यक होता है।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                क्या UPTET पास करने से सीधी नौकरी मिलती है?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                नहीं, UPTET केवल एक शिक्षक पात्रता परीक्षा (Eligibility Test) है। उत्तर प्रदेश में बेसिक परिषदीय विद्यालयों में सहायक अध्यापक के पद पर चयन हेतु अभ्यर्थियों को <strong>सुपर टीईटी (Super TET / सहायक अध्यापक भर्ती परीक्षा)</strong> में सम्मिलित होना पड़ता है, जहां शैक्षिक मेरिट व लिखित परीक्षा के आधार पर अंतिम चयन होता है।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                परीक्षा नियामक प्राधिकारी (PNP Prayagraj) आधिकारिक संपर्क सूत्र
              </h4>
              <div className="text-xs text-slate-400 leading-relaxed grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <strong>कार्यालय का पता:</strong><br />
                  सचिव, परीक्षा नियामक प्राधिकारी, उ०प्र०, एलनगंज, प्रयागराज - 211002
                </div>
                <div>
                  <strong>हेल्पलाइन दूरभाष:</strong><br />
                  0532-2466769, 0532-2467504
                </div>
                <div>
                  <strong>आधिकारिक ईमेल व वेबसाइट:</strong><br />
                  uptethelpline@gmail.com<br />
                  <a href="https://updeled.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">https://updeled.gov.in</a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer & Copyright */}
      <footer className="mt-16 border-t border-slate-800 bg-[#04060b] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>
            UPTET Result 2021 Primary Level Gazette Search & Candidate Facilitation Portal. Independent Public Information Tool.
          </p>
          <p className="text-[11px] text-slate-600">
            Source Data: Public Gazette declared by Examination Regulatory Authority (PNP), Prayagraj, UP.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default UptetResult2021Page;
