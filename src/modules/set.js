const toDoContentBox = document.querySelector('.toDoContent');
const editTitle = document.querySelector('.editTimer');
const editContent = document.querySelector('.editContent');
const plusButton = document.querySelector('.icons > i:first-child');
const complete = document.querySelector('.complete');

import { panes } from './edit';

let opacity = 0;

/* make the page 20% padded from the toDoPanes while having
toDoPanes enlarged while it's active */



function fadeInPage() {
    for (let i = 0; i < panes.children.length; i++) {
        panes.children[i].removeAttribute('style');
        panes.children[i].classList.add('dissapear');
    }
    let intervalID = setInterval(() => {
        if (opacity < 1) {
            opacity = opacity + .10;
            toDoContentBox.style.opacity = `${opacity}`;
            toDoContentBox.style.zIndex = '1';
            panes.classList.add('enlarged');
            
        } else {
            clearInterval(intervalID);
        }
    }, 25)
}

function fadeOutPage() {
    let intervalID = setInterval(() => {
        if (opacity > 0) {
            opacity = opacity - .10;
            toDoContentBox.style.opacity = `${opacity}`;
            toDoContentBox.style.zIndex = '0';
            panes.classList.remove('enlarged');
            for (let i = 0; i < panes.children.length; i++) {
                panes.children[i].classList.remove('dissapear');
            }
        } else {
            clearInterval(intervalID);
        }
    }, 25)
}

export { plusButton, complete, fadeInPage, fadeOutPage };