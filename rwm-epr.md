---
layout: default
title: "Urban Memory Geography"
permalink: /rwm-epr/
description: "Mapping how the temporal structure of prior visits informs return choice across Boston and YJMob."
---

<p><a class="back-link" href="{{ '/projects/' | relative_url }}">Back to projects</a></p>

# Urban Memory Geography: Mapping the Temporal Structure of Human Return
**June 2025 – Present · Ryan Wang Lab · Boston, USA**

How do people choose which familiar place to revisit? I study return choice using the complete sequence of prior visits to every available destination. A regularized **power-law temporal score** allows older and recent visits to contribute at different strengths, placing observed return on a continuum from frequency-driven to recency-weighted choice.

Using the **Boston Walking Study** and **YJMob100K**, I test whether visit timing adds information beyond prior visit frequency and current-to-candidate distance. After matching candidate destinations on visit count, timing improves held-out return choice in both datasets. With distance controlled, YJMob retains an additional temporal signal, while Boston lies at the frequency boundary.

I pool this choice evidence by destination to estimate a **recurrence signature** and map the resulting **urban memory geography**. Boston signatures concentrate at or near the frequency boundary. Across YJMob, the signatures show spatial clustering that remains after adjustment for event count and POI density and exceeds a shared-candidate reference.

## Highlights
- Represents return choice with the complete temporal history of prior visits to familiar destinations.
- Evaluates temporal information with held-out choice tests in Boston and YJMob.
- Evaluates whether visit timing adds information beyond visit frequency and current-to-candidate distance.
- Maps destination-level recurrence signatures to reveal their spatial organization across the two study settings.

## Urban Memory Signature Maps

<div class="signature-figures">
  <figure class="signature-figure">
    <img src="{{ '/assets/urban-memory-signature-boston.png' | relative_url }}" alt="Boston destination recurrence signatures summarized across census tracts" loading="lazy">
    <figcaption><strong>Boston Metropolitan Study Area.</strong> Census-tract means summarize destination recurrence signatures estimated at 500 m cells; darker teal values are more frequency-like and warmer values are more recency-sensitive.</figcaption>
  </figure>
  <figure class="signature-figure">
    <img src="{{ '/assets/urban-memory-signature-yjmob.png' | relative_url }}" alt="YJMob destination recurrence signatures mapped on an anonymized metropolitan grid" loading="lazy">
    <figcaption><strong>YJMob Anonymous City.</strong> Destination recurrence signatures on the 500 m metropolitan grid, using the same frequency-like to recency-sensitive scale.</figcaption>
  </figure>
</div>

## Status
This working paper is ongoing. The current analysis focuses on the temporal structure of return choice and the spatial organization of destination recurrence signatures across the two datasets.
