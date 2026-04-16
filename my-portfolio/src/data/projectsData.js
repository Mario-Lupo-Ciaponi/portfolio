import WhiskLogo from "../assets/images/whisk-logo.png";
import VkusiadaLogo from "../assets/images/vkusiada-logo.png";
import HerodotusImage from "../assets/images/herodotus-image.jpg";
import CountryInfoImage from "../assets/images/country-info-image.png";
import FinFlowImage from "../assets/images/fin-flow-image.webp";


export const projectsData = [
  {
    image: WhiskLogo,
    title: "Whisk",
    description: "A social media platform for pet lovers. Users can share posts with an interactive map pinpointing exactly where a pet was spotted, making it easier to find and reunite lost animals.",
    technologies: ["React", "JavaScript", "Django REST Framework", "Python"],
    githubUrl: "https://github.com/Mario-Lupo-Ciaponi/Whisk",
    url: "https://whisk-mlc.netlify.app",
    hasLiveDemo: true,
    gridAreaName: "project-1",
  },
  {
    image: VkusiadaLogo,
    title: "Vkusiada",
    description: "A meal suggestion web app that generates recipe ideas based on the ingredients you already have at home, helping you reduce waste and discover new dishes.",
    technologies: ["Django", "Python", "HTML", "CSS"],
    githubUrl: "https://github.com/Mario-Lupo-Ciaponi/vkusiada",
    url: null,
    hasLiveDemo: false,
    gridAreaName: "project-2",
  },
  {
    image: HerodotusImage,
    title: "HerodotusBot",
    description: "A Discord bot that answers historical questions on demand. Ask it about any event, figure, or era and get concise, informative responses right inside your server.",
    technologies: ["Python"],
    githubUrl: "https://github.com/Mario-Lupo-Ciaponi/HerodotusBot",
    url: null,
    hasLiveDemo: false,
    gridAreaName: "project-3",
  },
  {
    image: CountryInfoImage,
    title: "Country Information",
    description: "A desktop application that lets users explore detailed information about any country — including population, capital, languages, and more — through a clean and intuitive GUI.",
    technologies: ["Python", "Tkinter"],
    githubUrl: "https://github.com/Mario-Lupo-Ciaponi/Country-Information",
    url: null,
    hasLiveDemo: false,
    gridAreaName: "project-4",
  },
  {
    image: FinFlowImage,
    title: "FinFlow",
    description: "A personal finance management desktop app that helps users track income, expenses, and budgets, giving them a clear picture of their financial health over time.",
    technologies: ["Python", "Tkinter"],
    githubUrl: "https://github.com/Mario-Lupo-Ciaponi/FinFlow",
    url: null,
    hasLiveDemo: false,
    gridAreaName: "project-5",
  },
];
