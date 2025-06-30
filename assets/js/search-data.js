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
          description: "Here you will find information regarding all my projects.",
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
          description: "Here you will find information regarding all my deliverd talks.",
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
        },{id: "post-how-not-to-die-young-lessons-from-cardiovascular-engineering",
        
          title: "How not to die Young? Lessons from Cardiovascular Engineering",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/how-not-to-die-young/";
          
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
            },},{id: "news-defended-my-phd-thesis-and-graduated-from-indian-institute-of-technology-iit-madras-for-dual-degree-m-s-and-ph-d",
          title: 'Defended my PhD Thesis and graduated from Indian Institute of Technology (IIT) Madras...',
          description: "",
          section: "News",},{id: "news-joined-as-a-postdoctoral-reserach-fellow-with-the-division-of-biomechanics-department-of-structral-engineering-at-ntnu-norway",
          title: 'Joined as a Postdoctoral Reserach Fellow with the Division of Biomechanics, Department of...',
          description: "",
          section: "News",},{id: "news-selected-for-a-2-year-term-2025-2026-at-the-young-scientists-committe-of-the-vph-institute-check-out-the-links-for-more-details",
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
            },},{id: "projects-wireless-overhead-tank-water-level-alarm",
          title: 'Wireless Overhead Tank Water Level Alarm',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-weighing-bed-scales",
          title: 'Weighing Bed Scales',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-algorithms-for-wave-separation",
          title: 'Algorithms for Wave Separation',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-multi-modal-arterial-probe",
          title: 'Multi-Modal Arterial Probe',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-reflection-free-pwv",
          title: 'Reflection-Free PWV',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-calibartion-free-bp",
          title: 'Calibartion-Free BP',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-echo-pulse-twin-for-heart-faliure-diagnosis",
          title: 'ECHO-PULSE-TWIN for Heart Faliure Diagnosis',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-ambulatory-arterial-stiffness-measurement",
          title: 'Ambulatory Arterial Stiffness Measurement',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-automated-cover-slipper-for-histopathology-slides",
          title: 'Automated Cover-slipper for Histopathology Slides',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-tele-operated-tractetory-tracking-robots",
          title: 'Tele-operated Tractetory Tracking Robots',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
