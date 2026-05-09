/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, ScanText, Languages, FileSpreadsheet, 
  ArrowRight, CheckCircle2, AlertCircle, FileUp, 
  Search, Play, RefreshCw, BarChart3, Database, 
  ChevronRight, BrainCircuit, ExternalLink, Cpu
} from 'lucide-react';

// --- Types ---

interface Scene {
  id: number;
  title: string;
  onScreenText: string;
  voiceover: string;
  visual: 'problem' | 'manual' | 'intro' | 'workflow' | 'cleaning' | 'demo' | 'output' | 'comparison' | 'usecases' | 'closing';
  duration: number; // in milliseconds
}

// --- Components ---

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
    <motion.div 
      className="h-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-purple"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  </div>
);

const Caption = ({ text, voiceover }: { text: string; voiceover: string }) => (
  <>
    {/* On-Screen Text (Fixed Top) */}
    <div className="absolute top-12 left-0 w-full px-8 z-40 text-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white drop-shadow-2xl leading-tight tracking-tight">
          {text}
        </h2>
      </motion.div>
    </div>

    {/* Voiceover Text (Fixed Bottom) */}
    <div className="absolute bottom-12 left-0 w-full px-8 z-40 text-center pointer-events-none mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-lg md:text-xl text-slate-300 font-medium italic bg-slate-950/80 backdrop-blur-xl px-10 py-4 rounded-full inline-block border border-white/10 shadow-2xl leading-relaxed">
          "{voiceover}"
        </p>
      </motion.div>
    </div>
  </>
);

// --- Visual Mockups ---

const MessyPDF = () => (
  <div className="w-full h-full glass-panel p-8 relative overflow-hidden font-mono text-[10px] text-slate-500 opacity-60 flex flex-col gap-2 bg-white/5">
    <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/30" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
        <div className="w-3 h-3 rounded-full bg-green-500/30" />
      </div>
      <span className="text-[8px] uppercase tracking-widest text-slate-600">Research_Doc_Draft_02.pdf</span>
    </div>
    <div className="flex gap-8">
      <div className="flex-1 space-y-4">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className={`h-2 bg-slate-800 rounded w-[${Math.floor(Math.random() * 60 + 40)}%]`} />
            {i % 3 === 0 && <div className="h-2 bg-brand-indigo/20 rounded w-[80%] ml-4" />}
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-4 rtl">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1 items-end">
            <div className={`h-2 bg-slate-800 rounded w-[${Math.floor(Math.random() * 60 + 40)}%]`} />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">
      <AlertCircle className="w-32 h-32 text-red-500/20" />
    </div>
  </div>
);

