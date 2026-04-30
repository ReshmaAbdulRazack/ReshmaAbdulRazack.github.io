---
layout: page
title: About me
permalink: /about/
subtitle: Discover my technical stack, competencies, and professional journey.
---

<!-- Tech Stack -->
<section class="space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Tech_Stack</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <div class="flex flex-wrap gap-2">
    {% assign skills = "AI & Machine Learning, Robotics, UI/UX Design, Web Development, Python, Django, TensorFlow, Computer Vision" | split: ", " %}
    {% for skill in skills %}
    <span class="px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-accent hover:text-accent transition-all cursor-default hover:bg-white dark:hover:bg-white/10">
      {{ skill }}
    </span>
    {% endfor %}
  </div>
</section>

<!-- Leadership & Recognition -->
<section class="mt-16 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Leadership_Recognition</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div class="md:col-span-6 p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Google for Education // 2025</div>
      <h3 class="text-lg font-bold text-forest-950 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors">Certified Google Innovator</h3>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">Recognised for transformative use of technology in education and leading future-ready learning communities.</p>
    </div>

    <div class="md:col-span-6 p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Standards Council // UAE</div>
      <h3 class="text-lg font-bold text-forest-950 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors">GULF HE Standards Member</h3>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">Contributing to higher education quality standards across the Gulf region as a council member.</p>
    </div>

    <div class="md:col-span-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Certified // 2025</div>
      <h3 class="text-base font-bold text-forest-950 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors">Gemini Certified Educator</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Expertise in generative AI for personalized learning and creative pedagogy.</p>
    </div>

    <div class="md:col-span-8 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group text-right shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Speaker // GESS Dubai 2025</div>
      <h3 class="text-lg font-bold text-forest-950 dark:text-white mb-2 tracking-tight group-hover:text-accent transition-colors">AI BITES Speaker</h3>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs max-w-sm ml-auto">Presented at GESS Dubai on the impact of AI in P-12 education.</p>
    </div>
  </div>
</section>

<!-- Experience & Education (Merged) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pb-8">
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Experience</h2>
      <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
    </div>
    
    <div class="space-y-6">
      <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
        <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
        <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Feb 2025 – May 2025</div>
        <h3 class="text-base font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">CS Teacher</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">American School of Creative Science. Project-based coding and design.</p>
      </div>
      
      <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
        <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent/50"></div>
        <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Nov 2019 – Present</div>
        <h3 class="text-base font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">Research Assistant</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">University of Sharjah. Leading AI/ML research and NLP apps.</p>
      </div>
    </div>
  </section>

  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Education</h2>
      <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
    </div>
    
    <div class="grid grid-cols-1 gap-3">
      {% assign edu = "2025|PGDE|Sharjah Education Academy, 2018|M.Tech CS|University of Sharjah, 2014|B.Tech CS|Undergraduate Studies" | split: ", " %}
      {% for item in edu %}
        {% assign parts = item | split: "|" %}
        <div class="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all flex justify-between items-center">
          <div>
            <h3 class="text-sm font-bold text-forest-950 dark:text-white tracking-tight">{{ parts[1] }}</h3>
            <p class="text-[10px] text-slate-500 dark:text-slate-500 font-mono uppercase">{{ parts[2] }}</p>
          </div>
          <div class="text-xs font-mono text-accent">{{ parts[0] }}</div>
        </div>
      {% endfor %}
    </div>
  </section>
</div>
