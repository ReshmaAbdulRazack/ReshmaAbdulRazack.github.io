---
layout: page
title: About me
permalink: /about/
subtitle: Discover my technical stack, professional leadership, and academic background.
---

<!-- Professional Summary -->
<section class="space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Profile_Summary</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
    Visionary educator and technologist with <strong>6+ years of experience</strong> leading innovative, technology-integrated learning environments across <strong>P-12 settings</strong> in the UAE and internationally. Holding a <strong>PGDE from Sharjah Education Academy</strong> and a <strong>Master of Technology in Computer Science</strong>, I bring a rare combination of design thinking, digital creativity, and pedagogical expertise.
  </p>
  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
    I have a proven track record of designing research-informed, student-centred curricula that merge creative arts with cutting-edge technology, including <strong>AI, robotics, web design, and digital storytelling</strong>. Certified Google Innovator, published researcher in Q1 journals, and international conference speaker.
  </p>
</section>

<!-- Tech & Design Stack -->
<section class="mt-16 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Technology_&_Design_Expertise</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div class="space-y-3">
      <h3 class="text-xs font-mono uppercase tracking-widest text-accent">Digital Design & Creative Tools</h3>
      <div class="flex flex-wrap gap-2">
        {% assign design_skills = "Web Development, Digital Storytelling, Scratch, Code.org, UI/UX Design, HTML/CSS" | split: ", " %}
        {% for skill in design_skills %}
        <span class="px-3 py-1 rounded-full bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-mono">
          {{ skill }}
        </span>
        {% endfor %}
      </div>
    </div>
    <div class="space-y-3">
      <h3 class="text-xs font-mono uppercase tracking-widest text-accent">Emerging Technologies</h3>
      <div class="flex flex-wrap gap-2">
        {% assign tech_skills = "AI, Machine Learning, Robotics, Deep Learning, NLP, Data Science, Edge Computing" | split: ", " %}
        {% for skill in tech_skills %}
        <span class="px-3 py-1 rounded-full bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-mono">
          {{ skill }}
        </span>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<!-- Leadership & Recognition -->
<section class="mt-16 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Leadership_Recognition</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div class="md:col-span-6 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Certified Google Innovator</div>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">Recognised for transformative use of technology in education and leading future-ready learning communities.</p>
    </div>

    <div class="md:col-span-6 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">GULF HE Standards Council</div>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">Member contributing to higher education quality standards across the Gulf region.</p>
    </div>

    <div class="md:col-span-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Gemini Certified Educator</div>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Expertise in generative AI and pedagogical innovation.</p>
    </div>

    <div class="md:col-span-8 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] transition-all group shadow-sm dark:shadow-none">
      <div class="text-[9px] font-mono text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full inline-block mb-4">Judging Panel Member // iNNOVISTA 2025</div>
      <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">Annual Innovation and STEAM Showcase at GEMS Millennium School, Sharjah.</p>
    </div>
  </div>
</section>

<!-- Experience -->
<section class="mt-16 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Professional_Experience</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
      <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
      <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Feb 2025 – May 2025</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">CS & Technology Teacher</h3>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">American School of Creative Science, Sharjah</p>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 italic">Project-based learning merging coding, digital design, and computational creativity.</p>
    </div>

    <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
      <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent/40"></div>
      <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Nov 2019 – Present</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">Research Assistant</h3>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">University of Sharjah</p>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 italic">AI, Machine Learning, and Arabic NLP. Published in Q1 journals.</p>
    </div>

    <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
      <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent/40"></div>
      <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Oct 2019 – Jan 2023</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">STEM Robotics Educator</h3>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">itsMyBot, USA (Remote)</p>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 italic">Designed engineering and programming curricula for global students.</p>
    </div>

    <div class="relative pl-6 border-l border-black/10 dark:border-white/10 group">
      <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent/40"></div>
      <div class="text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1 uppercase">Jun 2016 – Aug 2019</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white group-hover:text-accent transition-colors">Computer Teacher</h3>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Mambaul Huda School, India</p>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 italic">Taught creative computing and innovation to 300+ students.</p>
    </div>
  </div>
</section>

<!-- Education -->
<section class="mt-16 mb-8 space-y-6">
  <div class="flex items-center gap-4">
    <h2 class="text-xl font-bold text-forest-950 dark:text-white tracking-tighter">Education_&_Qualifications</h2>
    <div class="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div class="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
      <div class="text-[10px] font-mono text-accent mb-2">2024–2025</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white tracking-tight">PGDE</h3>
      <p class="text-[10px] text-slate-500 dark:text-slate-500 font-mono uppercase mt-1">Sharjah Education Academy</p>
    </div>
    <div class="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
      <div class="text-[10px] font-mono text-accent mb-2">2016–2018</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white tracking-tight">M.Tech Computer Science</h3>
      <p class="text-[10px] text-slate-500 dark:text-slate-500 font-mono uppercase mt-1">India</p>
    </div>
    <div class="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
      <div class="text-[10px] font-mono text-accent mb-2">2010–2014</div>
      <h3 class="text-sm font-bold text-forest-950 dark:text-white tracking-tight">B.Tech Computer Science</h3>
      <p class="text-[10px] text-slate-500 dark:text-slate-500 font-mono uppercase mt-1">India</p>
    </div>
  </div>
</section>
