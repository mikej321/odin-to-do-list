const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('.topSection > h1');
const editTitle = document.querySelector('.editTitle');
const creationContent = document.querySelector('.middleSection > p');
const editContent = document.querySelector('.editContent');
const timerContent = document.querySelector('.finalSection > p');
const editTimer = document.querySelector('.editTimer');

function titleEdit() {
    title.toggleAttribute('contenteditable', true);
    title.textContent = title.innerText;
    const text = document.getSelection();
    // fix the focus offset
    text.setBaseAndExtent(title.firstChild, 0, title.lastChild, title.textContent.length);
    completeTitleEdit();
}

function completeTitleEdit() {
    editTitle.removeEventListener('click', titleEdit);
    editTitle.textContent = 'Add';
    editTitle.addEventListener('click', grabTextTitle);
}


function grabTextTitle() {
    title.textContent = title.innerText;
    title.toggleAttribute('contenteditable', false);
    editTitle.textContent = 'Edit';
    editTitle.addEventListener('click', titleEdit);
}

function contentEdit() {
    creationContent.toggleAttribute('contenteditable', true);
    creationContent.textContent = creationContent.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(creationContent.firstChild, 0, creationContent.lastChild, creationContent.textContent.length);
    completeContentEdit();
}

function completeContentEdit() {
    editContent.removeEventListener('click', contentEdit);
    editContent.textContent = 'Add';
    editContent.addEventListener('click', grabTextContent);
}

function grabTextContent() {
    creationContent.textContent = creationContent.innerText;
    creationContent.toggleAttribute('contenteditable', false);
    editContent.textContent = 'Edit';
    editContent.addEventListener('click', contentEdit);
}

function timerEdit() {
    timerContent.toggleAttribute('contenteditable', true);
    timerContent.textContent = timerContent.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(timerContent.firstChild, 0, timerContent.lastChild, timerContent.textContent.length);
    completeTimerEdit();
}

function completeTimerEdit() {
    editTimer.removeEventListener('click', timerEdit);
    editTimer.textContent = 'Add';
    editTimer.addEventListener('click', grabTextTimer);
}

function grabTextTimer() {
    timerContent.textContent = timerContent.innerText;
    timerContent.toggleAttribute('contenteditable', false);
    editTimer.textContent = 'Edit';
    editTimer.addEventListener('click', timerEdit);
}

export { titleEdit, contentEdit, timerEdit, editTitle, editContent, editTimer }