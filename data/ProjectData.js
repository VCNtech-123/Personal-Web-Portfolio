
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
   
  export const projects = [
    new Project(10, "https://vcntech-123.github.io/Recipe-Finder-App/", 
        "assets/images/projects/the_daily_plate.png", 
        "https://github.com/VCNtech-123/Recipe-Finder-App",
        "DailyPlate", 
        [react, axios, tailwind],
        ["React", "Axios", "Tailwind"],
        "Performance-optimized recipe application built with React and Tailwind, featuring complex state management and a modern high-fidelity UI"
    ),
    new Project(9, "https://vcntech-123.github.io/Movie-API-Application/", 
        "assets/images/projects/movieapi.png", 
        "https://github.com/VCNtech-123/Movie-API-Application",
        "CineScene", 
        [vite, tailwind, js],
        ["Vite", "Tailwind", "JavaScript"],
        "A premium movie search app built with Vite, Tailwind, and the OMDb API. Features a responsive dark UI for a seamless search experience."
    ),
    new Project(8, "https://vcntech-123.github.io/Expense-Tracker-Application/", 
        "assets/images/projects/expense_tracker.png", 
        "https://github.com/VCNtech-123/Expense-Tracker-Application",
        "Expense Tracker", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A dynamic financial dashboard for real-time expense tracking, built with responsive JavaScript and local storage for data persistence."
    ),
        new Project(7, "https://vcntech-123.github.io/Weather-API-Application/", 
        "assets/images/projects/weatherapi.PNG", 
        "https://github.com/VCNtech-123/Weather-API-Application",
        "Weather API App", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A real-time weather app built with WeatherAPI to fetch and display global forecasts through a responsive UI."
    ),
        new Project(6, "https://vcntech-123.github.io/Leaderboard-App/", 
        "assets/images/projects/leaderboard.PNG", 
        "https://github.com/VCNtech-123/Leaderboard-App",
        "Leaderboard Application", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A responsive CRUD dashboard featuring real-time score adjustments (+5/-5), automated timestamping, and entry management."
    ),
        new Project(1, "https://vcntech-123.github.io/Origami/", 
        "assets/images/projects/origami.png", 
        'https://github.com/VCNtech-123/Origami',
        "Origami Website",
        [html, css, bs],
        ["HTML", "CSS", "Bootstrap"],
        "Origami-themed landing page with responsive layout, grid system, and clean component structure."
    ),
        new Project(2,"https://vcntech-123.github.io/Country-Searcher/", 
        "assets/images/projects/country.PNG", 
        "https://github.com/VCNtech-123/Country-Searcher",
        "Country Search Engine", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A minimalist tool for searching and exploring comprehensive global country data."
    ), 
        new Project(3, "https://vcntech-123.github.io/Solar-System-Weight-Calculator/", 
        "assets/images/projects/solar_system.PNG", 
        "https://github.com/VCNtech-123/Solar-System-Weight-Calculator/tree/main",
        "Solar System Project",
        [html, css, js], 
        ["HTML", "CSS", "JavaScript"],
        "An interactive calculator exploring your personal weight across the solar system."
    ), 
        new Project(4, "https://vcntech-123.github.io/Country-Searcher/", 
        "assets/images/projects/student_management_system.PNG", 
        "https://github.com/VCNtech-123/Country-Searcher",
        "Student Manager", 
        [java, java, java],
        ["Java", "Java FX", "Swing"],
        "CRUD-style record manager built with Java UI, focused on structure and maintainability."
    ), 
        new Project(5, "https://vcntech-123.github.io/Personal-Web-Portfolio/", 
        "assets/images/projects/webfolio.PNG", 
        "https://github.com/VCNtech-123/Personal-Web-Portfolio",
        "Personal Web Portfolio", 
        [html, css, js],
        ["HTML", "CSS", "JavaScript"],
        "A minimalist tool for searching and exploring comprehensive global country data."
        )
];


const newProject = new Project(7, "https://vcntech-123.github.io/Weather-API-Application/", 
    "assets/images/projects/weatherapi.PNG", 
    "https://github.com/VCNtech-123/Weather-API-Application",
    "Weather API App", 
    [html, css, js],
    ["HTML", "CSS", "JavaScript"],
    "Real-time weather forecasting tool powered by WeatherApi"
    )



