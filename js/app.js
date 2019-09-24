//alert('Masum');
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    burger.addEventListener('click', () => {
        //alert('Clicked');
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=> {
            //link.style.animation = `navLinkFade 2s ease forwards ${index / 7+2}`;
             link.style.animation = `navLinkFade 1s ease-in`;
        });

        burger.classList.toggle('toggle');
    });
};

navSlide();
