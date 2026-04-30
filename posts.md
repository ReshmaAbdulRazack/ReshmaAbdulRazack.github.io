---
layout: page
title: Blog // Posts
permalink: /posts/
subtitle: Thoughts, tutorials, and development logs.
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
  {% for post in site.posts %}
    <div class="premium-card group bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:bg-white dark:hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-2">
      <!-- Image Container with Reliable Gradient Fallback -->
      <div class="h-48 overflow-hidden relative bg-gradient-to-br from-forest-900 to-accent/40">
        {% if post.feature_image %}
          {% assign final_img_url = post.feature_image %}
        {% else %}
          {% assign img_num = forloop.index | plus: 2 %}
          {% capture final_img_url %}/assets/img/projects/img_{{ img_num }}.jpg{% endcapture %}
        {% endif %}
        
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
             style="background-image: url('{{ final_img_url | relative_url }}');">
        </div>
        
        <!-- Glass Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-forest-950 via-transparent to-transparent"></div>
        
        <!-- Label for fallbacks -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <i data-lucide="cpu" class="w-12 h-12 text-white"></i>
        </div>
      </div>

      <div class="p-6 space-y-3">
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">Archive</span>
          <span class="text-xs text-slate-400 dark:text-slate-500 font-mono">{{ post.date | date: "%B %Y" }}</span>
        </div>
        <h3 class="text-xl font-bold text-forest-950 dark:text-white tracking-tight">{{ post.title }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        <div class="pt-4 flex items-center justify-between">
          <a href="{{ post.url | relative_url }}" class="inline-flex items-center gap-2 text-sm font-bold text-forest-950 dark:text-white group/link">
            Detailed Log 
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  {% else %}
    <div class="col-span-full py-20 text-center">
      <div class="inline-flex p-4 rounded-full bg-black/5 dark:bg-white/5 mb-6 text-slate-400"><i data-lucide="database-zap" class="w-8 h-8"></i></div>
      <h3 class="text-xl font-bold text-forest-950 dark:text-white mb-2 tracking-tight">No transmissions found</h3>
      <p class="text-slate-600 dark:text-slate-400">Archives are currently empty. Check back for future data logs.</p>
    </div>
  {% endfor %}
</div>

<!-- Compact Visual Logs -->
<div class="mt-16 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Visual_Logs</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/gallery_1.jpg' | relative_url }}');"></div>
    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/project_1.jpg' | relative_url }}');"></div>
    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/gallery_2.jpg' | relative_url }}');"></div>
    
    <div class="md:col-span-6 h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-slate-100 dark:bg-forest-900/50 relative group">
      <video autoplay muted loop playsinline class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
        <source src="{{ '/assets/img/projects/vid_1.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    
    <div class="md:col-span-6 h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-slate-100 dark:bg-forest-900/50 relative group">
      <video autoplay muted loop playsinline class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
        <source src="{{ '/assets/img/projects/vid_2.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>

    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/gallery_3.jpg' | relative_url }}');"></div>
    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/project_3.jpg' | relative_url }}');"></div>
    <div class="md:col-span-4 h-48 rounded-2xl bg-cover bg-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-forest-800 to-forest-950" style="background-image: url('{{ '/assets/img/gallery/project_4.jpg' | relative_url }}');"></div>
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

    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('bg-accent/20', 'text-forest-950', 'dark:text-white', 'active'));
    event.currentTarget.classList.add('bg-accent/20', 'text-forest-950', 'dark:text-white', 'active');
  }
</script>
