// gitprofile.config.js

const config = {
  github: {
    username: 'thpeace', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sutheekan-ratanawatkul',
    twitter: 'sutheekan',
    //mastodon: 'arifszn@mastodon.social',
    facebook: '',
    instagram: 'peace.sutheekan',
    dribbble: '',
    behance: '',
    medium: 'sutheekan',
    dev: 'sutheekan',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://thpeace.github.io',
    phone: '',
    email: 'sutheekan.ratanawatkul@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C#',
    'C++',
    'JavaScript',
    'Typescript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'Firebase',
    'Azure',
    'Docker',
    'CSS',
    'Jenkins',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Ascend Group Co., Ltd., Pantavanij Co., Ltd.',
      position: 'Software Engineer',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://ascendcorp.com',
    },
    {
      company: 'Manao Software Co., Ltd.',
      position: 'Full Stack Developer',
      from: 'August 2020',
      to: 'July 2022',
      companyLink: 'https://manaosoftware.com',
    },
    {
      company: 'Utac Thai Limited Co., Ltd.',
      position: 'Programmer Intern',
      from: 'May 2019',
      to: 'April 2020',
      companyLink: 'https://www.utacgroup.com',
    },
    {
      company: 'King Mongkut University North Bangkok',
      position: 'Startup Thailand',
      from: 'August 2018',
      to: 'November 2018',
      companyLink: '',
    },
    {
      company: 'True LittleMonk Program',
      position: 'Freelance Translator and IT support',
      from: 'June 2018',
      to: 'July 2018',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Google Project Management Certificate',
      body: 'Coursera',
      year: 'December 2022',
      link: 'https://www.credly.com/badges/0e56ae46-6de4-4ca1-91f7-2c0c5478ab8f/linked_in_profile',
    },
    {
      name: 'Introduction to Big Data',
      body: 'Coursera',
      year: 'March 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/GGBUHNZQS852',
    },
    {
      name: 'Java (Basic) Certificate',
      body: 'Hackerrank',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/a44603beae11',
    },
    {
      name: 'Problem Solving (Basic) Certificate',
      body: 'Hackerrank',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/61f45de232e9',
    },
    {
      name: 'Problem Solving (Intermediate) Certificate',
      body: 'Hackerrank',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/6334f5116dc1',
    },
    {
      name: 'React (Basic) Certificate',
      body: 'Hackerrank',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/024eb9014e55',
    },
    {
      name: 'Rest API (Intermediate) Certificate',
      body: 'Hackerrank',
      year: 'March 2022',
      link: 'https://www.hackerrank.com/certificates/95c056d52055',
    },
    {
      name: 'Microsoft Certified Solutions Associate (MCSA): Machine Learning',
      body: 'Microsoft',
      year: 'June 2019',
      link: 'https://mcptnc.microsoft.com/certificate',
    },
    {
      name: 'System Analysis and Design',
      body: 'TPQI-NET Thailand',
      year: 'June 2019',
      link: 'SA-BKK-C3-700',
    },
    {
      name: 'Google Ads Display Certification',
      body: 'Google SkillShop',
      year: 'March 2022',
      link: 'https://skillshop.credential.net/97de166f-7b09-4745-a378-47f288479d31',
    },
    {
      name: 'Google Cloud Skills Boost',
      body: 'Google Cloud - Minnesota',
      year: 'Sinces 2022',
      link: 'https://www.cloudskillsboost.google/public_profiles/b9b60485-90e1-4571-b958-10ae99831b3c',
    },
  ],
  education: [
    {
      institution: 'King Mongkut University North Bangkok',
      degree: 'Bachelor of Science',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Assumption University',
      degree: 'Bachelor of Engineering',
      from: '2014',
      to: '2016',
    },
    {
      institution: 'Montfort College',
      degree: 'High School',
      from: '2009',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    // username: 'sutheekan.toyota', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-6JH7QGH4EM', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Reference with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> `,
};

export default config;
