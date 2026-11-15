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
    linkedinUrl: `https://www.linkedin.com/in/joseph-messina-36503049/`,
  },

  // Top navigation links (the Resume button is separate)
  nav: [
    { to: `/Resources`, label: `Resources` },
    { to: `/AboutMe`, label: `About` },
    { to: `/Portfolio`, label: `Projects` },
    { to: `/Contact`, label: `Contact` },
  ],

  about: {
    heading: `About Me`,
    photoAlt: `A photo of a man in a blue kimono surrounded by hanging Japanese flowers.`,

    // One entry per paragraph
    bio: [
      `Hello! My name is Alex Messina and I am an inquisitive, life-long learner that enjoys exploring challenges. I am a firm believer in honest self-reflection as a path to improvement and view criticism as an opportunity to engage in that self-reflection. I think that collaboration is the ideal tool to produce the best quality product as it allows for a larger body of knowledge and unique perspectives to be applied to the problem in question.`,
      `I tend to spend my free time programming to help someone make a repetitive, tedious task doable faster. I recently completed my Web Developer Boot Camp through Washington University - St. Louis and completed an internship with Washington University Medical School's medical imaging laboratory. My internship focused on building educational materials, such as a responsive web app, to make medical imaging concepts more accessible to middle and high school students. You can see more of my projects, where I have leveraged my computer science and web design skills on my GitHub page.`,
      `If you have any questions for me, you can contact me via email or use the contact form on my website.`,
    ],

    // dates and summary are optional; delete the line if unused
    experience: [
      {
        role: `Intern`,
        org: `Washington University School of Medicine, Medical Imaging Laboratory`,
        dates: ``,
        summary: `Built educational materials, including a responsive web app, to make medical imaging concepts more accessible to middle and high school students.`,
      },
    ],

    education: [
      {
        program: `Web Developer Boot Camp`,
        school: `Washington University in St. Louis`,
        dates: ``,
      },
    ],

    // Group name: list of skills
    skills: {
      Languages: [`Python`, `JavaScript`, `TypeScript`],
      Web: [`React`, `Django`, `HTML & CSS`, `Tailwind CSS`],
      Infrastructure: [`Self-hosting on Raspberry Pi`, `Netlify`, `Render`],
    },
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