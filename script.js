let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//typing style (serach on google typed js)

var typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Srength Training','Fat Lose', 'Running' ],
    typeSpeed: 60,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });