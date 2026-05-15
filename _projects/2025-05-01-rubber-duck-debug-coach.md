---
title: Digital Rubber Duck Debugging Coach
subtitle: An AI-powered pedagogical tool that guides beginner coding learners through Socratic debugging questions — and gives teachers real-time visibility into student progress, misconceptions, and confidence growth.
date: 2025-05-01
image: /assets/img/projects/rubber-duck-debug-coach.png
category: EdTech & AI
tech_stack: [React, TypeScript, Tailwind CSS, Gemini API, AI/LLMs, State Management, Prompt Engineering]
video_url: /assets/img/projects/tour-1778848551654.mp4
tool_link:
layout: project
---

## Project Overview

The **Digital Rubber Duck Debugging Coach: Learner Insight Dashboard** is a Google Certified Innovator prototype developed to address a persistent and well-documented problem in computing education: beginner learners consistently skip the self-explanation process when they encounter bugs, immediately seeking direct answers rather than reasoning through their own logic. At the same time, teachers in classroom settings lack scalable, data-driven tools to identify exactly where a student's conceptual understanding breaks down.

This project operationalises the **Rubber Duck Debugging** technique — a well-known cognitive strategy in software engineering where developers explain their code aloud to a passive listener to trigger self-directed problem identification — as an interactive, AI-powered educational tool. A friendly 🦆 Duck assistant (powered by **Gemini AI**) guides learners through structured, Socratic questioning sequences, ensuring they verbalise their intent, trace their logic, and identify the bug through guided reasoning rather than passive instruction.

Every debugging session is logged, analysed, and aggregated into a **Teacher Insight Dashboard** that surfaces student confidence trends, recurring misconceptions, and intervention priorities — giving educators immediate, actionable classroom intelligence without adding administrative burden.

---

## What Makes This Tool Different

Most educational debugging tools fall into two categories: they either show the answer, or they show a hint. Neither approach builds the metacognitive skills students need to debug independently in the future.

**Standard tools follow this workflow:**
`Error → Hint → Answer`

**This tool follows a research-driven pedagogical workflow:**
`Error → Intent Articulation → Socratic Dialogue → Scaffolded Reasoning → Student-Led Resolution → Teacher Insight`

The key distinction is that **the Duck never gives the answer**. It asks increasingly specific questions until the student arrives at the solution themselves. If a student is genuinely stuck, the system transitions from open-ended to structured scaffolding (multiple-choice, fill-in-the-blank, trace tables) — maintaining challenge while rebuilding confidence. Every interaction is logged and classified, producing a rich profile of each learner's debugging strengths and persistent weak points.

---

## ✨ Key Features

- **Socratic Debugging Engine** — AI-driven questioning that never gives the answer directly; always guides toward self-discovery
- **Adaptive Scaffolding** — Shifts from open-ended questions to structured prompts when a student is genuinely stuck
- **Student Intake Form** — Structured pre-chat form captures language, topic, code, expected vs. actual output, and student hypothesis before the session begins
- **Send to Teacher Button** — One-click escalation that generates a structured AI summary for the teacher, including suspected misconception and recommended intervention
- **Confidence Tracking** — Captures confidence score before and after each session, enabling longitudinal trend analysis
- **Debugging History Log** — Full session archive with error type, outcome, confidence delta, and teacher involvement flag
- **Strengths & Weaknesses Profile** — Per-student breakdown of strong debugging skills and recurring weak points, with a personalised improvement plan
- **Teacher Dashboard** — Aggregated class-wide metrics: students stuck, most common misconception this week, average confidence growth, sessions completed
- **Class Overview Table** — Student-by-student status view with topic, weak/strong points, improvement urgency, and action button
- **Common Misconceptions View** — Identifies class-level patterns (e.g., "9 students struggle with loop tracing") and suggests targeted classroom interventions

---

## 🚀 Applications

