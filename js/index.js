// DOM Manipulation Showcase
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
const homePage = document.querySelector('.home_section');
const navs = [homePage];
console.log(homePage);
const hover = new IntersectionObserver ((navigation) => {
    navigation.forEach((entry) => {
        if (entry.target === homePage) {
        if (entry.isIntersecting) home.classList.add('active');
        else home.classList.remove('active'); }
    })
})

navs.forEach((cur) => {
    hover.observe(cur);
})


//Typing Effect using setInterval
const heroName = document.getElementById('hero_name');
const nameAnimation = 'John Francis Vecina';
heroName.innerHTML = '';
let i = 0; 

setInterval(() => {
    heroName.textContent = nameAnimation.slice(0, i + 1);
    i++
}, 150);


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

//Send Message and Copy Email
const emailButton = document.querySelector('#email_button');
emailButton.addEventListener('click', () => {
    handleCopyEmail();
})

const form = document.querySelector('.message_section');
(() => {
    emailjs.init("VEcmXvvcOn2ccmGE2"); 
})();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('send_button');
    btn.innerText = 'Sending...';

    emailjs.sendForm('service_bm1wp4z', 'template_5s5ywzh', e.target)
        .then(() => {
            window.alert("Message sent successfully!")
            btn.innerText = 'Message Sent!';
            btn.style.borderColor = '#22c55e';
            e.target.reset(); 
        }, (error) => {
            btn.innerText = 'Error! Try again.';
            console.log('FAILED...', error);
        });
});

console.log(form)


