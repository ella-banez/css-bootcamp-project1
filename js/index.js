const menuEl = document.querySelector('.menu-icon');
const lines = document.querySelectorAll('.line');

let check = 0;

function openNavigation(){
    const navEl = document.querySelector('.navigation');
    
    if (check === 0) {
        navEl.style.left = '0rem';
        navEl.style.marginLeft = '8rem';
        check = 1;
    } else {
        navEl.style.left = '-48rem';
        navEl.style.marginLeft = '0rem';
        check = 0;
    };

    lines.forEach(line => line.classList.toggle('x'));
};


menuEl.addEventListener('click', openNavigation);
