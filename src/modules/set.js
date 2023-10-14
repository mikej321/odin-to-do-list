const editTitle = document.querySelector('.editTimer');
const editContent = document.querySelector('.editContent');
const editTimer = document.querySelector('.editTimer');
const plusButton = document.querySelector('.icons > i:first-child');
const complete = document.querySelector('.complete');
const arrow = document.querySelector('.arrow');

let transformation = -1100;

function slideInPage() {
    const toDoContentBox = document.querySelector('.toDoContent');
    let intervalID = setInterval(() => {
        if (transformation < 0) {
            transformation = transformation + 10;
            toDoContentBox.style.transform = `translate(0, ${transformation}px)`;
        } else {
            clearInterval(intervalID);
        }
    }, 0.5)
}

function slideOutPage() {
    const toDoContentBox = document.querySelector('.toDoContent');
    let intervalID = setInterval(() => {
        if (transformation > -1100) {
            transformation = transformation - 10;
            toDoContentBox.style.transform = `translate(0, ${transformation}px)`;
        } else {
            clearInterval(intervalID);
        }
    }, 0.5)
}

export { plusButton, complete, arrow, slideInPage, slideOutPage };