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

const email = "johnvecina640@gmail.com";

const handleCopyEmail = () => {
  navigator.clipboard.writeText(email).then(() => {
    window.alert("The email is copied from clipboard!")
  });
};

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