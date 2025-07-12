---
layout: default
title: "Tech Meets Purpose: Tools for Growth & Productivity"
---
<h1 align="center">Tech Meets Purpose: Tools for Growth & Productivity</h1>

<div align="center" style="max-width: 700px; margin: auto; text-align: center;">
  <p>
    Whatever your profession — technology is becoming part of everything we do.
  </p>
  <p>
    This site is a curated space where I share free and premium resources to help you grow — whether you're looking to integrate tech tools into your workflow, develop yourself personally, or simplify complex tasks.
  </p>
  <p>
    From AI-powered cheat sheets and editable planners to digital support materials, everything here is designed with ease, clarity, and purpose.
  </p>
  <p><strong>Explore. Download. Adapt. And make it your own.</strong></p>

  <button onclick="showFree()">📂 Browse Free Files</button>
  <button onclick="showPremium()">🔒 Unlock Premium Resources</button>
</div>

<hr>

<!-- FREE SECTION -->
<div id="freeSection" style="display:none;">
  <h2>Free Teacher Resume Template</h2>
  <p>Highlight your teaching skills with a customizable resume template.</p>
  <a href="your-download-link-1" download>
    <button>Download</button>
  </a>
  <br><br>
  <h2>Free Lesson Plan Format</h2>
  <p>Editable lesson planning template aligned with learning objectives.</p>
  <a href="your-download-link-2" download>
    <button>Download</button>
  </a>
</div>

<!-- PREMIUM SECTION -->
<div id="premiumSection" style="display:none;">
  <h2>Premium Resume Bundle</h2>
  <p>Editable resume + cover letter templates with bonus tips (PDF + DOCX).</p>
  <a href="your-premium-download-link" download>
    <button>Download</button>
  </a>
  <br><br>
  <h2>Teacher Interview Kit</h2>
  <p>Prepare for interviews with editable Q&A flashcards and video guides.</p>
  <a href="your-premium-download-link-2" download>
    <button>Download</button>
  </a>
</div>

<script>
function showFree() {
  document.getElementById('freeSection').style.display = 'block';
  document.getElementById('premiumSection').style.display = 'none';
}
function showPremium() {
  document.getElementById('premiumSection').style.display = 'block';
  document.getElementById('freeSection').style.display = 'none';
}
</script>
