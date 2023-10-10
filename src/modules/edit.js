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
    const text = document.getSelection();
    console.log(title.textContent.length);
    // fix the focus offset
    text.setBaseAndExtent(title.firstChild, 0, title.lastChild, title.textContent.length);
    completeTitleEdit();
    title.addEventListener('click', titleEdit);
}

function completeTitleEdit() {
    editTitle.removeEventListener('click', titleEdit);
    editTitle.textContent = 'Add';
    editTitle.addEventListener('click', () => {
        title.toggleAttribute('contenteditable', false);
        editTitle.textContent = 'Edit';
    })
}

function contentEdit() {
    creationContent.setAttribute('contenteditable', true);
    const text = document.getSelection();
    text.setBaseAndExtent(creationContent.firstChild, 0, creationContent.lastChild, 47);
}

function timerEdit() {
    timerContent.setAttribute('contenteditable', true);
    const text = document.getSelection();
    text.setBaseAndExtent(timerContent.firstChild, 0, timerContent.lastChild, 18);
}

export { titleEdit, contentEdit, timerEdit, editTitle, editContent, editTimer }