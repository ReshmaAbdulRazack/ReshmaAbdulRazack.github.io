---
title: Sharjah Arabic Romanization Tool
subtitle: An AI-powered NLP pipeline that automatically restores missing Arabic diacritics and accurately converts text into multiple standardized Romanization systems (IPA, Brill, Congress, Buckwalter, Arabica).
date: 2022-02-14
image: /assets/img/projects/sharjah-romanization.png
demo_url: 
tool_link: https://romanization.sharjah.ac.ae/
category: NLP & Machine Learning
tech_stack: [Python, PyTorch, Hugging Face Transformers, Django, PostgreSQL, Nginx, NLP]
gallery:
  - /assets/img/projects/romanization/gallery-1.png
  - /assets/img/projects/romanization/gallery-2.png
  - /assets/img/projects/romanization/gallery-3.png
layout: project
titles_from_headings: false
---

## Project Overview

The **Sharjah Arabic Romanization Tool** is a comprehensive, deep learning-powered web application designed to solve one of the most challenging problems in Arabic Natural Language Processing (NLP): the transliteration of unvoweled Arabic text. 

In everyday usage, Arabic is written without short vowels (diacritics or *harakat*). This ambiguity makes automated phonetic transliteration exceptionally difficult, as a single word can be pronounced in multiple ways depending on its context. This tool bridges the gap by leveraging a state-of-the-art **Transformer-based Neural Network** to intelligently predict and restore these missing diacritics before running the text through complex, standard-specific Romanization algorithms.

Developed as a robust end-to-end platform, the tool supports five major transliteration standards: **IPA (International Phonetic Alphabet), Library of Congress (ALA-LC), Brill, Buckwalter, and Arabica**, making it an indispensable resource for linguists, PhD researchers, and digital humanities scholars.

## 🧠 Core Technical Architecture

Built for scale and accuracy, the project implements a sophisticated architecture combining modern web development with advanced Machine Learning:

*   **Deep Learning NLP Engine (PyTorch & Hugging Face):** The core diacritic restoration is modeled as a **Token Classification** task. The pipeline utilizes a custom fine-tuned Transformer model (`SukounBert` / `AraBERT`). By understanding bidirectional context, the model predicts the correct diacritic class (Fatha, Kasra, Damma, Sukun, etc.) for every character with high precision.
*   **Backend Engineering (Python & Django):** The entire system is orchestrated by a robust Django backend. It handles asynchronous file processing, manages user sessions via Google OAuth, and interfaces with a SQLite/PostgreSQL database to store user conversion histories.
*   **Algorithmic Transliteration & Syllabification:** Once the text is fully diacritized by the neural network, custom linguistic algorithms map the text into the requested Romanization format. The system also performs **morphological syllabification**, breaking down words into consonant-vowel clusters (e.g., CV, CVC, CVV) based on strict Arabic phonetic rules.
*   **Automated Bulk Processing:** To support large-scale corpus linguistics, the tool integrates libraries like `textract` and `xlrd`/`XlsxWriter`. Users can upload entire PDF, Word, or Excel documents; the application extracts the raw text, processes it through the deep learning pipeline, and generates a fully translated and formatted downloadable file.
*   **Production Deployment:** Engineered for a production environment, configured with **Gunicorn**, **Nginx**, and SSL/TLS certificates to handle high-traffic API requests securely.

## 🚀 Research & Academic Impact

This project was specifically designed to accelerate linguistic research and demonstrates a high level of competency in Applied AI:

*   **Corpus Linguistics:** Enables researchers to rapidly convert massive amounts of raw Arabic text into phonetic or standardized Latin formats for statistical analysis.
*   **Speech & Translation Studies:** The syllabification feature provides critical data for Text-to-Speech (TTS) models and acoustic phonetics research.
*   **Generalizing Across Standards:** By supporting multiple standards (like Brill and ALA-LC), the tool acts as a universal bridge for academics publishing in different Western journals, saving hundreds of hours of manual transcription.

## ✨ Key Skills Demonstrated

- **Machine Learning & NLP:** PyTorch, Hugging Face Transformers, Token Classification, Contextual Word Embeddings.
- **Backend & API Development:** Python, Django, RESTful principles, Gunicorn/Nginx deployment.
- **Data Engineering:** PDF/Docx/Excel parsing, text normalization (`pyarabic`), sequence alignment, handling complex text encoding.
- **Problem Solving:** Successfully translating a deeply linguistic problem into a measurable, scalable engineering solution.