- **K-12 and Higher Education Computer Science Classrooms** — Supports beginner learners across any programming language or topic
- **Self-Paced Coding Bootcamps** — Enables independent debugging practice without requiring constant instructor availability
- **Formative Assessment** — Session logs and confidence trends provide teachers with continuous, low-effort formative data
- **Metacognition & Self-Regulation Research** — Session transcripts and confidence deltas provide rich data for educational research on self-directed learning
- **Teacher Professional Development** — The misconception dashboard helps educators identify which concepts need stronger instructional design
- **Google Certified Innovator Projects** — Designed as a validated prototype for the Google for Education Certified Innovator programme

---

## 🧠 Core Technical Architecture

Built as a fully interactive, dual-role web prototype combining modern frontend engineering with AI integration:

- **AI Questioning Engine (Gemini API):** The Duck assistant is powered by a carefully engineered prompt chain that enforces the Socratic constraint — it is instructed to never give the answer and to escalate scaffold complexity only when weak responses are detected. Student responses are classified in real-time to determine whether to continue open-ended dialogue or shift to structured support (multiple-choice, fill-in-the-blank, trace tables).
- **Frontend Framework (React + TypeScript):** Built as a fully componentised React application with TypeScript for type safety and scalability. Navigation handles seamless switching between Student and Teacher role views without page reloads.
- **State Management & Session Logic:** Each debugging session manages multi-step state (intake → chat → result → reflection), persisting confidence scores, response history, and session metadata for both the student profile and teacher summary generation.
- **AI-Generated Teacher Summary:** When a student clicks "I'm Still Stuck", the system sends the full session context to Gemini, which returns a structured teacher brief: code snapshot, expected vs. actual output, a diagnosis of the suspected misconception, and a recommended intervention strategy.
- **Dual-Role Navigation System:** A top-level navigation bar allows testers to switch between the Student View and Teacher View, enabling end-to-end prototype walkthroughs for both user groups.
- **Data Visualisation Components:** Confidence trend charts, class health summary cards, and misconception frequency panels are rendered using modular chart and card components designed for clarity and speed of interpretation by non-technical teacher users.
- **Design System:** Vibrant Palette theme — sky-blue (`#0ea5e9`) primary actions, yellow Duck brand accent, dark code panel (`bg-slate-900`), high-contrast status badges, and responsive grid layouts using Tailwind CSS.

---

## 🔬 Research & Academic Impact

This project is grounded in established learning science and contributes to several active areas of educational research:

- **Metacognition in Computing Education:** This tool is a direct technological application of metacognitive regulation theory — specifically, the role of self-explanation in error identification. The session structure (intent → trace → identify → reflect) mirrors evidence-based instructional scaffolding frameworks.
- **Scalable Formative Assessment:** The teacher dashboard addresses a documented scalability problem in computing classrooms: teachers cannot provide individualised debugging support to 25+ students simultaneously. This system generates structured, AI-mediated formative data at zero additional cost to the teacher.
- **Misconception Mapping:** By aggregating session data across a class, the Common Misconceptions View contributes to a growing area of research on systematic misconception identification in introductory programming — including loop tracing errors, condition logic confusion, and output prediction failures.
- **Confidence as a Learning Signal:** The pre/post confidence scoring system treats self-efficacy as a measurable variable, enabling longitudinal analysis of how debugging success correlates with confidence growth — a metric rarely captured in traditional assessment.
- **Hypothesis Under Investigation:** *Does structured self-explanation, facilitated by a Socratic AI agent, improve debugging success rates and build lasting debugging confidence in beginner coders?* This prototype is designed to generate the data needed to answer that question through user testing.

---

## ✨ Key Skills Demonstrated

- **AI & Prompt Engineering:** Gemini API integration with carefully constrained instructional prompting for Socratic dialogue and teacher summary generation
- **Educational Technology Design:** Research-driven UX for dual user groups (learners and educators), grounded in metacognition theory and formative assessment principles
- **Full-Stack Prototyping:** React, TypeScript, component architecture, multi-step state management, dual-role navigation
- **Data Visualisation:** Confidence trend displays, class health dashboards, misconception frequency analysis
- **Pedagogical Expertise:** Applied knowledge of scaffolded instruction, adaptive questioning, and self-regulated learning design
- **Google Certified Innovator Research:** Hypothesis-driven prototype design, structured for user testing and iterative validation with real students and educators
