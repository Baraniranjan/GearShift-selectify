import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitImage2,
  benefitActorIcon,
  benefitDirectorIcon,
  benefitMicrophoneIcon,
  benefitSoundIcon,
  benefitVideoLessonIcon,
  benefitVoiceSearchIcon,
  benefitCamerIcon,
  benefitCinemaIcon,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Find Jobs",
    url: "/find-jobs",
  },
  {
    id: "1",
    title: "Find Talent",
    url: "/find-talent",
  },
  {
    id: "2",
    title: "Post a Job",
    url: "/post-a-job",
  },
  {
    id: "3",
    title: "Upload Profile",
    url: "/upload-resume",
  },
  {
    id: "6",
    title: "Tools",
    url: "/tools",
  },
  {
    id: "4",
    title: "Logout",
    url: "/logout",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Log in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Cards & Role Selection",
  "Text Based Querying",
  "Advanced Key Filters",
];

export const brainwaveServicesIcons = [
  // recording03,
  // recording01,
  // disc02,
  // chromecast,
  // sliders04,
  benefitActorIcon,
  benefitCamerIcon,
  benefitCinemaIcon,
  benefitDirectorIcon,
  benefitMicrophoneIcon,
];

export const roadmap = [
  {
    id: "0",
    title: "Jasko",
    text: "A bot which interacts and assists users in maximizing the output from Selectify",
    date: "Jan 2025",
    status: "In-Progress",
    imageUrl: roadmap2,
  },
  {
    id: "1",
    title: "Voice recognition",
    text: "Enables Jasko to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "Jan 2025",
    status: "In-Progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  
  {
    id: "2",
    title: "Recommendation Engine",
    text: "Cognitive Suggestion of Profiles based on past searches and current selections to provide a variety of talent profiles to choose from",
    date: "Jan 2025",
    status: "In-Progres",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Language Translation Features",
    text: "Allow the chatbot or manual input in prominent languages to be translated and fed into Selectify",
    date: "Jan 2025",
    status: "In-Progres",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    //text: collabText,
  },
  // {
  //   id: "1",
  //   title: "Smart Automation",
  // },
  // {
  //   id: "2",
  //   title: "Top-notch Security",
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Selectify0",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Selectify+",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "100/month",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  // {
  //   id: "2",
  //   title: "Enterprise",
  //   description: "Custom AI chatbot, advanced analytics, dedicated account",
  //   price: null,
  //   features: [
  //     "An AI chatbot that can understand your queries",
  //     "Personalized recommendations based on your preferences",
  //     "Ability to explore the app and its features without any cost",
  //   ],
  // },
];

export const benefits = [
  {
    id: "0",
    title: "Actor",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitActorIcon,
    //imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Dancer",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitDirectorIcon,
    //imageUrl: benefitImage2,
    //light: true,
  },
  {
    id: "2",
    title: "Camera",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitCamerIcon,
    //imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Writer",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitCinemaIcon,
    //imageUrl: benefitImage2,
    //light: true,
  },
  {
    id: "4",
    title: "VFX Artists",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitVideoLessonIcon,
    //imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Singer",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitMicrophoneIcon,
    //imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Voice",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitVoiceSearchIcon,
    //imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },

  
];

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const filterData = [
  {
    label: 'Gender',
    options: ['Male', 'Female'],
    name: 'gender',
  },
  {
    label: 'Age',
    options: ['20-30', '30-40', 'Above 40'],
    name: 'years',
  },
  {
    label: 'Genres',
    options: ['Action', 'Action/Drama', 'Dance', 'Musical', 'Sci-fi', 'Romance', 'Rom-Com', 'Comedy', 'Drama', 'Political Thriller'],
    name: 'genres',
  },
  {
    label: 'Skills',
    options: ['Sports', 'Dance', 'Martial Arts', 'Acting', 'Musician'],
    name: 'skills',
  },
  {
    label: 'Ethnicity',
    options: ['Asian', 'Black', 'Caucasian', 'Hispanic', 'Other'],
    name: 'ethnicity',
  },
  {
    label: 'Experience',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    name: 'experience',
  },
];

export { services, technologies, experiences, testimonials, projects };