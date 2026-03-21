---
layout: page
title: Bed-Integrated Body Weight Measurement
description: How to measure the weight of a bed-ridden patient? Designed and built a functional prototype of a modular and automatic time scheduled body weight measurement system for bedridden patients.
img: assets/img/projects/weighing_bed_scales/cover_1.png
importance: 6
category: Electro-Mechanical Systems & Control
related_publications: true
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bed-Integrated Weight Monitoring System</title>

  <!-- MathJax for equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      margin: 40px;
      color: #222;
    }
    h1, h2, h3 {
      color: #003366;
    }
    hr {
      margin: 30px 0;
    }
    .keywords {
      font-style: italic;
      color: #444;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px 10px;
      text-align: left;
    }
    th {
      background: #f2f2f2;
    }
    .figure {
      text-align: center;
      margin: 30px 0;
    }
    .figure img {
      max-width: 100%;
      border-radius: 6px;
    }
    .caption {
      font-size: 0.9em;
      color: #555;
      margin-top: 8px;
    }
    blockquote {
      background: #f8f9fa;
      border-left: 4px solid #003366;
      padding: 10px 15px;
      margin: 20px 0;
    }
  </style>
</head>

<body>

<h2>Technical Keywords</h2>
<p class="keywords">
Biomedical Instrumentation · Pressure Sensing · Pneumatics · Hydraulics · Control Systems ·
Data Acquisition · Patient Monitoring · ICU Devices · Translational Engineering
</p>

<hr>

<h2>Background</h2>
<p>
This project began during my master’s studies at <strong>IIT Madras</strong>, where I worked as a
<strong>Research Intern at the Healthcare Technology Innovation Centre (HTIC)</strong> in collaboration
with <strong>Stryker Global Technology Centre</strong>.
</p>
<p>
The clinical problem was clear: <strong>how can we monitor the weight and fluid balance of bedridden
or critically ill patients continuously and safely, without lifting or moving them?</strong>
</p>
<p>
In intensive care, subtle changes in patient weight (on the order of 1–2 kg) can reveal
<strong>fluid retention, dehydration, or renal complications</strong>.
Traditional systems rely on <strong>load-cell–based bed scales</strong>, which are accurate but
mechanically complex and costly.
</p>
<p>
Our goal was to engineer a <strong>modular, low-cost, bed-integrated system</strong> capable of periodic
or continuous weight estimation using compact sensing modules.
</p>

<hr>

<h2>Phase 1: Flexible Polymer Sensors — Early Prototypes</h2>
<p>
The journey began with <strong>flexible piezo-resistive and piezo-capacitive polymer materials</strong>.
We experimented with <strong>Velostat</strong>, <strong>Eeonyx conductive textiles</strong>, and
<strong>CaplinQ films</strong>, aiming to create a <strong>conformable pressure mat</strong>.
</p>

<h3>Working principle</h3>
<p>
When force was applied, the polymer’s microstructure compressed, reducing its electrical resistance:
</p>

<p style="text-align:center;">
\( R = R_0 (1 - kP)^n \)
</p>

<p>
where \(R_0\) is baseline resistance, \(P\) is applied pressure, and \(k, n\) are material constants.
</p>

<h3>Electronics and DAQ</h3>
<p>
A Wheatstone bridge with an instrumentation amplifier (INA122) captured voltage variations, digitized
using an <strong>NI USB-6002 DAQ (1 kS/s)</strong>.
</p>

<h3>Challenges identified</h3>
<ul>
  <li><strong>Hysteresis</strong> and <strong>drift</strong> due to viscoelastic relaxation.</li>
  <li><strong>Temperature sensitivity</strong> and poor repeatability.</li>
  <li><strong>Edge effects</strong> under distributed loads.</li>
</ul>

<blockquote>
<strong>Key insight:</strong> the sensing medium must remain stable under static or quasi-static loads.
</blockquote>

<hr>

<h2>Phase 2: Air-Filled Mattress System — Proof of Concept</h2>
<p>
To overcome drift and non-linearity, we turned to <strong>air as the sensing medium</strong>.
</p>

<h3>Principle</h3>
<p>
At constant temperature, the relationship follows <strong>Boyle’s Law</strong>:
</p>

<p style="text-align:center;">
\( P_0 V_0 = P_1 V_1 \)
</p>

<p>
The applied weight causes a pressure increase \( \Delta P \) that correlates with patient weight.
</p>

<h3>System design</h3>
<ul>
  <li>Air-filled pillow and full mattress</li>
  <li>Pressure transducer: <strong>NXP MPXV5100DP</strong></li>
  <li>Acquisition: <strong>NI USB-6002 DAQ</strong>, LabVIEW at 1 kS/s</li>
  <li>Calibration: \( \Delta P = aW + b \)</li>
</ul>

<h3>Performance highlights</h3>
<ul>
  <li>Linear fit: <strong>R² = 0.98</strong> (pillow), <strong>R² = 0.99</strong> (mattress)</li>
  <li>Coefficient of variation: <strong>5–9%</strong></li>
  <li>Sensitivity increased at lower inflation pressure</li>
</ul>

<h3>Limitations</h3>
<ul>
  <li>Air leakage and temperature dependence</li>
  <li>Baseline drift</li>
  <li>Slower transient response</li>
</ul>

