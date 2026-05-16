---
title: Multilingual Semantic Similarity
subtitle: A multilingual sentence embedding research toolkit using Sentence-Transformers and HuggingFace to compute contextual semantic similarity between sentences across languages.
date: 2024-06-01
image: /assets/img/projects/sentence-transformers/main.png
category: NLP & Deep Learning
tech_stack: [Python, PyTorch, Hugging Face Transformers, Sentence-BERT, NLP, Deep Learning]
gallery:
  - /assets/img/projects/sentence-transformers/main.png
layout: project
titles_from_headings: false
---

## Project Overview

**Multilingual Semantic Similarity** is an NLP research toolkit built around the `sentence-transformers` library and HuggingFace Transformers. It leverages the power of cross-lingual BERT-based models — specifically `xlm-r-100langs-bert-base-nli-stsb-mean-tokens` — to generate dense vector embeddings for sentences in over 100 languages.

Rather than simply checking keyword overlap, the system understands the **meaning** behind sentences. Two sentences like *"Maintain speeches"* and *"Before we can begin to understand the parameters of the oratorical genre..."* can be evaluated for how semantically related they are — a capability critical for modern NLP applications.

## 🌟 What Makes This Tool Different?

- **True Semantic Understanding**: Goes beyond keyword matching to understand contextual meaning using Transformer embeddings.
- **Multilingual by Design**: The underlying model supports 100+ languages, making it suitable for cross-lingual research including Arabic, English, and more.
- **Dual-Implementation Approach**: The toolkit provides two usage patterns — via the high-level `sentence-transformers` library and directly via raw `HuggingFace Transformers` with custom mean-pooling — giving full control over the inference pipeline.
- **Research-Ready**: Built with academic rigour, the similarity scores are computed using **cosine similarity**, the standard metric in information retrieval and NLP benchmarking.

## ✨ Key Features

- **Dense Sentence Embeddings**: Converts raw text into fixed-size semantic vectors using BERT-family models.
- **Cosine Similarity Scoring**: Measures meaningful semantic distance between sentence pairs in a [0, 1] range.
- **Custom Mean Pooling**: Implements attention-mask-aware mean pooling from scratch using PyTorch for full model transparency.
- **HuggingFace Integration**: Loads pre-trained models directly from the HuggingFace Hub (`xlm-roberta` based architecture).
- **Lightweight & Modular**: Clean Python scripts with minimal dependencies, easy to integrate into larger NLP pipelines.

## 🚀 Applications

- **Cross-Lingual Information Retrieval**: Finding semantically similar documents across different languages.
- **Duplicate Detection**: Identifying paraphrased or near-duplicate sentences in large text corpora.
- **NLP Research Preprocessing**: A foundation for translation quality evaluation, semantic search, and question answering.
- **Arabic NLP Pipelines**: Directly applicable as a similarity backbone for Arabic-language tools and corpora.
- **Document Clustering**: Grouping thematically related text passages for corpus analysis.

## 🧠 Core Technical Architecture

- **Base Model**: `xlm-roberta-base` fine-tuned on NLI + STS benchmarks across 100 languages (`sentence-transformers/xlm-r-100langs-bert-base-nli-stsb-mean-tokens`).
- **Embedding Generation**: Two methods implemented:
  - **High-Level API** (`sentence-transformers`): `SentenceTransformer.encode()` for fast, production-friendly inference.
  - **Low-Level API** (`HuggingFace`): Custom `AutoTokenizer` + `AutoModel` with `mean_pooling()` for full transparency and research flexibility.
- **Similarity Metric**: `util.pytorch_cos_sim()` for cosine similarity between sentence embedding vectors.
- **Framework**: PyTorch backend with HuggingFace Transformers ecosystem.

## 📚 Research & Academic Foundation

This project is grounded in the landmark **Sentence-BERT (SBERT)** paper:

> *Reimers, N. & Gurevych, I. (2019). Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. EMNLP.*

The multilingual model extends this work to over 100 languages, making it particularly relevant for low-resource language research including Arabic NLP at the **University of Sharjah**.

## 🛠️ Key Skills Demonstrated

- **NLP Research**: Sentence embeddings, semantic similarity, and multilingual model evaluation.
- **Deep Learning**: Working with Transformer models (XLM-RoBERTa), tokenization, and PyTorch tensor operations.
- **HuggingFace Ecosystem**: `AutoTokenizer`, `AutoModel`, and `SentenceTransformer` APIs.
- **Python Engineering**: Building modular, reusable NLP scripts with clean code structure.
- **Cross-Lingual AI**: Applying multilingual models to real-world bilingual research problems.
