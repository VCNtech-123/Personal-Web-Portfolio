import { projects } from "./ProjectData.js";   

//Will show the project cards using loop and OOP concepts.
const projectFlex = document.querySelector('.project_page_column');

projects.forEach((project) => {
    const proj = document.createElement('div');
    proj.classList.add('project_column');

    proj.innerHTML = project.getProjectCard();
    console.log(proj);
    projectFlex.appendChild(proj);
})

const projectCards = document.querySelectorAll('.project_column');

const searchInput = document.getElementById('search_input');

/* searchInput.addEventListener('input', (searchTerm) => {
    const searchTerm = searchInput.value.toLowerCase(); */