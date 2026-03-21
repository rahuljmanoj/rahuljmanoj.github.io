// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Here you will find information regarding all my publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "My works span algorithm development from physiological signals, physics/data-driven physiology modelling, electrnoic system design, instrumentation, building electro-mechanical systems, and cybernetics/control systems. I am an electronics hobbyist with projects in PCB designing, IoT, Robotics, Embedded Systems, Analog Electronics and have a special interest in Personal Finance Management.  (The detailed project pages are still under development!)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-patents",
          title: "patents",
          description: "Here you will find information regarding all my patented technologies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "This is a chronological archive of invited talks, presentations, and workshops delivered across academia, conferences, and outreach activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Here you will find all past updates and announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/index.html";
          },
        },{id: "post-what-if-we-could-stop-heart-failure-before-it-starts",
        
          title: "What if we could stop heart failure—before it starts?",
        
        description: "Your digital twin that listens to your heart—when echo alone can’t",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/what-if-we-can-stop-hf-before-it-starts/";
          
        },
      },{id: "post-how-not-to-die-young-lessons-from-cardiovascular-engineering",
        
          title: "How not to die Young? Lessons from Cardiovascular Engineering",
        
        description: "You are as old as your arteries really are!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/how-not-to-die-young/";
          
        },
      },{id: "post-understanding-avr-fuse-bits",
        
          title: "Understanding AVR Fuse Bits",
        
        description: "A practical, clear guide to AVR fuse bits, their purpose, and how to configure them safely with AVRDUDE.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/avr-fuse-bits/";
          
        },
      },{id: "post-using-avrdude-to-program-your-avr-microcontrollers",
        
          title: "Using AVRDUDE to Program Your AVR Microcontrollers",
        
        description: "A practical ready-reference for using AVRDUDE to upload, download, and configure your Atmel AVR microcontrollers with clear examples.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/avrdude/";
          
        },
      },{id: "post-understanding-average-power-rms-power-and-ac-power",
        
          title: "Understanding Average Power, RMS Power, and AC Power",
        
        description: "A clear explanation of the differences between average power, RMS power, and AC power for beginners in electrical engineering and electronics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/ac-power-rms-power/";
          
        },
      },{id: "post-introduction-to-microcontrollers-the-brains-behind-everyday-electronics",
        
          title: "Introduction to Microcontrollers - The Brains Behind Everyday Electronics",
        
        description: "You might already be familiar with the world-famous, revolutionary semiconductor device called the transistor. But have you ever wondered what happens when thousands of transistors come together in one chip?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/intro-to-mcu/";
          
        },
      },{id: "post-why-electricity-is-generated-as-sinusoids",
        
          title: "Why Electricity is Generated as Sinusoids?",
        
        description: "Have you ever wondered why we generate electricity as sinusoidal waveforms, Why not triangular, square waveform ?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/sinusoids/";
          
        },
      },{id: "post-how-to-make-pcbs-in-lab-without-fabrication",
        
          title: "How to Make PCBs in Lab Without Fabrication ?",
        
        description: "Step-by-step guide to making your own PCBs at home or lab using toner transfer and safe etching methods",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/make-pcbs-at-lab/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-won-the-runner-39-s-up-prize-for-my-tedx-style-reaserch-talk-at-the-electrical-engineering-research-scholars-symposium-2024-held-at-iit-madras-india",
          title: 'Won the Runner&amp;#39;s Up Prize for my TEDx-style Reaserch Talk at the Electrical...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-1st-patent-granted-on-cuffless-and-calibartion-free-bp-meaqsurement-system-amp-methods",
          title: '1st Patent Granted on Cuffless and Calibartion-Free BP Meaqsurement System &amp;amp; Methods',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-defended-my-phd-thesis-and-graduated-from-indian-institute-of-technology-iit-madras-for-dual-degree-m-s-and-ph-d",
          title: 'Defended my PhD Thesis and graduated from Indian Institute of Technology (IIT) Madras...',
          description: "",
          section: "News",},{id: "news-joined-as-a-postdoctoral-reserach-fellow-with-the-division-of-biomechanics-department-of-structral-engineering-at-ntnu-norway",
          title: 'Joined as a Postdoctoral Reserach Fellow with the Division of Biomechanics, Department of...',
          description: "",
          section: "News",},{id: "news-featured-in-swayam-prabha-yt-channel-ch-32-iit-madras-bridge-courses-impact-series-on-discussing-the-cardiovascular-initiatives-at-htic-iit-madras",
          title: 'Featured in Swayam Prabha YT Channel CH 32 IIT Madras Bridge Courses, Impact...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-selected-for-a-2-year-term-2025-2026-at-the-young-scientists-committe-of-the-vph-institute-check-out-the-links-for-more-details",
          title: 'Selected for a 2-year term (2025-2026) at the Young Scientists Committe of the...',
          description: "",
          section: "News",},{id: "news-participated-in-the-1st-eu-horizon-vital-project-training-school-at-tu-delft-from-march-18-21-2025",
          title: 'Participated in the 1st EU Horizon VITAL Project training school at TU Delft...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-won-the-popular-prize-for-the-international-modelling-challenge-digital-twin-builder-for-heath-incubator-by-isi-health-ku-leuven-belgium",
          title: 'Won the Popular Prize for the International Modelling Challenge:Digital Twin Builder for Heath...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-cw-doppler-flow-integration-with-artsens",
          title: 'CW Doppler Flow Integration with ARTSENS',
          description: "Integrated a continuous wave Doppler flow velocity measurement with the in-house developed ultrasound-based image-free cardiovascular screening tool (ARTSENS).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CW_doppler_ARTSENS/";
            },},{id: "projects-imu-powered-hand-gesture-control",
          title: 'IMU-Powered Hand Gesture Control',
          description: "Based on Inertial Measurement Unit and Arduino",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IMU_hand_gesture_control/";
            },},{id: "projects-digital-twins-for-heart-faliure-diagnosis",
          title: 'Digital Twins for Heart Faliure Diagnosis',
          description: "Modelling pipeline integrating echocardiography, shear‑wave elastography, and hybrid physics/data‑driven models, delivering a validated decision‑support tool for early detection of heart‑failure pathology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LPM_Digital_Twins_HFpEF/";
            },},{id: "projects-pulse-wave-analysis-carotid-aorta",
          title: 'Pulse Wave Analysis (Carotid/Aorta)',
          description: "A set of algorithms for detailed feature detection of carotid and aortic pulse waveforms - idetifying fiducial points in upstroke, down stroke of pulse waveform from the derivative signals, dicrotic notch, Augmentation Index, pulse contour markers (a,b,c,d,e).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PWA/";
            },},{id: "projects-plane-wave-imaging-with-artsens",
          title: 'Plane Wave Imaging with ARTSENS',
          description: "Engineered a 4-channel custom made single element ultrasound probe in pulse echo mode for high frame rate plane wave imaging to capture the speed of travelling arterial pulse waves.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PWI_ARTSENS_Quad/";
            },},{id: "projects-high-throughput-ultrasound-data-framework",
          title: 'High Throughput Ultrasound Data Framework',
          description: "A data structure framework designed to handle high frame rate ultrasound RF data from multi-channel acquisition systems, providing optimized binary file storage and reliable reconstruction for downstream signal processing. Codes and examples on how to read and write binary files.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RF_data_binary_files/";
            },},{id: "projects-build-your-own-usbasp-for-avr-mcu",
          title: 'Build your own USBasp for AVR MCU',
          description: "Builing a USBasp from scratch - from PCB design to Fabrication to Flashing an MCU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/USBasp/";
            },},{id: "projects-ambulatory-monitoring-of-arterial-stiffness",
          title: 'Ambulatory Monitoring of Arterial Stiffness',
          description: "On the go prototypes for self monitoring of day-to-day variations in vascular stiffness from the common carotid artery using photoplethysmography (PPG), acoustic photoplethysmography (aPPG) and accelerometers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ambulatory_stiffness/";
            },},{id: "projects-tele-operated-path-tracking-robots",
          title: 'Tele-operated Path Tracking Robots',
          description: "Tele-operated control system of wheeled Mobile Robot, which tracks the path generated with the end effector of a 3DOF robot manipulator in real time uisng PID controls",
          section: "Projects",handler: () => {
              window.location.href = "/projects/btech_major_project/";
            },},{id: "projects-speed-control-drive-for-ac-motarised-load",
          title: 'Speed Control Drive for AC Motarised Load',
          description: "Speed Control Drive System for AC motorized load, operates either in Temperature Feedback based Controller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/btech_mini_project/";
            },},{id: "projects-calibartion-free-blood-pressure-measurement",
          title: 'Calibartion-Free Blood Pressure Measurement',
          description: "A calibration‑free, non‑invasive blood pressure (BP) estimation methods for large blood vessels by combining high frame rate ultrasound imaging (B-mode &amp; A-mode) with Doppler flow velocity measurements and arterial tonometry.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calibration_free_BP/";
            },},{id: "projects-in-line-catheter-pressure-amp-ecg-data-logger",
          title: 'In-line Catheter Pressure &amp;amp; ECG Data Logger',
          description: "A compact inline device that records high-fidelity pressure waveforms from fluid-filled catheters along with synchronized ECG signals without interfering with standard patient monitoring systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catheter_bypass_unit/";
            },},{id: "projects-cepstral-analysis-for-non-linear-wsa",
          title: 'Cepstral Analysis for Non-linear WSA',
          description: "A novel Non-linear Pulse Wave Spearation Analysis (WSA) based on signal processing (homomorphic deconvolution) for quantifying the arterial pulse wave reflections from any measured pulse waveform, an alternative proposal to linear WSA.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cepstral_analysis_pulse/";
            },},{id: "projects-automated-cover-slipper-for-tissue-slides",
          title: 'Automated Cover-slipper for Tissue Slides',
          description: "Developed software and integrated electronics, sensors and actuators for an in-house designed automated cover slipper for large-format (6&#39;&#39; X 8&#39;&#39;) histopathology human brain section slides.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coverslipper/";
            },},{id: "projects-credibility-assessment-of-models",
          title: 'Credibility Assessment of Models',
          description: "How to build a model we can trust? Established regulatory-aligned verification and validation (V&amp;V) frameworks (as per ASME V&amp;V 40) with a focus on Identifiability, Uncertainity Quanification and Sensitivity Analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/credibility_assessment/";
            },},{id: "projects-quadrature-encoders-for-motor-feedback",
          title: 'Quadrature Encoders for Motor Feedback',
          description: "IR - Photodiode based positional and velocity tracking encoders for wheels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/encoders_motor_control/";
            },},{id: "projects-excised-artery-mock-blood-circulation-rigs",
          title: 'Excised Artery Mock Blood Circulation Rigs',
          description: "Ex-vivo laboratory test rig platform using excised animal arteries for mock circulation loop of heart and systemic arteries",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exvivo_mock_circulation_rigs/";
            },},{id: "projects-personal-finance-101",
          title: 'Personal Finance 101',
          description: "My learnings related to personal finance management - from insurnace, stock market, mutual funds",
          section: "Projects",handler: () => {
              window.location.href = "/projects/finance_101/";
            },},{id: "projects-hydrostatic-pressure-offset-correction-unit",
          title: 'Hydrostatic Pressure Offset Correction Unit',
          description: "A device for real-time hydrostatic pressure compensation that enables heart-level referenced blood pressure measurements across different anatomical sites.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/height_correction_unit/";
            },},{id: "projects-home-automation-via-tv-remote",
          title: 'Home Automation via TV Remote',
          description: "Automate Home using TV Remote",
          section: "Projects",handler: () => {
              window.location.href = "/projects/home_automation_tv_remote/";
            },},{id: "projects-silicone-tubings-mock-blood-circulation-rigs",
          title: 'Silicone Tubings Mock Blood Circulation Rigs',
          description: "In-vitro Laboratory test rig platform using Silicone tubes for mock circulation loop of heart and systemic arteries",
          section: "Projects",handler: () => {
              window.location.href = "/projects/invitro_mock_circulation_rigs/";
            },},{id: "projects-control-your-bot-using-a-tv-remote",
          title: 'Control your bot using a TV Remote',
          description: "IR TV Remotes are hacked to use as a joystick for robot control and ultrasound trasducers are employed for object detection and avoidance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ir_tv_remote_bot/";
            },},{id: "projects-lcd-integration-with-avr-mcus",
          title: 'LCD Integration with AVR MCUs',
          description: "An LCD is integrated for display using Embedded C &amp; AVR MUCs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lcd_avr_mcu/";
            },},{id: "projects-pulse-wave-decomposition-carotid-artery",
          title: 'Pulse Wave Decomposition (Carotid Artery)',
          description: "Flow-independent modelling approaches (multi-Gaussian and multi-Rayleigh Flow Shape Models) for decomposing a measured pulse wave from carotid artery into its forward and backward components for quantifying pulse wave reflection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/model_based_WSA/";
            },},{id: "projects-mosfet-h-bridge-motor-driver",
          title: 'MOSFET H-Bridge Motor Driver',
          description: "Design and Testing of a MOSFET based H-bridge motor driver from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mosfet_motor_driver/";
            },},{id: "projects-multi-modality-vascular-signals-instrumentation",
          title: 'Multi-Modality Vascular Signals Instrumentation',
          description: "Designed and validated multi-modal vascular probes &amp; instrumentation combining custom-made single-element ultrasound transducers with strain-gauge sensors for measuring material properties of blood vessels.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi_modal_probe/";
            },},{id: "projects-omni-wheels-3-wheeled-drive-system",
          title: 'Omni-Wheels 3-wheeled Drive System',
          description: "A robot 3-wheel drive system built using Omni Wheels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/omni_wheels_drive_system/";
            },},{id: "projects-pid-controlled-line-following-robot",
          title: 'PID controlled Line Following Robot',
          description: "A Line following robot is integrated with PID control for smooth navigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pid_line_following_bot/";
            },},{id: "projects-reflection-free-pulse-wave-velocity-pwv",
          title: 'Reflection-free Pulse Wave Velocity (PWV)',
          description: "Improved measurement accuracy and precision of the pulse wave velocity (PWV) and its incremental variations within a cardiac cycle. Implimented wave reflections-compensated Pulse Trasit Time (PTT) for PWV computation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reflection_free_PWV/";
            },},{id: "projects-abu-robocon-robots-manual-amp-autonomous",
          title: 'ABU RoboCON Robots (Manual &amp;amp; Autonomous)',
          description: "Design, Fabrication and Control of ABU ROBOCON India (National Level) Manual and Autonomous Robots for the year 2013, 2014 and 2015, as per the problem statement of the contest for each year.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robocon/";
            },},{id: "projects-high-resolution-whole-slide-imaging",
          title: 'High Resolution Whole Slide Imaging',
          description: "Prototype for high resolution Whole Slide Imaging (WSI) scanners for large format histopathology brain tissue slides.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/slide_scanner/";
            },},{id: "projects-iot-smart-plug-for-home-automation",
          title: 'IoT Smart Plug for Home Automation',
          description: "A device for Power Monitoring and Control of any electrical appliance, Wi-Fi and Internet Enabled with user friendly Web Server for GUI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_plug/";
            },},{id: "projects-sonar-based-object-avoidance-bot",
          title: 'Sonar-based Object Avoidance Bot',
          description: "IR TV Remotes are hacked to use as a joystick for robot control and ultrasound trasducers are employed for object detection and avoidance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sonar_bot/";
            },},{id: "projects-carotid-tonometry-measurement",
          title: 'Carotid Tonometry Measurement',
          description: "Prototypes using resistive, capacitive and strain-gauge sensors for carotid and radial tonometry applications are developed. The effcet of hold-down pressure on the probe for signal quality is chacaterised.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tonometry/";
            },},{id: "projects-ultrasound-transducer-characterization",
          title: 'Ultrasound Transducer Characterization',
          description: "Experiments to characterise the signal qualtiy, frequency spectrum, pulse width, resolution and attenuation of custum-made focused ultrasound trasducers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ultrasound_chara/";
            },},{id: "projects-wireless-water-level-indicator-for-tanks",
          title: 'Wireless Water Level Indicator for Tanks',
          description: "Automated and wireless solution for overhead water tanks based on RF sensors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/water_level_indicator/";
            },},{id: "projects-bed-integrated-body-weight-measurement",
          title: 'Bed-Integrated Body Weight Measurement',
          description: "How to measure the weight of a bed-ridden patient? Designed and built a functional prototype of a modular and automatic time scheduled body weight measurement system for bedridden patients.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/weighing_bed_scales/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%68%75%6C.%6D%61%6E%6F%6A@%6E%74%6E%75.%6E%6F", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rahulmanoj", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5017-5018", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Rahul-Manoj-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2p1FOBAAAAAJ", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@rahul_manoj", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
