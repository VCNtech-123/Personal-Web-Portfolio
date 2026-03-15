const contact = document.getElementById('contact_btn');
const contactPage = document.querySelector('.contacts_section');
const navs = [contactPage];

const hover = new IntersectionObserver ((navigation) => {
    navigation.forEach((entry) => {
        if (entry.target === contactPage) {
        if (entry.isIntersecting) contact.classList.add('active');
        else contact.classList.remove('active'); }
    })
}, {threshold: 0.3})

navs.forEach((cur) => {
    hover.observe(cur);
})