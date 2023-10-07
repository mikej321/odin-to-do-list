const menu = document.querySelector('.hamburgerMenu');
const main = document.querySelector('main');
const projects = document.querySelectorAll('.project');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

function menuEvent() {
    menu.addEventListener('click', () => {
        main.classList.toggle('navOpen');
        projects.forEach((project) => {
            project.classList.toggle('projectOpen');
        })
        line1.classList.toggle('upperAnimate');
        line2.classList.toggle('middleAnimate');
        line3.classList.toggle('lowerAnimate');
    })
}

export { menuEvent };