---
layout: page
title: Credibility Assessment of Models
description: How to build a model we can trust? Established regulatory-aligned verification and validation (V&V) frameworks (as per ASME V&V 40) with a focus on Identifiability, Uncertainity Quanification and Sensitivity Analysis. 
img: assets/img/projects/credibility_assessment/cover_1.jpg
importance: 2
category: Algorithm Devlopment & Modelling
---
This project is part of my post-doctoral research activities with the [Division of Biomechanics](https://www.ntnu.edu/biomechanics) at [Norwegian University of Science and Technology (NTNU)](https://www.ntnu.edu/), Trondheim, Norway. I am planning to write long format essay or white paper on "How to build models that we can trust?" 

The following is the summary for a quick reference. I am also drafting a manuscript, whcih will as act as guideline and an example on how to use the [ASME V&V 40-2018](https://www.asme.org/codes-standards/find-codes-standards/assessing-credibility-of-computational-modeling-through-verification-and-validation-application-to-medical-devices - Assessing Credibility of Computational Modeling through Verification and Validation: Application to Medical Devices for the compuational model that you are developing. 

More details to be updated soon. 

## **Introduction**
This page documents a complete guide on **how to build a computational model we can trust**, using an evidence-based, regulatory-aligned approach grounded in **ASME V&V 40 guidelines**. The goal is to establish a structured 18-step workflow that ensures credibility across the model lifecycle, from initial context definition to final verification and validation.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/credibility_assessment/cover_1.jpg" title="Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
How to build a model that we can trust?
</div>

---

## **Workflow Overview**

### **Step 1: Question of Interest (QoI)**
*What do we want to know?*
- Define the primary scientific or clinical question.
- Ensure clarity in the scope and measurable objectives.

---

### **Step 2: Model Definition**
- Mathematical formulation:
    - Equations
    - States
    - Parameters
- Explicitly state assumptions supporting model structure.

---

### **Step 3: Structural Identifiability**
- Can model parameters be uniquely estimated assuming **ideal, noise-free data**?

---

### **Step 4: Observability**
- Are model outputs inferable from measurable signals/outputs?

---

### **Step 5: Controllability**
- Can system outputs be influenced by altering inputs (e.g., preload, afterload)?
- Critical for **drug/therapy response simulation** and **feedback control models**.

---

### **Step 6: Screening Sensitivity Analysis**
- Initial sensitivity check to identify **which parameters matter**.

---

### **Step 7: Practical Identifiability**
- Perform **profile likelihood analysis** incorporating real experimental/clinical data and noise constraints.

---

### **Step 8: Context of Use (CoU)**
- Define intended application and decision supported by the model.

---

### **Step 9: Risk Analysis**
- Risk = **model influence × consequence of wrong decision**
- Apply ASME V&V 40 risk-based rigor for downstream steps.

---

### **Step 10: Parameter Estimation**
- Employ robust estimation techniques validated for the given data and noise level.

---

### **Step 11: Hyperparameter Tuning**
- Optimize tuning parameters for model selection or machine learning-based sub-models.

---

### **Step 12: Uncertainty Quantification (UQ)**
- Quantify aleatory & epistemic uncertainties:
    - Monte Carlo
    - Polynomial Chaos
    - Bayesian Inference

---

### **Step 13: Global Sensitivity Analysis**
- Identify global influencers using:
    - Sobol indices
    - Morris method
    - Variance decomposition

---

### **Step 14: Verification**
- Ensure:
    - Correctness of code
    - Numerical accuracy
    - Unit & integration tests

---

### **Step 15: Validation**
- Compare model predictions to **independent validation data**:
    - Use quantitative metrics & visual analysis
    - Assess prediction intervals

---

### **Step 16: Applicability**
- Check:
    - Validation-Context overlap
    - Relevance of predictions to original QoI

---

### **Step 17: Explainability**
- Ensure transparency of:
    - Parameter influence
    - Model decision pathways
- Use interpretable representations for regulatory and scientific acceptance.

---

### **Step 18: Reporting**
- Provide:
    - Complete traceability of assumptions
    - Verification, Validation, UQ, SA evidence
    - A *Credibility Matrix* summarizing strength-of-evidence vs risk

---

## **Best Practices**
- Validate QoI alignment before investing in complexity.
- Use **identifiability checks before parameter estimation**.
- Always report **Credibility Matrix** with context-specific rigor.
- Align every step with **regulatory science recommendations**.
