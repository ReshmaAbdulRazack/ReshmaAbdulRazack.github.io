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
  {% assign sorted_projects = site.projects | sort: 'date' | reverse %}
  {% for project in sorted_projects %}
  <!-- Project: {{ project.title }} -->
  <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
    <div class="h-48 overflow-hidden relative bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      {% else %}
        <i data-lucide="layout" class="w-12 h-12 text-slate-400 dark:text-slate-600"></i>
      {% endif %}
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
    </div>
    <div class="p-6 space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">{{ project.category }}</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">{{ project.date | date: "%b %Y" }}</span>
      </div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">{{ project.title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ project.subtitle }}</p>
      <div class="pt-4 flex items-center justify-between">
        <a href="{{ project.url | relative_url }}" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
          Detailed View 
          <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>
  {% endfor %}
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
