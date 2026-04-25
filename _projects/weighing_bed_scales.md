---
layout: page
title: Bed-Integrated Body Weight Measurement
description: How to measure the weight of a bed-ridden patient? Designed and built a functional prototype of a modular and automatic time scheduled body weight measurement system for bedridden patients.
img: assets/img/projects/weighing_bed_scales/cover_1.png
importance: 6
category: Electro-Mechanical Systems & Control
related_publications: true
---
## Project Overview
This project was undertaken during my part-time employement as a research engineer at [Healthcare Technology Innovation Centre](https://www.hticiitm.org/) at the [Indian Institute of Technology (IIT) Madras](https://www.iitm.ac.in/), Chennai, India, in collaboration with **Stryker Global Technology Centre**, Gurgaon, India to solve a critical ICU challenge:  

> **How can we monitor the weight and fluid balance of critically ill, bedridden patients safely and continuously, without lifting or moving them?**

Critical care patients often need **tight control of body fluid levels**, where even **1–2 kg variations in weight** indicate fluid overload, renal complications, or cardiac decompensation. Conventional weighing systems — such as gauge-based load cells integrated into hospital beds — are **accurate but expensive and non-retrofittable**, while manual methods are impractical and unsafe in ICU workflows.

We propose **a modular sensing system that integrates with existing beds**, enabling automated or periodic weight measurement without patient repositioning. Three successive design approaches — **flexible polymer sensing, air-filled mattresses, and pressurized liquid channels with active feedback** — were developed to overcome the technical challenges of drift, stability, and accuracy.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/weighing_bed_scales/concept.png" title="Clinical Motivation: Traditionally ICU weight measurement requires risky patient lifting or replacing beds with cost-prohibitive integrated load cells." class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="caption">
Overview of the concept
</div>
</div>

---
## Why It Matters

**Body weight is a vital indicator of patient health and fluid balance in critical care.** Approximately **60% of body mass is water**, and a fluid imbalance of just **5–10% can lead to severe dehydration or edema**, impacting hemodynamic stability and increasing mortality risk [1][2].

**Clinical Importance of Weight Monitoring:**
- **Fluid Management:** Guides dialysis prescription, diuretic therapy, and vasopressor titration [3][4].
- **Early Risk Detection:** Prevents pulmonary edema and congestive heart failure [5].
- **Drug and Nutritional Dosing:** Accurate weight ensures correct dosing and prevents malnutrition [6].
- **Improved Outcomes in Elderly & Renal Patients:** Frequent weight checks reduce treatment failures and hospital readmissions.

---

**Challenges in Current Practice:**
- Use of **platform-based or integrated bed scales** requires **repositioning critically ill patients**, which is:
  - Time-consuming
  - Risky for patients and staff
- Current integrated load-cell beds are **high-cost**, **structurally complex**, and **not deployable at scale** in resource-limited ICUs [7][8].

**Impact of a Scalable Solution:**
Our **retrofit-ready modular system**:
- Eliminates lifting or transferring patients.
- Enables **automatic, real-time weight trending**.
- Reduces cost barriers and integrates easily with hospital workflows.

---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/weighing_bed_scales/current_practice.png" title="Current methods vs proposed bed-integrated solution for continuous monitoring" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="caption">
Various currently available solutions in the market.
</div>
</div>

---

## Specific Objectives
1. **Create a modular, low-cost, bed-integrated sensing platform** for accurate, periodic weight monitoring.
2. Achieve **±1–2% error margin** across 0–90 kg operating range.
3. Ensure **stability under sustained static load** over 12+ hours with minimal drift.
4. Validate design through **bench tests, calibration models, and proof-of-concept clinical scenarios**.

---

## Design Evolution: Three Phases

---

### **Phase I: Flexible Polymer-Based Mats**
- **Principle:** Change in polymer resistance under distributed pressure:
  \[
  R = R_0 (1 - kP)^n
  \]
- **Materials Tested:** Velostat, Eeonyx conductive fabrics, CaplinQ films.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/polymers_list.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Conductive polymers (piezo resistive) idetified from the market.
</div>

- **Electronics:** Wheatstone bridge → INA122 → NI USB-6002 DAQ.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/polymers_setup.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Experiment setup of conductive polymers sandwiched between copper plates for sensor characterization
</div>

It was found that lower weight values take a long time to settle compared to higher weight values, and different materials have a different range of change of resistance. Settling time is on average around 1-2 min, the long settling and rise time may be due to the cushioning nature of the material. A dynamic range (linear) of 0-2 Kg, was observed for the given specimen area and all materials exhibited hysteresis. We can arrange the materials in the following order (most repeatable to least repeatable) based on their repeatability characteristics as Velostat > LS2 > LS3 > Sensor Film Kit > Eeonyx Fabric. 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/sample_resulst_phase_1.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Experiment results for one of the polymers. 
</div>


From the device characterization experiments, Velostat and CaplinQ materials seem to be ideal choices to create a pressure sensor.
But given the large settling time, the piezoresistive materials cannot be used for reliable weight measurement. At most be best utilized to find the areas of contact and regions of high pressures.

Additionaly, we tried to understand how the  area of the electrode is affecting the sensitivity of the sensor and would additional layers of the polymer improve the sensitivity. 

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/area.png" title="dual-channel ultrasound probe integrated with a tonometry sensor" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/layer.png" title="Data Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Effect of contact area of the sensor electrode and effect of multiple layers of the polymer.
</div>

There is a requirement of a very large number (>700) of sensor cells of approx. 4x4 cm2 to span the entire bed area. The linear region of operation is very limited (1-3 Kg for 7x7 cm2), for most of the materials, except Bebop Sensors. The repeatability and accuracy are a concern for measuring weights in 100g – 500g accuracy. But this method could be used to generate an approx. pressure map and this information can be used for sensor fusion with other methods. This turns out to be not an ideal methodology to meet the objective. Hence other non-strain gauge techniques are explored.

- **Limitations:**
  - Strong **hysteresis** and **creep** effect
  - Highly sensitive to **temperature and humidity**
- **Outcome:** Feasible for event detection but not continuous monitoring.

---

### **Phase II: Air-Filled Mattresses (Pneumatic Principle)**
The simplest fluid-based solution is to use an air-filled pillow/mattress attached to a pressure sensor so that the entire weight of the patient is transmitted to fluid pressure, that can be measured directly, although all the disadvantages allied with any fluid-based system like leakage etc. are present hear as well.
- **Theory:** Boyle’s Law:
  \[
  P_0 V_0 = P_1 V_1
  \]
- **Architecture:** Air-pillow and mattress → MPXV5100DP sensor → DAQ.
- **Performance:**
  - Linear correlation: **R² = 0.98 (pillow), 0.99 (mattress)**
  - CV: **5–9%**
- **Challenges:** Air leakage, slow transient response, thermal drift.

Considering average values (w.r.t locations), there is a linear relationship between pressure difference and weights (Figure 3.9). For lower weight values, location did not have any effect on the pressure difference values (Figure 3.10). It was observed that for higher weights, there is higher CoV (coefficient of variance) (varies between 4-9%) for the entire range of weights. For a given weight, there is little variation (CoV 5%) due to the location of the weight on the mattress (provided entire weight acts at that location). If the weights are distributed at different locations, the average pressure values are lower compared to undistributed loads. The CoV of pressure values in the case of distributed loads is around 5% 

- **Published As:**  
  *“Continuous Weight Monitoring System for ICU Beds Using Air-Filled Mattresses/Pads: A Proof of Concept”*  
  *(IEEE MeMeA 2019)*

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/air_matress.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Experiment setup with air-filled mattress
</div>

Air filled pillow/mattress seemed to be the cheapest alternative but turned out that lot of practical difficulties makes it a harder solution to implement. Leakage of air is a major issue, more effect in big mattress compared to air pillow, initial pressure keeps changing making repeatability studies difficult. Outside temperature also influences the rate at which air leaks. Mattress is not constrained – free to move in all directions. 
Hence, a liquid-filled elastic tubes where identified as a replacement of the air-filled pillow/mattress.

---

### **Phase III: Pressurized Liquid-Filled Channels with Active Control**
- **Concept:** Incompressible fluid ensures high stability; closed-loop control eliminates drift. 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/liquid_channels.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Graphic Representation of the concept of fluid filled elastic tubes for weight measurement
</div>

- **Setup:**
  - **Elastic liquid-filled channel** + **syringe pump with PID control**
  - Measured displacement correlates with load

A single closed loop U shaped tube (U-tube) system with pressure sensor & a stepper motor based linearly actuated syringe pump attached at the intersection, with both ends of U-tube closed with ball valves (or combination of NRV & Solenoid valves). The entire tubes (sense area) are sandwiched between two thick acrylic sheet providing uniform loading and uniform volume change. By controlled volume change of the syringe, the pressure of the system could be regulated to any set valve, thus enabling a closed loop control system. The amount of volume change that was required to bring the system to a set pressure becomes an estimate of the load (or weight) that was applied as an input to the system. The volume change is directly proportional to the linear displacement of the syringe piston, which in turn is directly proportional to the angular displacement of the stepper motor. A calibration chart or a look-up table is prepared for Control Variable vs. Weight for a given set pressure.
A closed loop control system will make the system more reliable and takes care of many irregularities and provides more control in optimising the system for its maximum performance. 

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/setup_1.png" title="dual-channel ultrasound probe integrated with a tonometry sensor" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/setup_2.png" title="Data Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Experiment setup with control system.
</div>


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/bed.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Experiment setup with liquid-filled mattress, and weight distrubution. 
</div>

#### **Operational Pressure Optimization**
A sensitivity analysis was performed by varying **internal set pressure from 50–300 mmHg** under test loads. Results:
- Sensitivity increased linearly up to ~50 mmHg, after which improvement plateaued.
- Optimal trade-off between responsiveness and noise obtained at:
  \[
  \boxed{\text{50 mmHg internal pressure}}
  \]
- Corresponding sensitivity: **1.7 mmHg/kg**, translating to **0.23 mm/kg (or ±0.7% error per load step)**.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/results_1.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Sensitivity Analysis
</div>

#### **Calibration Curve**
A polynomial fit between **piston displacement** and applied load derived from multiple trials:
\[
\text{Applied Load (kg)} = -0.0215x^2 + 2.7702x,\quad R^2 = 0.993
\]
where \( x \) = plunger travel (mm).  
- Operational range: **0–90 kg**
- Emulated ICU patient loading scenario
- Achieved near-perfect correlation with minimal bias errors.

#### **Accuracy and Repeatability**
- **Error Distribution:**  
  - Maximum error: **<3% at 90 kg extreme**  
  - Minimum error: **~0.5% near mid-range (45–60 kg)**  
- **Repeatability Tests:**  
  - Coefficient of Variation (CoV): **≤4% for full range (45–90 kg)**  
- Limiting factor: Syringe volume (150 mL) → capacity capped at 90 kg.

### **Practical Scenario: In-Vitro Experiment**
- Objective: Detect incremental weight changes simulating **fluid gain in ICU patients**.
- Setup: Step-wise addition/removal of weights (0.5, 1, 2 kg) on a **dry weight baseline (~61 kg)**.
- Achieved:
  - **Emulated patient weight trending with <0.4% error per increment**
  - Effective resolution: **500 g**  

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/weighing_bed_scales/results_2.png" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Key results 
</div>

#### **Key Performance Highlights**
- **Pressure Stability:** PID loop recovers within <200 ms for sudden load shifts.
- **Drift:** Negligible over 12 hours at static load.
- **Bonus Capability:** High-frequency oscillations captured → potential for **BCG signal extraction** (respiration & cardiac micro-movements).

- **Published As:**  
  *“Periodic Weight Measurement for Bedridden Patients Using a Pressurized Liquid-Filled Channel System Integrated with Hospital Beds”*  
  *(IEEE MeMeA 2024)*



---

## Comparative Design Summary

| **Phase** | **Medium**   | **Strength**               | **Limitation**           |
|-----------|-------------|---------------------------|---------------------------|
| I         | Piezo-Polymers | Flexible, low-cost         | Drift, poor stability    |
| II        | Air-Bladder    | Modular, scalable          | Leakage, temperature drift|
| III       | Liquid + PID    | High accuracy, stable, BCG | Higher complexity         |

---

## Impact and Future Scope
- Converts ICU beds into **smart platforms** capable of:
  - Continuous **weight trending**
  - **Vital sign extraction** using BCG micro-signals
- **Planned Features:**
  - Miniaturized pumping assembly
  - Clinical trials for automatic fluid management
  - Integration with **AI-driven hemodynamic risk analytics**

---

## Related Publications
- [Continuous Weight Monitoring Using Air-Filled Pads – IEEE MeMeA 2019](https://ieeexplore.ieee.org/document/8802148)
- [Pressurized Liquid Channel Bed-Integrated Weight System – IEEE MeMeA 2024](https://ieeexplore.ieee.org/document/10596806)

---

## References
[1] A. Maher, P. Sankar, et al., “Physiology, Blood Plasma,” Treasure Island (FL), 2024.  
[2] H. Kataoka, et al., “Cumulative Changes in Weight in ICU and Dialysis Patients,” *ESC Heart Fail*, 2015.  
[3] M. Hiroki, K. Shaw, et al., “Validity of Clinical Signs for Dehydration,” *Pediatrics*, 1999.  
[4] G.M. Eastwood et al., “Intravenous Fluid in ICU Patients,” *Nurs Health Sci*, 2018.  
[5] A. Shepherd, “Measuring and Managing Fluid Balance,” *Nursing Times*, 2011.  
[6] J. Chen et al., “Weight Recording and Antibiotics Dosing,” *BMJ Open*, 2015.  
[7] A. Mahre et al., “Cost Barriers in Load Cell Beds,” *Assistive Technology*, 2016.  
[8] M. Haneen et al., “Static Loading on Force Mats,” *J Meas Sci.*, 2020.  

---
