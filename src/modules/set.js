const editTitle = document.querySelector('.editTimer');
const editContent = document.querySelector('.editContent');
const editTimer = document.querySelector('.editTimer');
const plusButton = document.querySelector('.icons > i:first-child');
const complete = document.querySelector('.complete');

let transformation = -1000;

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
        if (transformation > -1000) {
            transformation = transformation - 10;
            toDoContentBox.style.transform = `translate(0, ${transformation}px)`;
        } else {
            clearInterval(intervalID);
        }
    })
}

export { plusButton, complete, slideInPage, slideOutPage };