
//Show Animation Up when scrolled
const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        /* else {
            entry.target.classList.remove('show');
        }  */
    });
}, { rootMargin: "0px 0px 250px 0px"});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((cur) => {
    observer.observe(cur);
})

console.log(hidden);


//Navigation
const home = document.getElementById('home_btn');
const homePage = document.querySelector('.hero_section');
const navs = [homePage];

const hover = new IntersectionObserver ((navigation) => {
    navigation.forEach((entry) => {
        if (entry.target === homePage) {
        if (entry.isIntersecting) home.classList.add('active');
        else home.classList.remove('active'); }
    })
}, {threshold: 0.3})

navs.forEach((cur) => {
    hover.observe(cur);
})


//Typing Effect
const heroName = document.getElementById('hero_name');
const nameAnimation = 'John Francis Vecina';
heroName.innerHTML = '';
let i = 0; 

setInterval(() => {
    heroName.textContent = nameAnimation.slice(0, i + 1);
    i++
}, 150);



