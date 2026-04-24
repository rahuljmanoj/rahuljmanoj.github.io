---
layout: page
title: Reflection-free Pulse Wave Velocity (PWV) 
description: Improved measurement accuracy and precision of the pulse wave velocity (PWV) and its incremental variations within a cardiac cycle. Implimented wave reflections-compensated Pulse Trasit Time (PTT) for PWV computation. 
img: assets/img/projects/reflection_free_PWV/cover_1.PNG
importance: 4
category: Algorithm Devlopment & Modelling
---
## Project Overview
This project was undertaken as part my PhD thesis at [Advanced Cardiovascular Technologies Laboratory](https://sites.google.com/ee.iitm.ac.in/actlab) and [Healthcare Technology Innovation Centre](https://www.hticiitm.org/) at the [Indian Institute of Technology (IIT) Madras](https://www.iitm.ac.in/), Chennai, India. 

In both **in-vivo studies on humans using dual ultrasound probes** and **animal studies on pigs using invasive dual pressure catheters**, we consistently observed that the **repeatability of PWV deteriorates dramatically at mid-to-late systole**, often to the point where forward and backward traveling waveforms crossed each other. This corruption is widely attributed to **pulse wave reflections**, as also supported by literature.

**Eliminating reflection effects is therefore hypothesized critical for accurate PWV measurement, particularly when accounting for incremental changes in arterial stiffness (or PWV) across the cardiac cycle.**

This project introduces a **reflection-free PWV measurement method** leveraging the pulse trasnit time (PTT) between simulatenously acquired and processed forward traveling waves from the common carotid artery by applying **Wave Separation Analysis (WSA)** to improve PWV accuracy and precision.  The estimation of **carotid pulse pressure (PP)** from the refelction-free PWV using the Bramwell-Hill equation also provides additional credibility of the proposed method.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/intro.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Overview of the incremental nature of arterial stiffness due the the elastin to collagen load bearing shift and plane wave imaging as a means to record this non-linear behaviour.
</div>

---

## Why It Matters
- Wave reflections distort PWV measurement and mask incremental stiffness behavior during systole.
- Accurate assessment of PWV and PP from central arteries improves prediction of vascular aging and hypertension risk.
- Non-invasive solution validated with in-house developed **dual-channel ultrasound probe integrated with a tonometry sensor** for clinical translation.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/wave-reflection.png" title="Effect of Wave Reflections on Puse Waves" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Effect of arterial pulse wave reflections on simulatenously recorded pulse waves (seperated by 35 mm) from the left carotid artery.
</div>

---

## Key Contributions
- Developed a **reflection-compensated PWV measurement algorithm** using classical WSA (requires pressure or diameter waveform and flow) and [flow-independent methods](https://www.rahulmanoj.com/projects/model_based_WSA/) .
- Designed a **custom dual-channel ultrasond vascular probe with integrated tonometry (pressure) sensor** for simultaneous diameter waveform and tonometry waveform acquisition.
- Demonstrated significant improvement in PWV repeatability (CoV reduced from 25% to 10%) at systole on 60 participants.
- Verified agreement of reflection-free PWV with **theoretical Bramwell-Hill estimates**.
- Achieved **improved accuracy in carotid pulse pressure (PP)**, validated against tonometry-calibrated pressure, SpygmoCor (aortic pulse pressure), brachial pulse pressure from oscilometric devices. 
- Enabled measurement of **incremental arterial stiffness (PWV) changes across diastole and systole**.

---

## Methodology at a Glance
1. Acquire tonometry pressure and two diameter waveforms using a **custom vascular probe**.
2. Apply **Wave Separation Analysis (WSA)** to isolate forward traveling components from the diameter-calibrated to pressure waveforms.
3. Compute **pulse transit time** and derive PWV across multiple pressure levels.
4. Validate PWV and PP against reference methods, including Bramwell-Hill and clinical tonometry.

---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/method.png" title="WSA" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Wave Separation Analysis (WSA) for decomposing forward and backward travelling pulse waves.
</div>

---

## Experimental Setup
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/probe.png" title="dual-channel ultrasound probe integrated with a tonometry sensor" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/workflow.png" title="Data Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
The in-house dual-channel ultrasound probe integrated with a tonometry sensor used for pressure and diameter waveform acquisition. Overview of the data collected and process.
</div>

---

## Key Results
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/pwv_results.png" title="PWV Repeatability Improvement" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reflection_free_PWV/pp_results.png" title="PWV and Pulse Pressure Comparison" class="img-fluid rounded z-depth-1" %}
    </div>   
</div>

**Highlights:**
- **Repeatability improved:** CoV reduced from 25% to 10% at systole across the cardiac cycle.
- **Accurate PWV mapping:** Reflection removal prevented waveform crossing at mid-systole.
- **Incremental stiffness captured:** Enabled estimation of pressure-dependent PWV (ΔC) from diastole to systole.
- **Pulse pressure improved:** Central PP from carotid artery aligned with tonometry and SphygmoCor after WSA.
- **Statistical significance:** Bias reduction and stronger correlation with theoretical estimates.
- **Clinical impact:** Combined PWV and PP estimation enhances early cardiovascular risk detection.

---

## Conclusion
This reflection-free method provides reliable method of **local PWV, its changes within caric cycle and central pulse pressure**, improving intra-cycle analysis of arterial stiffness. The combined approach offers better diagnostic precision for vascular health assessment in non-invasive clinical setups.

---

### 📄 **Read Full Paper**
*Measurement of pressure dependent variations in local pulse wave velocity within a cardiac cycle from forward travelling pulse waves*  
Published in **Scientific Reports (Nature)**  
[Read Full Paper Here](https://doi.org/10.1038/s41598-025-87143-z)

---
