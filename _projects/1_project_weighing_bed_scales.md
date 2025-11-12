---
layout: page
title: From Flexible Sensors to Smart Beds — A Journey in Patient Weight Monitoring
description: How to measure the weight of a bed-ridden patient?
img: assets/img/project_1.PNG
importance: 6
category: work
related_publications: true
---

### Technical Keywords
Biomedical Instrumentation · Pressure Sensing · Pneumatics · Hydraulics · Control Systems · Data Acquisition · Patient Monitoring · ICU Devices · Translational Engineering

---

## Background

This project began during my master’s studies at **IIT Madras**, where I worked as a **Research Intern at the Healthcare Technology Innovation Centre (HTIC)** in collaboration with **Stryker Global Technology Centre**.  
The clinical problem was clear: **how can we monitor the weight and fluid balance of bedridden or critically ill patients continuously and safely, without lifting or moving them?**

In intensive care, subtle changes in patient weight (on the order of 1–2 kg) can reveal **fluid retention, dehydration, or renal complications** — key indicators of cardiac and kidney function. Traditional hospital systems rely on **load-cell–based bed scales**, which are accurate but mechanically complex, costly, and inconvenient for clinical workflow.

Our goal was to engineer a **modular, low-cost, bed-integrated system** that could provide periodic or continuous weight estimation using compact sensing modules — a solution that could scale from ICUs to home-care environments.

---

## Phase 1: Flexible Polymer Sensors — Early Prototypes (Stryker–HTIC Collaboration)

The journey began with **flexible piezo-resistive and piezo-capacitive polymer materials**.  
We experimented with **Velostat**, **Eeonyx conductive textiles**, and **CaplinQ films**, aiming to create a **conformable pressure mat** that could sense patient weight through surface resistance or capacitance changes.

**Working principle:**  
When force was applied, the polymer’s microstructure compressed, reducing its electrical resistance according to a non-linear relationship:  
\[
R = R_0 (1 - kP)^n
\]  
where \(R_0\) is baseline resistance, \(P\) is applied pressure, and \(k, n\) are material constants.

**Electronics and DAQ:**  
A Wheatstone bridge with a high-input-impedance instrumentation amplifier (INA122) captured voltage variations, which were digitized using an **NI USB-6002 DAQ (1 kS/s)**. The setup allowed for real-time monitoring and calibration.

**Challenges identified:**
- **Hysteresis** and **drift** due to viscoelastic relaxation of the polymer.  
- **Temperature sensitivity** and non-repeatability over multiple loading cycles.  
- **Edge effects** under distributed loads, leading to signal non-uniformity.  

While these materials were attractive for low-cost prototyping, they lacked the **mechanical stability and repeatability** required for long-term ICU monitoring.

> **Key insight:** the sensing medium must remain stable under static or quasi-static loads — pushing us to explore pneumatic solutions.

---

## Phase 2: Air-Filled Mattress System — Proof of Concept (IEEE MeMeA 2019)

To overcome the drift and non-linearity of polymer sensors, we turned to **air as the sensing medium**.  
The idea was simple: if a patient lies on a sealed air chamber, their body weight compresses the air, producing a measurable change in internal pressure.

**Principle:**  
At constant temperature, the relationship between pressure and volume follows **Boyle’s Law**:
\[
P_0 V_0 = P_1 V_1
\]  
The applied weight causes a pressure increase \( \Delta P = P_1 - P_0 \), which correlates linearly with the patient’s weight within the system’s elastic range.

**System design:**  
- Air-filled pillow (27 × 37 × 10 cm) and full mattress (190 × 70 × 6 cm)  
- Pressure transducer: **NXP MPXV5100DP**, differential type with built-in amplifier  
- Acquisition: **NI USB-6002 DAQ**, LabVIEW interface at 1 kS/s  
- Calibration: linear model \( \Delta P = aW + b \), where \(W\) = applied weight  

**Performance highlights:**
- Linear fit with **R² = 0.98 (pillow)** and **R² = 0.99 (mattress)**  
- Coefficient of variation (**CoV**) between **5–9 %** across load positions  
- Sensitivity increased with lower initial inflation pressure  

**Limitations:**
- Air leakage and temperature dependence caused baseline drift  
- Maintaining constant initial pressure proved challenging  
- Large compliance led to slower transient response  

Nonetheless, this design demonstrated — for the first time — that **continuous and non-invasive weight monitoring was possible using purely pneumatic sensing**, integrated directly into standard hospital beds.

> Published as *“Continuous Weight Monitoring System for ICU Beds Using Air-Filled Mattresses/Pads: A Proof of Concept” (IEEE MeMeA 2019).*

---

