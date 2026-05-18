---
layout: default
title: "Recency-Weighted Memory EPR Model"
permalink: /rwm-epr/
---

<p><a class="back-link" href="{{ '/projects/' | relative_url }}">Back to projects</a></p>

# Recency-Weighted Memory EPR Model
**June 2025 – Present · Ryan Wang Lab · Boston, USA**

Previous studies have introduced several improved EPR models, such as **Recency-EPR, Memory-EPR, Density-EPR, and Weighted-EPR** to simulate **individual-level human mobility**. These studies mostly focus on large spatial scales (e.g., the national level). However, the spatiotemporal characteristics of intra-urban mobility differ from those of large-scale mobility. In 2025, an intra-urban mobility model, the **Urban-EPR model** was proposed. It makes two key claims: (i) Temporal patterns: waiting times within cities follow a log-normal distribution with universal parameters, rather than the gamma, exponential, power-law, or truncated power-law distributions often observed at larger spatial scales; (ii) Spatial characteristics: location choice within cities can be simulated by the Universal Opportunity (UO) model with universal parameters, rather than by traditional gravity-based models.

However, for return behavior, especially **non-routine returns**, current EPR formulations typically consider only recency-based or frequency-based mechanisms and do not account for individual heterogeneity. My study focuses on mechanistic, individual-level models. I develop a cognitive return mechanism for the return phase, a **Recency-based Memory EPR model**, as an enhancement to the Urban-EPR framework. This recency-based memory-decay model combines the advantages of recency and frequency effects while incorporating age heterogeneity, which improved interpretability and explanatory power for individual mobility in the non-routine return phase.

## Highlights
- Applied **UO** model in the Boston Metropolitan Area (BMA); simulated waiting times; **log-normal** best fit.  
- Simulated universal parameters via **MC sampling** and **CPC similarity**.  
- Added **recency-based memory decay** to capture **age heterogeneity**.
- Compared and justified the better **prediction and explainability** of new model in the testing dataset.

## Figures
<img src="{{ '/assets/rwm-epr-waiting-time.png' | relative_url }}" alt="Waiting-time distribution fits" style="width:70%;max-width:980px;display:block;margin:12px auto;">
<img src="{{ '/assets/uo-parameter-heatmap.png' | relative_url }}" alt="UO model CPC heatmap" style="width:70%;max-width:980px;display:block;margin:12px auto;">

## Notes
The paper is ongoing. I have completed the UO-model simulation for the exploration phase and will continue to update the results as the analysis progresses. We also plan to incorporate additional datasets from other cities to test the relationship between age heterogeneity and the memory mechanism in the explanatory analysis. In addition, we will integrate POI, public-health, and related datasets to strengthen the model’s interpretability and explanatory power.
