---
layout: page
title: Project archives
permalink: /projects/
subtitle: A comprehensive database of researched systems and applications
---

<!-- View Controls -->
<div class="flex items-center justify-end gap-2 mb-8">
  <button class="view-btn p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-forest-950 dark:hover:text-white transition-all active:bg-accent/20 active" onclick="setGridView(3)">
    <i data-lucide="layout-grid" class="w-4 h-4"></i>
  </button>
  <button class="view-btn p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-forest-950 dark:hover:text-white transition-all active:bg-accent/20" onclick="setGridView(4)">
    <i data-lucide="grid" class="w-4 h-4"></i>
  </button>
  <button class="view-btn p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-forest-950 dark:hover:text-white transition-all active:bg-accent/20" onclick="setGridView('list')">
    <i data-lucide="list" class="w-4 h-4"></i>
  </button>
</div>

<!-- Dynamic Grid -->
<div id="dynamic-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
  
  <!-- Project: Arabic Sentence Aligner -->
  <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
    <div class="h-48 overflow-hidden relative">
      <img src="{{ '/assets/img/projects/unnamed_002.png' | relative_url }}" alt="Arabic Sentence Aligner" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
    </div>
    <div class="p-6 space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">NLP & Web</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">Mar 2024</span>
      </div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">Arabic Sentence Aligner</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">A comprehensive NLP-powered web tool for high-precision linguistic alignment of Arabic and English corpora.</p>
      <div class="pt-4 flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
          Detailed View 
          <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Project: Iris Gender Recognition -->
  <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
    <div class="h-48 overflow-hidden relative">
      <img src="{{ '/assets/img/projects/unnamed_001.jpg' | relative_url }}" alt="Iris Gender Recognition" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
    </div>
    <div class="p-6 space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">Deep Learning</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">Jan 2024</span>
      </div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">Iris Gender Recognition</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Advanced biometric classification using CNN architectures to identify gender from iris patterns.</p>
      <div class="pt-4 flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
          Detailed View 
          <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Project: Al Murshid Dictionary -->
  <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
    <div class="h-48 overflow-hidden relative">
      <img src="{{ '/assets/img/projects/img_6.jpg' | relative_url }}" alt="Al Murshid Dictionary" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
    </div>
    <div class="p-6 space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">Linguistics</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">Dec 2023</span>
      </div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">Al Murshid Dictionary</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">A digital lexicon with advanced search and visual mapping for bilingual research and development.</p>
      <div class="pt-4 flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
          Detailed View 
          <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Project: ISL Recognition -->
  <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
    <div class="h-48 overflow-hidden relative">
      <img src="{{ '/assets/img/projects/img_5.jpg' | relative_url }}" alt="ISL Recognition" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
    </div>
    <div class="p-6 space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">CV // Robotics</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">Oct 2023</span>
      </div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">ISL Recognition</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Real-time Indian Sign Language recognition using ROI-CNN for accessible communication.</p>
      <div class="pt-4 flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
          Detailed View 
          <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>

</div>

<script>
  function setGridView(cols) {
    const grid = document.getElementById('dynamic-grid');
    if (!grid) return;

    grid.classList.remove('md:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-6', 'flex', 'flex-col');
    const cards = grid.querySelectorAll('.premium-card');
    cards.forEach(card => {
      card.classList.remove('flex-row', 'items-center', 'gap-8');
      if (card.querySelector('div:first-child')) {
        card.querySelector('div:first-child').classList.remove('w-80', 'h-full');
        card.querySelector('div:first-child').classList.add('h-48');
      }
    });

    if (cols === 'list') {
      grid.classList.add('flex', 'flex-col');
      cards.forEach(card => {
        card.classList.add('flex-row', 'items-center', 'gap-8');
        if (card.querySelector('div:first-child')) {
          card.querySelector('div:first-child').classList.remove('h-48');
          card.querySelector('div:first-child').classList.add('w-80', 'h-64');
        }
      });
    } else {
      grid.classList.add('md:grid-cols-2', `lg:grid-cols-${cols}`);
    }

    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('bg-accent/20', 'text-white', 'active'));
    event.currentTarget.classList.add('bg-accent/20', 'text-white', 'active');
  }
</script>