const PipelineVisual = () => {
  const steps = [
    { icon: FileUp, text: 'Upload' },
    { icon: ScanText, text: 'Extract' },
    { icon: RefreshCw, text: 'Clean' },
    { icon: BrainCircuit, text: 'Segment' },
    { icon: Languages, text: 'Align' },
    { icon: FileSpreadsheet, text: 'Export' }
  ];

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:border-brand-teal transition-colors">
              <step.icon className="w-8 h-8 text-brand-teal" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">{step.text}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="h-[1px] bg-white/20" 
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const AlignmentDemo = () => (
  <div className="grid grid-cols-2 gap-8 w-full h-full max-h-[400px]">
    <div className="glass-panel p-8 flex flex-col gap-4 overflow-hidden bg-brand-indigo/5 border-white/10 relative">
      <div className="flex justify-between items-center mb-2">
        <span className="px-3 py-1 bg-brand-indigo/20 text-brand-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-brand-indigo/30">Source: Arabic</span>
      </div>
      <div className="rtl space-y-4">
        <div className="p-4 bg-brand-indigo/10 border-r-4 border-brand-indigo rounded-l-xl">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif leading-relaxed text-slate-100"
          >
            بدأ الباحث بتحليل النصوص المترجمة.
          </motion.p>
        </div>
        <div className="space-y-3 opacity-30 p-4">
          <div className="h-3 w-3/4 bg-slate-700 rounded-full" />
          <div className="h-3 w-1/2 bg-slate-700 rounded-full" />
        </div>
      </div>
      <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-indigo rounded-full border-4 border-[#0c0e1a] z-20" />
    </div>

    <div className="glass-panel p-8 flex flex-col gap-4 overflow-hidden bg-brand-teal/5 border-white/10 relative">
      <div className="flex justify-between items-center mb-2">
        <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-brand-teal/30">Target: English</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span className="text-[10px] font-mono text-slate-400">Confidence: 96%</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-brand-teal/10 border-l-4 border-brand-teal rounded-r-xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl leading-relaxed text-slate-100"
          >
            The researcher began analyzing the translated texts.
          </motion.p>
        </div>
        <div className="space-y-3 opacity-30 p-4">
          <div className="h-3 w-3/4 bg-slate-700 rounded-full" />
          <div className="h-3 w-1/2 bg-slate-700 rounded-full" />
        </div>
      </div>
      <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full border-4 border-[#0c0e1a] z-20" />
    </div>
  </div>
);

const ComparisonVisual = () => (
  <div className="grid grid-cols-2 gap-8 w-full">
    <div className="glass-panel p-8 opacity-50 bg-white/2 border-white/5">
      <h3 className="text-xl font-bold mb-6 text-slate-400">General PDF AI</h3>
      <ul className="space-y-4">
        {['Summarize PDFs', 'Answer questions', 'Extract raw text'].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
            <div className="w-5 h-5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="glass-panel p-8 border-brand-indigo/30 bg-brand-indigo/5 relative">
      <div className="absolute -top-3 right-8 bg-brand-indigo text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-brand-indigo/20">Advanced NLP Pipeline</div>
      <h3 className="text-xl font-bold mb-6 text-brand-indigo-300">AEAligner System</h3>
      <ul className="space-y-4">
        {[
          'Clean bilingual content',
          'Arabic–English sentence alignment',
          'Research-ready Excel/CSV export'
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-100 font-medium">
            <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Main App ---

const SCENES: Scene[] = [
  {
    id: 1,
    title: "Opening Problem",
    onScreenText: "Most bilingual translation data is locked inside PDF documents.",
    voiceover: "Many Arabic–English translation resources are available only as PDF documents, making them difficult to use directly for NLP research.",
    visual: 'problem',
    duration: 5000
  },
  {
    id: 2,
    title: "Manual Work Challenge",
    onScreenText: "Manual alignment is slow, repetitive, and error-prone.",
    voiceover: "Researchers often spend hours extracting text, cleaning formatting issues, splitting sentences, and manually matching translations.",
    visual: 'manual',
    duration: 5000
  },
  {
    id: 3,
    title: "Tool Introduction",
    onScreenText: "From PDF to aligned bilingual dataset",
    voiceover: "This tool provides a complete AI-assisted workflow to convert bilingual PDFs into structured Arabic–English sentence alignments.",
    visual: 'intro',
    duration: 5000
  },
  {
    id: 4,
    title: "Workflow Animation",
    onScreenText: "Extract. Clean. Segment. Align. Export.",
    voiceover: "The system extracts text, removes document noise, segments sentences, separates Arabic and English content, and aligns translation pairs.",
    visual: 'workflow',
    duration: 6000
  },
  {
    id: 5,
    title: "Extraction and Cleaning",
    onScreenText: "Clean text from noisy PDF layouts",
    voiceover: "The PDF extraction module prepares raw document content for sentence-level processing by cleaning common formatting issues.",
    visual: 'cleaning',
    duration: 5000
  },
  {
    id: 6,
    title: "Sentence Alignment Demo",
    onScreenText: "AI-Powered Sentence Alignment",
    voiceover: "The alignment engine matches Arabic sentences with their corresponding English translations, including one-to-one, one-to-many, and many-to-one cases.",
    visual: 'demo',
    duration: 6000
  },
  {
    id: 7,
    title: "Research Output",
    onScreenText: "Research-ready Excel/CSV output",
    voiceover: "The final output is a clean, structured dataset that can be used for NLP experiments, corpus creation, and translation analysis.",
    visual: 'output',
    duration: 5000
  },
  {
    id: 8,
    title: "The Difference",
    onScreenText: "More than PDF extraction — a complete NLP pipeline",
    voiceover: "Unlike general PDF AI tools, this system is designed specifically for Arabic–English sentence alignment and bilingual dataset preparation.",
    visual: 'comparison',
    duration: 6000
  },
  {
    id: 9,
    title: "Use Cases",
    onScreenText: "Empowering NLP Research",
    voiceover: "This prototype supports researchers, translators, and NLP developers working with bilingual Arabic–English documents.",
    visual: 'usecases',
    duration: 5000
  },
  {
    id: 10,
    title: "Closing",
    onScreenText: "Arabic–English PDF-Based Sentence Aligner Tool",
    voiceover: "From PDF documents to structured bilingual datasets — faster, cleaner, and research-ready.",
    visual: 'closing',
    duration: 6000
  }
];

export default function App() {
  const [currentSceneIdx, setCurrentSceneIdx] = useState<number>(-1); // -1 is start screen
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const startPresentation = () => {
    setIsPlaying(true);
    setCurrentSceneIdx(0);
  };

  const nextScene = useCallback(() => {
    if (currentSceneIdx < SCENES.length - 1) {
      setCurrentSceneIdx(prev => prev + 1);
      setProgress(0);
    } else {
      setIsPlaying(false);
      setCurrentSceneIdx(-1);
      setProgress(0);
    }
  }, [currentSceneIdx]);

  useEffect(() => {
    if (!isPlaying) return;

    const currentScene = SCENES[currentSceneIdx];
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / currentScene.duration) * 100;
      
      if (newProgress >= 100) {
        clearInterval(interval);
        nextScene();
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, currentSceneIdx, nextScene]);

  const renderVisual = (type: string) => {
    switch (type) {
      case 'problem':
        return (
          <div className="flex flex-col items-center gap-12 max-w-5xl w-full">
            <div className="relative w-full h-[300px]">
              <MessyPDF />
            </div>
          </div>
        );
      case 'manual':
        return (
          <div className="flex items-center justify-center gap-16 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-4 text-brand-purple">
              <FileSpreadsheet className="w-24 h-24" />
              <span className="font-mono text-sm opacity-50">MANUAL_ALIGN.xlsx</span>
            </div>
            <ArrowRight className="w-12 h-12 text-zinc-700 animate-pulse" />
            <div className="flex flex-col gap-2 w-64 opacity-50">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-red-500/20 rounded-full w-full" />
               ))}
               <p className="text-red-400 text-[10px] font-bold text-center mt-2">MISSING PAIR detected</p>
            </div>
          </div>
        );
      case 'intro':
      case 'closing':
        return (
          <div className="flex flex-col items-center gap-10">
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-indigo/30 blur-[60px] opacity-40 rounded-full animate-pulse" />
              <div className="w-28 h-28 glass-panel flex items-center justify-center p-6 bg-white/5 border-white/20 shadow-brand-indigo/10">
                <div className="w-full h-full bg-gradient-to-tr from-brand-indigo to-brand-teal rounded-2xl flex items-center justify-center shadow-lg shadow-brand-indigo/30">
                  <Languages className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight text-white mb-4">
                AE<span className="text-brand-teal">Aligner</span>
              </h1>
              <p className="text-xs text-slate-400 uppercase tracking-[0.4em] font-bold">Research Workflow System</p>
            </div>
          </div>
        );
      case 'workflow':
        return <PipelineVisual />;
      case 'cleaning':
        return (
          <div className="flex flex-col gap-8 items-center w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                { icon: ScanText, title: 'Extraction', text: 'Structure Recovery' },
                { icon: RefreshCw, title: 'Cleaning', text: 'Noise Removal' },
                { icon: BrainCircuit, title: 'Segmentation', text: 'Boundary Detection' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 flex flex-col items-center gap-4 text-center">
                  <item.icon className="w-8 h-8 text-brand-blue" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'demo':
        return <AlignmentDemo />;
      case 'output':
        return (
          <div className="glass-panel w-full max-w-4xl overflow-hidden border-white/10 bg-white/5">
            <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4 text-brand-teal" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-100 block">Aligned_Output.xlsx</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Excel Dataset Preview</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">642 Aligned Pairs</div>
                <div className="px-5 py-1 rounded-full bg-brand-teal text-[10px] font-black text-white uppercase shadow-lg shadow-brand-teal/20">Download</div>
              </div>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-[11px] text-slate-300">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5 uppercase tracking-widest text-slate-500 font-bold">
                    <td className="px-6 py-3 border-r border-white/5">ID</td>
                    <td className="px-6 py-3 border-r border-white/5">Arabic Segment</td>
                    <td className="px-6 py-3 border-r border-white/5">English Segment</td>
                    <td className="px-6 py-3 border-r border-white/5">Match</td>
                    <td className="px-6 py-3 text-right">Confidence</td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 border-r border-white/5 font-mono text-slate-500">#{(1142 + i)}</td>
                      <td className="px-6 py-4 border-r border-white/5 rtl font-serif text-sm">بدأ الباحث بتحليل النصوص المترجمة بدقة...</td>
                      <td className="px-6 py-4 border-r border-white/5 text-sm">The researcher began analyzing...</td>
                      <td className="px-6 py-4 border-r border-white/5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${i % 2 === 0 ? 'bg-brand-teal/20 text-brand-teal' : 'bg-brand-indigo/20 text-brand-indigo-300'}`}>1:1 Match</span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-100 font-bold">{(0.96 - i * 0.01).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'comparison':
        return <ComparisonVisual />;
      case 'usecases':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              { icon: Search, text: 'Translation Studies' },
              { icon: Database, text: 'Corpus Creation' },
              { icon: Cpu, text: 'MT Evaluation' },
              { icon: BrainCircuit, text: 'LLM Workflows' },
              { icon: BarChart3, text: 'Stylometric Analysis' },
              { icon: Languages, text: 'NLP Research' },
            ].map((usecase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 flex items-center gap-4 hover:border-brand-blue transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <usecase.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-tight">{usecase.text}</span>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center group bg-[#0c0e1a]">
      {/* Background Mesh Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-indigo/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-brand-purple/10 blur-[110px] rounded-full animate-spin-slow" />
      </div>

      <AnimatePresence mode="wait">
        {currentSceneIdx === -1 ? (
          <motion.div 
            key="start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center gap-12 z-20"
          >
            <div className="text-center space-y-8">
              <div className="relative w-fit mx-auto">
                <div className="absolute -inset-4 bg-brand-indigo/20 blur-2xl rounded-full" />
                <div className="w-16 h-16 bg-gradient-to-tr from-brand-indigo to-brand-teal rounded-2xl flex items-center justify-center shadow-xl shadow-brand-indigo/30 relative">
                  <Languages className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-7xl md:text-9xl font-display font-medium tracking-tighter text-white">
                  AE<span className="text-brand-teal">Aligner</span>
                </h1>
                <p className="text-slate-400 font-bold tracking-[0.6em] uppercase text-[10px] mt-4 opacity-60">
                  AI-Assisted Research Workflow
                </p>
              </div>
            </div>
            
            <button 
              id="start-video"
              onClick={startPresentation}
              className="group relative flex items-center gap-4 bg-white text-slate-950 px-12 py-5 rounded-full font-black text-lg tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/20 to-brand-teal/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Play className="w-6 h-6 fill-slate-950 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="relative z-10">PLAY EXPLAINER</span>
            </button>

            <div className="flex gap-16 pt-12 border-t border-white/5">
              <div className="flex flex-col gap-1 items-center">
                <span className="text-3xl font-bold text-white tracking-tighter">45s</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Video</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-3xl font-bold text-white tracking-tighter">96%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Accuracy</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-3xl font-bold text-white tracking-tighter">NLP</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Core</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key={currentSceneIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex items-center justify-center p-8 z-20"
          >
            <ProgressBar progress={progress} />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex flex-col items-center justify-center gap-12 py-32"
              >
                {renderVisual(SCENES[currentSceneIdx].visual)}
              </motion.div>
              
              <Caption 
                text={SCENES[currentSceneIdx].onScreenText} 
                voiceover={SCENES[currentSceneIdx].voiceover} 
              />
            </div>

            {/* Navigation Overlay - Frosted Styling */}
            <div className="fixed bottom-10 right-10 flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-3 rounded-full border border-white/10 shadow-2xl scale-110">
              <div className="flex gap-3 px-4">
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Scene</span>
                  <span className="text-lg font-display font-medium text-slate-100 italic">
                    {SCENES[currentSceneIdx].id.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex gap-2 pr-1">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                  id="toggle-playback"
                >
                  {isPlaying ? <RefreshCw className="w-4 h-4 text-white animate-spin-slow" /> : <Play className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />}
                </button>
                <button 
                  onClick={nextScene}
                  className="w-10 h-10 rounded-full bg-white/10 border border-brand-teal/30 flex items-center justify-center hover:bg-brand-teal transition-all group"
                  id="skip-scene"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