<blockquote>
Published as <em>“Continuous Weight Monitoring System for ICU Beds Using Air-Filled Mattresses/Pads:
A Proof of Concept” (IEEE MeMeA 2019)</em>.
</blockquote>

<div class="figure">
  <!-- Replace src with your real image path -->
  <img src="assets/img/project_weighing_bed_air_schematic.jpg"
       alt="Air-based weight sensing architecture">
  <div class="caption">
    Figure 1: Pneumatic sensing setup used in the MeMeA 2019 proof-of-concept study.
  </div>
</div>

<hr>

<h2>Phase 3: Liquid-Filled Active Feedback System — The Breakthrough</h2>
<p>
The next generation introduced <strong>pressurized liquid-filled elastic channels</strong>.
Liquids offered <strong>high stability, negligible drift</strong>, and linear pressure–force behavior.
</p>

<h3>Architecture</h3>
<p>
A <strong>hydraulic channel</strong> was coupled to a <strong>syringe-pump–based feedback mechanism</strong>.
Piston displacement was measured using a <strong>linear potentiometer</strong>.
</p>

<h3>Control design</h3>
<ul>
  <li>Closed-loop <strong>PID controller</strong> in LabVIEW</li>
  <li>Real-time pressure regulation</li>
  <li>Transient recovery &lt; 200 ms</li>
</ul>

<h3>Calibration & results</h3>
<ul>
  <li><strong>R² = 0.993</strong> between displacement and weight</li>
  <li>Operational range: <strong>0–90 kg</strong></li>
  <li>Mean error &lt; <strong>3%</strong></li>
  <li>Repeatability within <strong>±1.5%</strong> over 12 h</li>
</ul>

<p>
The system enabled detection of subtle vibrations related to
<strong>cardiac and respiratory cycles</strong>, opening pathways to
<strong>balistocardiographic (BCG) monitoring</strong>.
</p>

<blockquote>
Published as <em>“Periodic Weight Measurement for Bedridden Patients Using a Pressurized Liquid-Filled
Channel System Integrated with Hospital Beds” (IEEE MeMeA 2024)</em>.
</blockquote>

<div class="figure">
  <img src="assets/img/project_weighing_bed_liquid_feedback.jpg"
       alt="Liquid-filled feedback system">
  <div class="caption">
    Figure 2: Hydraulic active feedback prototype for continuous weight and vibration monitoring.
  </div>
</div>

<hr>

<h2>Design Evolution and Insights</h2>

<table>
  <thead>
    <tr>
      <th>Phase</th>
      <th>Sensing Medium</th>
      <th>Key Advantage</th>
      <th>Limitation</th>
      <th>Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>I</td>
      <td>Piezo-polymer</td>
      <td>Flexible, low-cost</td>
      <td>Drift, poor repeatability</td>
      <td>Proof-of-feasibility</td>
    </tr>
    <tr>
      <td>II</td>
      <td>Air</td>
      <td>Modular, non-invasive</td>
      <td>Leakage, temperature dependence</td>
      <td>Clinical proof-of-concept</td>
    </tr>
    <tr>
      <td>III</td>
      <td>Liquid</td>
      <td>Stable, self-correcting</td>
      <td>Higher complexity</td>
      <td>Clinically robust prototype</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Translational Impact</h2>
<p>
The final liquid-based system transforms the hospital bed into a
<strong>smart sensing platform</strong> capable of:
</p>
<ul>
  <li>Continuous weight tracking</li>
  <li>Real-time cardiovascular vibration sensing (BCG)</li>
  <li>Integration with AI-based health analytics</li>
</ul>

<p>
The design is <strong>scalable, modular, and low-cost</strong>, enabling retrofit into existing beds.
</p>

<hr>

<h2>Collaboration</h2>
<p>
This project was carried out at the <strong>Healthcare Technology Innovation Centre (HTIC), IIT Madras</strong>,
in collaboration with <strong>Stryker Global Technology Centre</strong>.
</p>

<hr>

<h2>Related Publications</h2>
<ul>
  <li>
    <a href="https://ieeexplore.ieee.org/document/10596806" target="_blank">
      Periodic Weight Measurement for Bedridden Patients Using a Pressurized Liquid-Filled Channel System
      Integrated with Hospital Beds
    </a>, <em>IEEE MeMeA 2024</em>.
  </li>
  <li>
    <a href="https://ieeexplore.ieee.org/document/8802148" target="_blank">
      Continuous Weight Monitoring System for ICU Beds Using Air-Filled Mattresses/Pads:
      A Proof of Concept
    </a>, <em>IEEE MeMeA 2019</em>.
  </li>
</ul>

<hr>

<h2>Gallery</h2>

<div style="display:flex; gap:20px; flex-wrap:wrap;">
  <div class="figure" style="flex:1;">
    <img src="assets/img/project_weighing_bed_0.jpg"
         alt="Flexible piezo-polymer prototypes">
  </div>
  <div class="figure" style="flex:1;">
    <img src="assets/img/project_weighing_bed_1.jpg"
         alt="Air-based proof of concept">
  </div>
  <div class="figure" style="flex:1;">
    <img src="assets/img/project_weighing_bed_2.jpg"
         alt="Liquid-filled feedback prototype">
  </div>
</div>

<div class="caption">
Evolution of the smart bed-integrated weighing system — from early polymer-based pressure mats to
pneumatic and finally hydraulic active-feedback prototypes.
</div>

</body>
</html>

