import React, { useState, useEffect } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';
const Helmet: any = (ReactHelmetAsync as any).Helmet || (ReactHelmetAsync as any).default?.Helmet || ReactHelmetAsync;
import { 
  Search, FileText, CheckCircle2, AlertTriangle, Download, 
  Printer, ArrowLeft, ExternalLink, ShieldCheck, HelpCircle, 
  Calculator, RefreshCw, Upload, Database, Copy, Check, 
  MapPin, Award, BookOpen, Phone, Info, Share2, Filter,
  ChevronRight, Sparkles, Hash, Layers
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
  parseGazetteText 
} from '../utils/uptetDatabase';

interface UptetResult2021PageProps {
  onBackToHome?: () => void;
}

export const UptetResult2021Page: React.FC<UptetResult2021PageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'roll' | 'name' | 'page' | 'calculator' | 'importer'>('roll');
  
  // Search state - Mode 1: Roll / Reg
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'roll' | 'reg'>('roll');
  
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
    setHasSearched(true);

    try {
      let result: UptetCandidate | null = null;
      if (type === 'roll') {
        result = await searchByRollNumber(q);
      } else {
        result = await searchByRegNumber(q);
      }

      if (result) {
        setSelectedCandidate(result);
        setSearchError(null);
      } else {
        setSelectedCandidate(null);
        setSearchError(`प्रविष्ट विवरण (${q}) से संबंधित कोई उत्तीर्ण अभ्यर्थी रिकॉर्ड नहीं मिला। कृपया अपने 10 या 12 अंकों के रोल नंबर की जांच करें।`);
      }
    } catch {
      setSearchError('खोज के दौरान त्रुटि हुई। कृपया पुनः प्रयास करें।');
    } finally {
      setIsSearching(false);
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
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5 text-indigo-400" />
                  UPTET 2021 गजट डेटा एवं पीडीएफ टेक्स्ट आयातक (Data Importer)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  25,000+ पृष्ठों के पीडीएफ से कॉपी की गई प्रविष्टियों अथवा सीएसवी प्रारूप को स्थानीय डेटाबेस में अनुक्रमित करें
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="uptet-raw-gazette-paste" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    गजट प्रविष्टियां या सीएसवी टेक्स्ट पेस्ट करें (Paste Raw Text / CSV lines):
                  </label>
                  <textarea
                    id="uptet-raw-gazette-paste"
                    rows={6}
                    value={rawImportText}
                    onChange={(e) => setRawImportText(e.target.value)}
                    placeholder="प्रारूप उदाहरण:&#10;1, 21010045812, 21098765432, PRIYA SHARMA, RAMESH CHANDRA SHARMA, GEN, NONE, 114, PRAYAGRAJ, 14820&#10;2, 21010045813, 21098765433, ANIL VERMA, RAM PRASAD VERMA, OBC, NONE, 102, PRAYAGRAJ, 14820"
                    className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-xs focus:border-indigo-500 focus:outline-none placeholder:text-slate-600"
                  />
                </div>

                {importStatus && (
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-teal-300">
                    {importStatus}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="text-xs text-slate-400">
                    वर्तमान स्थानीय अनुक्रमित रिकॉर्ड: <strong>{dbCandidateCount.toLocaleString()}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={handleImportText}
                    disabled={isImporting}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30"
                  >
                    {isImporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    डेटाबेस में अनुक्रमित करें (Index to DB)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error message display */}
        {searchError && (
          <div className="max-w-2xl mx-auto mt-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1 leading-relaxed">{searchError}</div>
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
