
import {Project} from "../utils/Project.js";

const html = `assets/svg/html-5.svg`;
const css = `assets/svg/css-3.svg`;
const js = `assets/svg/javascript.svg`;
const bs = `assets/svg/bootstrap.svg`;
const java = `assets/svg/java.svg`;
const tailwind = `assets/svg/tailwind.svg`;
const vite = `assets/svg/vite.svg`;
const react = `assets/svg/react.svg`
const axios = 'assets/svg/axios.svg'

const htmlColor = "#E34F26";
const cssColor = "#1572B6";
const jsColor = "#F7DF1E";
const tailwindColor = "#06B6D4";
const reactColor = "#61DAFB";
const viteColor = "#646CFF";

const javaColor = "#ED8B00";
const pythonColor = "#3776AB";
const mysqlColor = "#4479A1";
const ssmsColor = "#B81D33";

const gitColor = "#F05032";
const githubColor = "#FFFFFF";
const vercelColor = "#FFFFFF";
const figmaColor = "#F24E1E";
const intellijColor = "#FE315D";
const vscodeColor = "#007ACC";
   
  export const projects = [
    new Project(10, "https://vcntech-123.github.io/Recipe-Finder-App/", 
        "assets/images/projects/the_daily_plate.png", 
        "https://github.com/VCNtech-123/Recipe-Finder-App",
        "The Daily Plate", 
        [react, axios, tailwind],
        ["React", "Axios", "Tailwind"],
        "High-performance React and Tailwind recipe app. Features advanced state management and a modern, high-fidelity UI.",
        [reactColor, viteColor, tailwindColor]
    ),
    new Project(9, "https://vcntech-123.github.io/Movie-API-Application/", 
        "assets/images/projects/movieapi.png", 
        "https://github.com/VCNtech-123/Movie-API-Application",
        "CineScene", 
        [vite, tailwind, js],
        ["Vite", "Tailwind", "JavaScript"],
        "A premium movie search app built with Vite and Tailwind CSS. Features a responsive dark UI and real-time OMDb API integration.",
        [viteColor, tailwindColor, jsColor]
    ),
    new Project(8, "https://vcntech-123.github.io/Expense-Tracker-Application/", 
        "assets/images/projects/expense_tracker.png", 
        "https://github.com/VCNtech-123/Expense-Tracker-Application",
        "Expense Tracker", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A dynamic financial dashboard for real-time expense tracking, built with responsive JavaScript and local storage for data persistence.",
        [htmlColor, cssColor, jsColor]
    ),
        new Project(7, "https://vcntech-123.github.io/Weather-API-Application/", 
        "assets/images/projects/weatherapi.PNG", 
        "https://github.com/VCNtech-123/Weather-API-Application",
        "Weather API App", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A real-time weather app built with WeatherAPI to fetch and display global forecasts through a responsive UI.",
        [htmlColor, cssColor, jsColor]
    ),
        new Project(6, "https://vcntech-123.github.io/Leaderboard-App/", 
        "assets/images/projects/leaderboard.PNG", 
        "https://github.com/VCNtech-123/Leaderboard-App",
        "Leaderboard Application", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "Responsive CRUD dashboard with real-time score tracking and automated timestamping for seamless entry management.",
        [htmlColor, cssColor, jsColor]
    ),
        new Project(1, "https://vcntech-123.github.io/Origami/", 
        "assets/images/projects/origami.png", 
        'https://github.com/VCNtech-123/Origami',
        "Origami Website",
        [html, css, bs],
        ["HTML", "CSS", "Bootstrap"],
        "Origami-themed landing page with responsive layout, grid system, and clean component structure.",
        [htmlColor, cssColor, jsColor]
    ),
        new Project(2,"https://vcntech-123.github.io/Country-Searcher/", 
        "assets/images/projects/country.PNG", 
        "https://github.com/VCNtech-123/Country-Searcher",
        "Country Search Engine", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A minimalist tool for searching and exploring comprehensive global country data.",
        [htmlColor, cssColor, jsColor]
    ), 
        new Project(3, "https://vcntech-123.github.io/Solar-System-Weight-Calculator/", 
        "assets/images/projects/solar_system.PNG", 
        "https://github.com/VCNtech-123/Solar-System-Weight-Calculator/tree/main",
        "Solar System Project",
        [html, css, js], 
        ["HTML", "CSS", "JavaScript"],
        "An interactive calculator exploring your personal weight across the solar system.",
        [htmlColor, cssColor, jsColor]
    ), 
        new Project(4, "https://vcntech-123.github.io/Country-Searcher/", 
        "assets/images/projects/student_management_system.PNG", 
        "https://github.com/VCNtech-123/Country-Searcher",
        "Student Manager", 
        [java, java, java],
        ["Java", "Java FX", "Swing"],
        "CRUD-style record manager built with Java UI, focused on structure and maintainability.",
        [javaColor, javaColor, javaColor]
    ), 
        new Project(5, "https://vcntech-123.github.io/Personal-Web-Portfolio/", 
        "assets/images/projects/webfolio.PNG", 
        "https://github.com/VCNtech-123/Personal-Web-Portfolio",
        "Personal Web Portfolio", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A minimalist tool for searching and exploring comprehensive global country data.",
        [htmlColor, cssColor, jsColor]
        )
];


