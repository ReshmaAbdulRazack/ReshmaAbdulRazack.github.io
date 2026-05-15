---
title: Iris-Based Gender Recognition System
subtitle: A comprehensive biometric classification framework utilizing geometric, texture, and statistical feature extraction from Near-Infrared (NIR) iris images to accurately predict gender.
date: 2024-01-01
image: /assets/img/projects/iris-gender-recognition.png
category: Computer Vision & Biometrics
tech_stack: [Python, OpenCV, SVM, MLP, Decision Trees, Daugman's Algorithm, Statistical Analytics, NIR Imaging]
layout: project
permalink: /projects/iris-gender-recognition/
---

## Project Overview

The **Iris-Based Gender Recognition System** is a sophisticated biometric research project focused on identifying gender through the intricate patterns of the human iris. While iris recognition is traditionally used for identity verification, this project explores the secondary biometric traits embedded within the iris structure.

The system utilizes high-fidelity images captured via Near-Infrared (NIR) sensors (such as LG2200 and I-Scan 2) to ensure high contrast even in varying lighting conditions. By applying advanced segmentation techniques like **Daugman's Integro-Differential Operator** and **Wildes' Hough Transform**, the system isolates the iris region, normalizes its dimensions, and extracts a multidimensional feature set across geometric, texture, and statistical domains.

---

## What Makes This Tool Different

Most biometric systems focus solely on unique identification. This project shifts the focus to **soft biometrics**, providing a non-intrusive method for demographic classification.

**Standard approach:**
`Facial Recognition → High Privacy Risk → Occlusion Sensitive`

**This project's approach:**
`Iris Pattern Analysis → High Accuracy (up to 85.33%) → Occlusion Resistant (works with NIR in darkness)`

By leveraging a hybrid feature extraction model—combining geometric variables (pupil/iris area ratios) with statistical descriptors (mean, variance, and standard deviation along radial/angular directions)—the system achieves a level of granularity that standard facial metrology often misses.

---

## ✨ Key Features

- **Multimodal Feature Extraction** — Simultaneously extracts Geometric features (pupil/iris center distance, area ratios), Texture features (variance and mean of complex components), and Statistical features (radial and angular distribution).
- **Advanced Iris Segmentation** — Implements Daugman's Algorithm and Wildes' System for precise pupil and limbus boundary detection.
- **NIR Sensor Integration** — Designed to process bitmap images from hardware like the I-Scan 2, operating in the 700–900nm NIR range for consistent data capture.
- **High-Accuracy Classification** — Employs a suite of machine learning classifiers including **Support Vector Machines (SVM)**, **Multi-Layer Perceptrons (MLP)**, and **C4.5 Decision Trees**.
- **Automated Normalization** — Transforms segmented iris regions into fixed dimensions using 2D-DWT and other mapping techniques to allow for direct comparative analysis.

---

## 🚀 Applications

- **Targeted Marketing & Demographics** — Non-intrusive gender classification for digital signage and retail analytics.
- **Enhanced Security Protocols** — Adding a secondary layer of demographic verification to existing biometric security checkpoints.
- **Forensic Science** — Assisting in forensic investigations where only ocular evidence is available.
- **Human-Computer Interaction (HCI)** — Enabling adaptive interfaces that tailor content based on user demographics without requiring explicit login.

---

## 🧠 Core Technical Architecture

The system follows a rigorous five-stage pipeline:

1. **Image Acquisition:** Captures high-resolution eye images using NIR illumination to minimize pupil dilation and maximize iris texture visibility.
2. **Segmentation & Localization:** Uses circular Hough transforms to detect the limbic and pupil boundaries, followed by limbic boundary tests to differentiate iris from sclera.
3. **Normalization:** Converts the circular iris region into a rectangular block of fixed dimensions (Daugman's Rubber Sheet Model) to account for varying pupil sizes.
4. **Feature Engineering:** 
   - **Geometric:** `distCenter`, `irisArea`, `pupilArea`, and `areaRatio`.
   - **Texture:** Computing `XRealMean` and `colVar` across the encoded iris array.
   - **Statistical:** Calculating Mean, Median, and Std Dev along radial paths from the pupil to the sclera.
5. **Classification:** Feeds the feature vector into trained MLP and SVM models to output a binary gender prediction.

---

## 🔬 Research & Academic Impact

This project contributes to the field of computational biometrics by validating the efficacy of specific feature sets for gender prediction:
- **Mutual Information (MI) Optimization:** Investigates newest approaches in feature selection using mRMR and CMIM measures to identify the most predictive iris traits.
- **Statistical Significance:** Demonstrates that statistical and 2D-DWT features provide the highest density of predictive data compared to purely geometric ones.
- **Benchmarking Accuracy:** Achieved peak accuracies of **85.33%** on left iris datasets, establishing a strong baseline for future deep learning integrations.

---

## ✨ Key Skills Demonstrated

- **Computer Vision Engineering:** Implementing complex segmentation and normalization algorithms using OpenCV.
- **Machine Learning & Pattern Recognition:** Building and tuning SVM, MLP, and Decision Tree classifiers for biometric data.
- **Biometric Hardware Integration:** Understanding NIR sensor parameters (700-900nm) and hardware-level image capture requirements.
- **Data Engineering & Feature Extraction:** Designing custom mathematical descriptors for unstructured image data.
- **Scientific Research & Analysis:** Synthesizing findings from academic literature (IEEE standards) into a functional technical implementation.
