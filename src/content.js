// ============================================================
// SITE CONTENT: edit the text in this file to update the site.
//  - Wrap every piece of text in backticks ( ` ) so apostrophes
//    and quotes inside it cannot break the file.
//  - Keep the comma at the end of each line and each { ... } entry.
//  - To add to a list, copy an existing { ... }, entry and change
//    the text.
//  - Save the file and the page updates automatically.
// ============================================================

const content = {
  // Used in the header, footer, and browser tab
  site: {
    title: `Alex Messina | Systems Engineer & Educator`,
    name: `J. Alexander Messina`,
    pronouns: `He/Him`,
    email: `me@alexmessina.dev`,
    githubUrl: `https://github.com/ExecutorKarthan`,
    linkedinUrl: `https://www.linkedin.com/in/joseph-alex-messina/`,
  },

  // Top navigation links (the Resume button is separate)
  nav: [
    { to: `/AboutMe`, label: `About` },
    { to: `/Portfolio`, label: `Projects` },
    { to: `/Resources`, label: `Resources` },   
    { to: `/Contact`, label: `Contact` },
  ],

about: {
    heading: `About Me`,
    photoAlt: `A photo of a man in a park smiling at the camera for a headshot.`,

    // One entry per paragraph
    bio: [
      `Hello! My name is Alex Messina and I am an inquisitive, life-long learner that enjoys exploring challenges. I am a firm believer in honest self-reflection as a path to improvement 
      and view criticism as an opportunity to engage in that self-reflection. I think that collaboration is the ideal tool to produce the best quality product as it allows for a larger 
      body of knowledge and unique perspectives to be applied to the problem in question.`,
      `I tend to spend my free time programming to help someone make a repetitive, tedious task doable faster. I recently completed my Web Developer Boot Camp through Washington University 
      - St. Louis and completed an internship with Washington University Medical School's medical imaging laboratory. My internship focused on building educational materials, such as a 
      responsive web app, to make medical imaging concepts more accessible to middle and high school students. You can see more of my projects, where I have leveraged my computer science 
      and web design skills on my GitHub page.`,
      `If you have any questions for me, you can contact me via email or use the contact form on my website.`,
    ],

    // Each section becomes one expandable card, shown in this order.
    //   title, blurb  -> what you see while the card is closed
    //   entries       -> what appears when it opens
    // Every entry field is optional: heading, subheading, location,
    // dates, text (a paragraph), bullets (a list). Delete any you don't need.
    sections: [
      {
        title: `University Partnerships`,
        blurb: `Washington University, 2024 – 2026`,
        entries: [
          {
            heading: `Teacher Researcher (Summer Appointments)`,
            subheading: `Washington University`,
            location: `St. Louis, MO`,
            dates: `June 2024 – July 2026`,
            bullets: [
              `Developed and decomposed project requirements into accessible, user-centric instructional assets modeled on real-world clinical and research scenarios with faculty researchers.`,
              `Authored comprehensive technical documentation for research-based digital tools, as well as implementation guides and training resources, to ensure the seamless institutional implementation of developed lessons across diverse learning environments.`,
              `Architected and deployed interactive web applications using React, TypeScript, and Konva, for classroom use - making complex topics in medical imaging, Large Language Models (LLMs), and the chemistry of Metal Organic Frameworks (MOFs) accessible to high school level learners.`,
              `Co-led a 2025 Washington University technical workshop, delivering hands-on training and troubleshooting support for end-users adopting the Medical Imaging Simulator and implementing the Gamma Anna Lessons.`,
            ],
          },
        ],
      },

      {
        title: `Classroom Experience`,
        blurb: `St. Charles High School and Rockwood High School, 2017 – present`,
        entries: [
          {
            heading: `Science Teacher (Chemistry and Computer Science)`,
            subheading: `St. Charles High School`,
            location: `St. Charles, MO`,
            dates: `August 2018 – Present`,
            bullets: [
              `Engineered a custom digital workflow solution using Google Apps Script to automate institutional logistics improving time efficiency by 400%, while providing instructional and operational decision-making as a member of the building-level shared leadership committee.`,
              `Provided guidance to district science teachers while serving on the district level science steering committee through decomposing the Next Generation Science Standards (NGSS) into structured, measurable verification rubrics and performance benchmarks.`,
              `Facilitated evidence-based instruction for diverse cohorts, focusing on knowledge transfer and inquiry-based learning, through explicitly teaching metacognitive strategies, including reflection, error analysis, and problem-solving frameworks, while supporting student success across ability levels.`,
              `Introduced a materials science–based chemistry curriculum, increasing student interest through exploring the properties and chemical composition of polymers, metals, and ceramics, while providing avenues to teach practical laboratory skills.`,
              `Delivered a college-level Python and Java curriculum anchored in authentic computer science problems, utilizing a problem-first methodology where students encountered computational bottlenecks firsthand before implementing formal solutions to build practical, deep-seated conceptual mastery.`,
            ],
          },
          {
            heading: `Science Teacher (Biology)`,
            subheading: `Rockwood High School`,
            location: `Fenton, MO`,
            dates: `August 2017 – 2018`,
            bullets: [
              `Facilitated multi-level biology instruction utilizing inquiry-based and case-study pedagogical models to enhance learner critical thinking and linking patient symptoms to cellular structures and processes.`,
              `Mentored department colleagues by modeling case-based strategies and instructional practices for the improvement of departmental instruction.`,
            ],
          },
        ],
      },

      {
        title: `Coaching Experience`,
        blurb: `Founding head coach, St. Charles High School esports`,
        entries: [
          {
            heading: `Esports Head Coach`,
            subheading: `St. Charles High School`,
            location: `St. Charles, MO`,
            dates: `August 2021 – Present`,
            bullets: [
              `Founded and scaled the district’s inaugural esports program, introducing procedures and policies to build a fiscally responsible, people-focused program grounded in trust, accountability, and ownership.`,
              `Facilitate team-training focused on leadership, critical thinking, and collaborative problem-solving by applying positive psychology techniques and goal-oriented objectives, leading to a state championship-winning Overwatch 2 team and multiple state-qualifying cohorts across several titles.`,
              `Hosted the first, and eventually annual, in-person county-wide Overwatch tournament in school district history by recruiting competitive teams, testing computer functionality, and on-boarding tournament organizers.`,
            ],
          },
        ],
      },

      {
        title: `Education`,
        blurb: `M.Ed., M.S., and B.S.`,
        entries: [
          {
            heading: `Master of Education, Learning, Teaching and Curriculum`,
            subheading: `University of Missouri - Columbia`,
            location: `Columbia, MO`,
            dates: `Graduated May 2015`,
            text: `GPA: 4.00 / 4.00`,
          },
          {
            heading: `Master of Science in Forensic Science`,
            subheading: `Marshall University`,
            location: `Huntington, WV`,
            dates: `Graduated May 2012`,
            text: `Emphases in Chemistry & Digital Analysis. GPA: 3.85 / 4.00`,
          },
          {
            heading: `Bachelor of Science in Biology`,
            subheading: `University of Missouri - Columbia`,
            dates: `Graduated May 2010`,
            text: `Minors in Business and Psychology. GPA: 3.79 / 4.00`,
          },
        ],
      },

      {
        title: `Professional Organizations`,
        blurb: `MSTA, AACT, and Scouting America`,
        entries: [
          {
            heading: `Missouri State Teachers Association`,
            subheading: `Non-profit organization, Member`,
            dates: `2024 – Present`,
          },
          {
            heading: `American Association of Chemistry Teachers`,
            subheading: `Non-profit organization, Member`,
            dates: `2023 – Present`,
          },
          {
            heading: `Scouting America`,
            subheading: `Non-profit organization, Member`,
            dates: `1994 – 2007, 2021 – Present`,
            bullets: [`Eagle Scout - November 2001`],
          },
        ],
      },

      {
        title: `Technical Skills and Certifications`,
        blurb: `Certified Scrum Master, React, Python, Google Apps Script`,
        entries: [
          {
            heading: `Certifications`,
            text: `Certified Scrum Master (Scrum Alliance), WashU Coding Boot Camp Certificate, Chancellor’s Certificate in Programming (Java/Python).`,
          },
          {
            heading: `Multimedia & Learning Technology`,
            text: `JavaScript/TypeScript (React, Konva), Python, Google Apps Script, Automated Workflow Design, Technical Documentation.`,
          },
          {
            heading: `Licensure`,
            text: `Missouri Professional Educator License: Chemistry, Biology, and Computer Science.`,
          },
        ],
      },
    ],
  },
  
  resources: {
    heading: `Educator Resources`,
    intro: `Classroom materials you are welcome to use. Each folder opens in Google Drive with view-only access. To keep your own editable version of a file, open it and choose File, then Make a copy.`,
    items: [
      {
        title: `Metal Organic Frameworks in Chemistry`,
        description: ``,
        href: `https://drive.google.com/drive/folders/1fbxwL5_DyZr_IK4ServQVc7NiuqdlMBO`,
      },
      {
        title: `Exploring Large Language Models`,
        description: ``,
        href: `https://drive.google.com/drive/folders/1ZbJ4OUhEpUTjuHN7BXybBVTCjOY7PfdJ`,
      },
      {
        title: `Gamma Anna Adventure`,
        description: ``,
        href: `https://drive.google.com/drive/folders/1Il80DVGVlFDTs4Zslcg6LvcsbSPdT7x_`,
      },
      {
        title: `Medical Imaging Simulation`,
        description: ``,
        href: `https://drive.google.com/drive/folders/1U92lOn5WLp6ptTzJp6uu_p8837pXRNby`,
      },
    ],
  },
}

export default content