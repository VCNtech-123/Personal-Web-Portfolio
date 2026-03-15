
import {Project} from "./Project.js";

const html = `assets/svg/html-5.svg`;
const css = `assets/svg/css-3.svg`;
const js = `assets/svg/javascript.svg`;
const bs = `assets/svg/bootstrap.svg`;
const java = `assets/svg/java.svg`;


const projectOne = new Project("https://vcntech-123.github.io/Origami/", 
    "assets/images/projects/origami.png", 
    'https://github.com/VCNtech-123/Origami',
    "Origami Website",
    [html, css, bs],
    ["HTML", "CSS", "Bootstrap"],
    "Origami-themed landing page with responsive layout, grid system, and clean component structure."
    );

const projectTwo = new Project("https://vcntech-123.github.io/Country-Searcher/", 
    "assets/images/projects/country.PNG", 
    "https://github.com/VCNtech-123/Country-Searcher",
    "Country Search Engine", 
    [html, css, js],
    ["HTML", "CSS", "JavaScript"],
    "A minimalist tool for searching and exploring comprehensive global country data."
    );

const projectThree = new Project("https://vcntech-123.github.io/Solar-System-Weight-Calculator/", 
    "assets/images/projects/solar_system.PNG", 
    "https://github.com/VCNtech-123/Solar-System-Weight-Calculator/tree/main",
    "Solar System Project",
    [html, css, js], 
    ["HTML", "CSS", "JavaScript"],
    "An interactive calculator exploring your personal weight across the solar system."
    );

const projectFour = new Project("https://vcntech-123.github.io/Country-Searcher/", 
    "assets/images/projects/student_management_system.PNG", 
    "https://github.com/VCNtech-123/Country-Searcher",
    "Student Manager", 
    [java, java, java],
    ["Java", "Java FX", "Swing"],
    "CRUD-style record manager built with Java UI, focused on structure and maintainability."
    );


const projectFive = new Project("https://vcntech-123.github.io/Personal-Web-Portfolio/", 
    "assets/images/projects/webfolio.PNG", 
    "https://github.com/VCNtech-123/Personal-Web-Portfolio",
    "Personal Web Portfolio", 
    [html, css, js],
    ["HTML", "CSS", "JavaScript"],
    "A minimalist tool for searching and exploring comprehensive global country data."
    );
   
  export const projects = [projectOne, projectTwo, projectThree, projectFour, projectFive];



