---
title: Al Murshid Dictionary
subtitle: A digital lexicon with advanced search and visual mapping for bilingual research and development.
date: 2023-12-01
image: /assets/img/projects/al_murshid_cover.png
tool_link: https://dictionary.sharjah.ac.ae/
category: Linguistics
tech_stack: [Python, Django, MySQL, Pandas, JavaScript/AJAX, Nginx/Gunicorn, NLP]
gallery:
  - /assets/img/projects/al_murshid_corpus_search.png
  - /assets/img/projects/al_murshid_ipa_engine.png
  - /assets/img/projects/al_murshid_ontology_dashboard.png
layout: project
titles_from_headings: false
carousel_interval: 3800
---

## 📖 Project Overview
**Al-Murshid** is a comprehensive bilingual (Arabic-English) dictionary, phrase search engine, and linguistic processing tool. Built as a full-stack web application, it serves as a powerful repository for querying exact word meanings, retrieving contextual phrase translations across a vast dual-language sentence corpus, and performing complex linguistic tasks such as Arabic-to-IPA (International Phonetic Alphabet) transcription. The platform features robust administrative capabilities, enabling authorized users to upload custom documents and dynamically parse them into the system's SQL databases.

## 🌟 What Makes This Tool Different
Unlike standard dictionaries that simply map words, Al-Murshid acts as an end-to-end linguistic research portal:
- **Contextual Corpus Integration**: Instead of isolated definitions, it provides real-world sentence alignments (English-to-Arabic) so users can understand how words and phrases behave in context.
- **Automated Phonetics (IPA) Engine**: It features a built-in module that predicts missing Arabic diacritics (Tashkeel/Harakat) and translates the text into accurate IPA notation.
- **Dynamic Knowledge Base Expansion**: It isn't statically constrained. Administrators have a dedicated document-upload pipeline that automatically extracts text data and populates the MySQL corpus database.

## ✨ Key Features
- **Advanced Bilingual Search**: Dual-directional dictionary querying (Arabic-to-English and English-to-Arabic) complete with regex-powered fuzzy matching and real-time AJAX autocompletion.
- **Phrase & Corpus Search**: A dedicated search engine for querying a massive sentence corpus, allowing users to find exact or similar bilingual phrase alignments.
- **Phonetic Transcription (IPA)**: A sophisticated Arabic NLP pipeline that processes raw Arabic text, predicts necessary diacritics, and outputs phonetic transcriptions.
- **Admin Document Pipeline**: Secure, role-based document upload functionality where superusers can upload files (e.g., `.docx`), which the system parses and indexes directly into the database.
- **Secure Access Control**: Integrated Django authentication, custom user roles, and reCAPTCHA security to manage administrative vs. public search access.

## 🎯 Applications
- **Academic Linguistic Research**: Used by linguists and NLP researchers to analyze Arabic morphology, phonetics, and cross-lingual phrase alignments.
- **Translation & Localization**: A powerful reference tool for professional translators needing accurate contextual mappings between English and Arabic sentences.
- **Language Education**: Assists learners of Arabic in grasping pronunciation via the IPA engine and understanding word usages through the sentence corpus.

## 🚀 Core Technical Architecture
- **Backend Framework**: **Python / Django** handles the MVT (Model-View-Template) architecture, user authentication, and API endpoints.
- **Database**: **MySQL** serves as the primary data store, hosting heavy tables optimized for rapid text searching.
- **Data Processing & NLP**: Uses **Pandas** and custom Python scripts to handle complex regex filtering, data extraction, and phonetic conversions.
- **Frontend Interface**: **HTML/CSS/JS** with Django Templates. It relies heavily on asynchronous JavaScript (AJAX) to deliver real-time table rendering and instant search autocomplete without page reloads.
- **Deployment Infrastructure**: Production-ready stack utilizing **Gunicorn**, **Nginx**, and **Systemd** on a Linux server.

## 🔬 Research and Academic Impact
This tool significantly contributes to the field of Arabic Natural Language Processing (NLP). By consolidating a clean, searchable bilingual corpus and an automated diacritic/IPA prediction engine, it provides researchers with the essential datasets and tools required to train machine translation models, speech-to-text engines, and phonetic analysis algorithms for the Arabic language.

## 🛠️ Key Skills Demonstrated
- **Full-Stack Web Development**: Python, Django, JavaScript, AJAX
- **Database Design & Engineering**: MySQL, SQL query optimization
- **Natural Language Processing (NLP)**: Bilingual text alignment, IPA transcription, Diacritic prediction
- **Data Pipeline Construction**: Pandas, automated file parsing, database population
- **DevOps & Server Administration**: Linux, Nginx, Gunicorn configuration
