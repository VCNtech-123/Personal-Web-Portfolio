//Animation
const contact = document.getElementById('contact_btn');
const contactPage = document.querySelector('.contacts_section');
const navs = [contactPage];

const hover = new IntersectionObserver ((navigation) => {
    navigation.forEach((entry) => {
        if (entry.target === contactPage) {
        if (entry.isIntersecting) contact.classList.add('active');
        else contact.classList.remove('active'); }
    })
});

navs.forEach((cur) => {
    hover.observe(cur);
});

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