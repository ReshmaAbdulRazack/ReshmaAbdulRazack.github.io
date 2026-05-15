---
title: ADDON Auto Detailing — Business Website
subtitle: A high-performance, zero-dependency single-file business website for a premium car care studio in Kerala — featuring cinematic dark UI, interactive before/after reveal, live video mosaic, and production-ready Docker + Cloudflare Tunnel deployment.
date: 2024-05-15
image: /assets/img/projects/addon-autodetailing-hero.png
category: Web Development & UI Design
tech_stack: [HTML5, CSS3, JavaScript, Nginx, Docker, Cloudflare, UI/UX Design]
video_url:
tool_link: https://addonautodetailing.com/
gallery:
  - /assets/img/projects/addon/addon-hero-real.png
  - /assets/img/projects/addon/addon-services-real.png
  - /assets/img/projects/addon/addon-transform-real.png
  - /assets/img/projects/addon/addon-contact-real.png
layout: project
permalink: /projects/addon-autodetailing-website/
---

## Project Overview

**ADDON Auto Detailing** is a fully self-contained, production-ready business website built for Kerala's premium car care studio located in Perinthalmanna, Malappuram. The client required a single, deliverable HTML file that could be opened directly in a browser, served via Python's built-in HTTP server, or deployed at scale through Docker + Nginx + Cloudflare Tunnel — all without a backend, framework, or build tool dependency.

The site establishes the brand identity of ADDON Auto Detailing as Kerala's most premium car care destination, showcasing services including ceramic coating, paint protection film (PPF), paint correction, vinyl wrapping, full car detailing, and interior detailing. Every section is engineered to convert: from the stat-counter hero to the before/after transformation reveal, from verified customer reviews to a direct WhatsApp booking CTA.

---

## What Makes This Tool Different

Most small-business websites are built on WordPress, Wix, or Shopify — platforms that introduce dependency, cost, performance overhead, and loss of ownership. This site is:

**Standard approach:**
`Template → CMS → Hosting Platform → Ongoing Subscription Cost`

**This project's approach:**
`Single HTML File → Zero Dependencies → Any Deployment Target (Browser / Python / Docker + Nginx + Cloudflare)`

The entire site — including all CSS, JavaScript, animations, interactive components, and embedded SVG assets — lives inside one `index.html` file. The client can drag and drop it to Netlify, open it locally, or deploy it behind Cloudflare Tunnel with professional-grade TLS, caching, and DDoS protection using the included Docker Compose stack. No databases, no maintenance, no monthly bills.

---

## ✨ Key Features

- **Cinematic Dark Hero** — Full-viewport video background with scan-line animation, Bebas Neue display typography, hero badge with pulse indicator, stat counters (500+ Cars Detailed, 9K+ Followers, 5★ Rating), and dual CTAs: "Book on WhatsApp" and "See The Effect"
- **Animated Scrolling Marquee** — Red accent strip cycling service names with dot separators and smooth infinite CSS animation
- **Interactive Before/After Reveal Slider** — Drag or click to reveal the car transformation from dirty (desaturated + sepia filter) to pristine ceramic coated (brightness/saturation boost with animated water-bead particles and shine sweep)
- **360° View Mode** — Tab-switched stage shows car 3D perspective with auto-spin and mouse-drag interaction
- **Video Mosaic Gallery** — Featured + 2 tile mosaic layout with hover zoom, label overlays, and muted/unmute sound toggle for in-page video playback
- **6-Service Card Grid** — Each card has a service process image with hover zoom, red top-border reveal on hover, emoji service icon, description text, and tag chips (e.g., "9H HARDNESS", "5YR WARRANTY")
- **Why Choose Us Section** — Stat cards with left-border accent (years, 5-star rating), trust points with icon tiles
- **4-Step Process Timeline** — Connected step circles with connector line
- **Customer Testimonial Grid** — Large quotation mark decorative element, star ratings, reviewer name and car
- **Instagram Feed Strip** — Six placeholder post tiles with gradient backgrounds, hover overlays, and a follow CTA with Instagram gradient button
- **Contact Section** — WhatsApp, phone, and email cards with hover border animation; embedded Google Maps CTA; inquiry form with name, email, service, and message fields
- **Sticky WhatsApp FAB** — Fixed floating action button with green pulse animation
- **Scroll-Reveal Animations** — Sections fade and translate upward on scroll via IntersectionObserver with staggered delay classes
- **Cursor Glow Effect** — Radial red gradient follows the mouse for premium interactive feel
- **Mobile Responsive** — Hamburger navigation, stacked layouts at 900px and 600px breakpoints, video mosaic reflow

---

## 🚀 Applications

- **Freelance Web Development for SMEs** — Demonstrates ability to deliver a full production website for a local business with no framework or infrastructure lock-in
- **Portfolio of Rapid Delivery Web Projects** — Single-file architecture allows instant delivery, preview, and iteration without a development environment
- **Docker + Cloudflare Tunnel Production Deployment** — The included `docker-compose.yml` and `nginx/default.conf` show containerised static site hosting with zero-trust networking for clients who own a domain
- **UX Design for Conversion** — Every section is structured around a conversion funnel: awareness (hero) → trust (stats, reviews) → engagement (before/after) → action (WhatsApp booking)
- **Template for Local Premium Service Businesses** — The design system and component set can be repurposed for barbershops, photography studios, salons, or any premium-service SME needing a cinematic dark-mode web presence