### Figure Placeholder
{% include figure.liquid path="assets/img/project_weighing_bed_air_schematic.jpg" title="Air-based weight sensing architecture showing air chamber, pressure transducer, amplifier, and DAQ interface" class="img-fluid rounded z-depth-1" %}
*Figure 1: Pneumatic sensing setup used in the MeMeA 2019 proof-of-concept study.*

---

## Phase 3: Liquid-Filled Active Feedback System — The Breakthrough (IEEE MeMeA 2024)

The next generation addressed air’s key limitations by introducing **pressurized liquid-filled elastic channels**.  
Liquids, being nearly incompressible, offered **high stability, negligible drift**, and **linear pressure–force characteristics**.

**Architecture:**  
A **hydraulic channel** was coupled to a **syringe-pump–based feedback mechanism**.  
The system actively maintained constant internal pressure. When load (patient weight) increased, the piston displaced fluid to restore equilibrium. The displacement was measured via a **linear potentiometer**, allowing indirect estimation of applied weight.

**Control design:**  
- Closed-loop feedback using a **PID controller** implemented in LabVIEW  
- Real-time control of syringe motor to maintain reference pressure  
- Feedback stability tuned for < 200 ms transient recovery  

**Calibration & results:**
- Linear correlation between piston displacement and weight with **R² = 0.993**  
- Operational range: 0–90 kg  
- Mean measurement error < 3 % in bench and human subject testing  
- Repeatability within ±1.5 % over 12 h continuous operation  

The system effectively merged **mechanical sensing and electronic control**, creating a **self-correcting, drift-free instrument**.  
It could detect subtle mechanical oscillations related to **cardiac and respiratory cycles**, opening the door to **balistocardiographic (BCG) monitoring** for cardiovascular assessment.

> Published as *“Periodic Weight Measurement for Bedridden Patients Using a Pressurized Liquid-Filled Channel System Integrated with Hospital Beds” (IEEE MeMeA 2024).*

---

### Figure Placeholder
{% include figure.liquid path="assets/img/project_weighing_bed_liquid_feedback.jpg" title="Liquid-filled feedback system with syringe pump, pressure transducer, and closed-loop controller" class="img-fluid rounded z-depth-1" %}
*Figure 2: Hydraulic active feedback prototype for continuous weight and vibration monitoring.*

---

## Design Evolution and Insights

This project evolved through **three sensing paradigms**, each revealing a unique engineering lesson:

| Phase | Sensing Medium | Key Advantage | Limitation | Outcome |
|-------|----------------|----------------|-------------|----------|
| I | Piezo-polymer | Flexible, low-cost | Drift, poor repeatability | Proof-of-feasibility |
| II | Air | Modular, non-invasive | Leakage, temperature dependence | Clinical proof-of-concept |
| III | Liquid | Stable, self-correcting | Slightly higher complexity | Clinically robust prototype |

Each iteration deepened the understanding of **how pressure, compliance, and control interact** in soft-sensing systems.  
Moving from resistive materials to pneumatic and finally hydraulic architectures mirrored a shift from **passive to active sensing**, where the system no longer just measured — it regulated itself.

---

## Translational Impact

The final liquid-based system transforms the hospital bed into a **smart sensing platform** capable of:
- **Continuous weight tracking** to monitor fluid balance and nutrition  
- **Real-time cardiovascular vibration sensing (BCG)**  
- **Potential integration with AI-based health analytics**

The design is **scalable, modular, and low-cost**, allowing retrofit into existing beds without structural changes — ideal for resource-limited healthcare environments.

This line of research represents a **fusion of instrumentation and clinical insight**, embodying the translational philosophy of HTIC: engineering solutions that directly address unmet clinical needs.

---

## Collaboration

This project was carried out at the **Healthcare Technology Innovation Centre (HTIC), IIT Madras**,  
in collaboration with **Stryker Global Technology Centre**.

---

## Related Publications

- [**Periodic Weight Measurement for Bedridden Patients Using a Pressurized Liquid-Filled Channel System Integrated with Hospital Beds**](https://ieeexplore.ieee.org/document/10596806), *IEEE MeMeA 2024.*  
- [**Continuous Weight Monitoring System for ICU Beds Using Air-Filled Mattresses/Pads: A Proof of Concept**](https://ieeexplore.ieee.org/document/8802148), *IEEE MeMeA 2019.*

---

## Gallery

<div class="row justify-content-sm-center">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/project_weighing_bed_0.jpg" title="Flexible piezo-polymer prototypes (HTIC–Stryker phase)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/project_weighing_bed_1.jpg" title="Air-based proof of concept (MeMeA 2019)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/project_weighing_bed_2.jpg" title="Liquid-filled feedback prototype (MeMeA 2024)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Evolution of the smart bed-integrated weighing system — from early polymer-based pressure mats to pneumatic and finally hydraulic active-feedback prototypes, bridging low-cost sensing and clinical precision.
</div>

{% endraw %}
