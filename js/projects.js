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

const projectTitle = document.querySelectorAll('.project_head');
const searchInput = document.getElementById('search_input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    projectTitle.forEach((title) => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            title.parentElement.style.display = 'flex';
        } else {
            title.parentElement.style.display = 'none';
        }
    }) 
})

//Navigation
const projectPage = document.querySelector('.projects_section');
const project = document.getElementById('project_btn');

const navs = [projectPage];

const hover = new IntersectionObserver ((navigation) => {
    navigation.forEach((entry) => {
        if (entry.target === projectPage) {
        if (entry.isIntersecting) project.classList.add('active');
        else projects.classList.remove('active'); }
    })
}, {threshold: 0.3})

navs.forEach((cur) => {
    hover.observe(cur);
})