---

## 🧠 Core Technical Architecture

Engineered as a zero-dependency, self-contained front-end system:

- **Single-File Architecture:** The entire site is a single `index.html` with embedded `<style>` and `<script>` blocks. No external CSS framework, no JavaScript library, no build pipeline. Total distribution artifact: 1 file.
- **CSS Design System (Vanilla CSS Custom Properties):** A root-level design token system (`--black`, `--red`, `--gold`, `--white`, `--muted`) powers the entire visual hierarchy. All components reference tokens — no hard-coded colours in component CSS. Typography uses `Bebas Neue` (display) and `Barlow` / `Barlow Condensed` (body) loaded via Google Fonts.
- **Interactive Before/After Reveal Engine (Vanilla JS):** A `clip-path: inset()` technique driven by `mousemove`, `mousedown`, and `touchmove` events. The divider position is calculated as a percentage of stage width. Mouse events on desktop and touch events on mobile both update the reveal position smoothly.
- **360° View Interaction:** `rotateY()` CSS transform driven by mouse drag delta, with a fallback `auto-spin` CSS keyframe animation when idle.
- **CSS Particle System — Water Bead Effect:** Generated water-bead `<div>` elements positioned randomly across the "after" stage, using CSS variables (`--dur`, `--dly`) for randomised animation duration and delay. A `shine-sweep` pseudo-element adds a travelling light reflection.
- **Scroll-Reveal with IntersectionObserver:** A lightweight `IntersectionObserver` watches all `.reveal` elements and adds the `visible` class on entry, triggering CSS `opacity` and `transform` transitions. Stagger delay classes (`.reveal-delay-1` through `.reveal-delay-4`) create sequential entrance effects.
- **Video Mosaic with In-Page Sound Control:** HTML5 `<video>` elements set to `muted autoplay loop` for background atmosphere. A custom "🔊 Sound" toggle button unmutes/remutes the featured video on click.
- **Docker + Nginx Deployment Stack:** The included `docker-compose.yml` runs two services: `nginx:1.27-alpine` serving the static file at port 8080, and `cloudflare/cloudflared:latest` connecting to a Cloudflare Zero Trust tunnel. The site is served at the client's domain with HTTPS, caching, and DDoS protection — no server configuration required beyond a single environment variable (`TUNNEL_TOKEN`).
- **Cursor Glow (CSS + JS):** A `position:fixed` radial gradient `div` tracks `mousemove` events and repositions via `transform: translate(-50%, -50%)` — creating a subtle ambient red glow that follows the cursor.
- **Form Submission UX:** A lightweight `submit` event listener intercepts the contact form, shows an inline success toast (`✓ Message sent!`), and resets the form — without any backend dependency.

---

## 🔬 Research & Academic Impact

This project explores several active areas in web design and performance engineering:

- **Zero-Dependency Web Architecture:** A deliberate design constraint — no `npm`, no framework, no CDN JavaScript — demonstrating that production-quality interactivity is achievable in pure HTML/CSS/JS. This approach eliminates supply-chain attack surface, reduces page load time, and ensures the site works offline.
- **CSS-First Animation:** The majority of animations (marquee, scan-line, water beads, shine sweep, WhatsApp pulse, fade-up reveals) are implemented entirely in CSS with no JavaScript animation libraries. This reduces main-thread blocking and preserves smooth 60fps rendering.
- **Conversion Funnel UX Design:** The page layout follows a deliberate trust-building sequence — badge credibility signal → large claim → social proof (stats) → tangible proof (video/before-after) → reviews → easy contact. Each section is engineered to answer a specific buyer objection.
- **Mobile-First Responsiveness Without a Grid Framework:** All responsive behaviour is achieved through CSS Grid `auto-fit minmax()`, Flexbox wrapping, and targeted `@media` breakpoints — without Bootstrap, Tailwind, or any CSS framework.
- **Static Site + Tunnel Deployment Pattern:** The Docker + Cloudflare Tunnel pattern is an emerging deployment model for small businesses that want TLS-secured public URLs without exposing server IPs or managing DNS records. This project provides a replicable reference architecture for this pattern.

---

## ✨ Key Skills Demonstrated

- **Vanilla HTML/CSS/JS Mastery:** Complex interactivity (before/after slider, 360° rotation, particle effects, scroll reveal) built without any libraries — demonstrating deep understanding of browser APIs and the DOM
- **UI/UX Design for Conversion:** Cinematic dark-mode design language, premium typography choices, and funnel-structured page layout engineered for a local service business audience
- **CSS Animation Engineering:** Keyframe animations, IntersectionObserver-triggered transitions, CSS custom property-driven particle systems, and performance-conscious animation design
- **Docker & DevOps for Static Sites:** Containerised Nginx deployment with Cloudflare Tunnel integration — bridging front-end web development with infrastructure delivery
- **Client Delivery & Documentation:** Clear `README.txt` with three deployment paths (direct browser open, Python server, Docker + Cloudflare), complete with commands, domain setup steps, and update guidance
- **Responsive Web Design (No Framework):** Full mobile responsiveness at two breakpoints using native CSS Grid and Flexbox, with stacked layouts, hamburger nav, and adjusted hero statistics
