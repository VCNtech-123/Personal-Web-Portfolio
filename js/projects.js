import { projects } from "../data/ProjectData.js";   


//Hamburger Icon 
const hamburgerIcon = document.querySelector('.hamburger_icon');
const hamburgerMenu = document.querySelector('.hamburger_menu'); 
const hamburgerLine = document.querySelectorAll('.hamburger_line');
console.log(hamburgerLine);

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hm_active');
    hamburgerLine[0].classList.toggle('line_one');
    hamburgerLine[1].classList.toggle('line_two');
    hamburgerLine[2].classList.toggle('line_three');
});

//Will show the project cards using loop and OOP concepts.
const projectFlex = document.querySelector('.project_container');

projects.forEach((project) => {
    const proj = document.createElement('div');
    proj.classList.add('project_card');

    proj.innerHTML = project.getProjectCard();
    console.log(proj);
    projectFlex.appendChild(proj);
})

// My Search Function
const searchInput = document.getElementById('search_input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const searchedProject = projects.filter(proj => proj.title?.toLowerCase().includes(searchTerm.toLowerCase()))
    projectFlex.innerHTML = '';

    searchedProject.forEach((project) => {  
    const proj = document.createElement('div');
    proj.classList.add('project_card');

    proj.innerHTML = project.getProjectCard();
    console.log(proj);
    projectFlex.appendChild(proj);
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
        else project.classList.remove('active'); }
    })
})

navs.forEach((cur) => {
    hover.observe(cur);
})

// Filter Project