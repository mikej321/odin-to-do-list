const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('.topSection > h1');
const editTitle = document.querySelector('.editTitle');
const creationContent = document.querySelector('.middleSection > p');
const editContent = document.querySelector('.editContent');
const timerContent = document.querySelector('.finalSection > p');
const editTimer = document.querySelector('.editTimer');
const sidebar = document.querySelector('.sidebar');

import { complete } from './set';
import { menu, main, projects, line1, line2, line3 } from './menu';

let toDoArr = [];


class Projects {
    constructor(title, content, timer) {
        this.title = title,
        this.content = content;
        this.timer = timer;
    }

    writeToPage() {
        for (let i = 0; i < toDoArr.length; i++) {
            

            const newDiv = document.createElement('div');
            newDiv.classList.add('project');
            newDiv.classList.add(`project${i + 1}`);

            const pageTitle = document.createElement('h3');
            pageTitle.textContent = toDoArr[i].title;
            newDiv.append(pageTitle);

            const pageContent = document.createElement('ul');
            const pageContentTab1 = document.createElement('li');
            pageContent.append(pageContentTab1);
            pageContentTab1.textContent = toDoArr[i].content;

            const pageContentTab2 = document.createElement('li');
            pageContentTab2.textContent = toDoArr[i].timer;
            pageContent.append(pageContentTab2);

            newDiv.append(pageContent);

            sidebar.append(newDiv);

            const elements = document.querySelectorAll('.project');
            
            function menuEvent() {
                menu.addEventListener('click', () => {
                    main.classList.toggle('navOpen');
                    elements.forEach((element) => {
                        console.log(element);
                        element.classList.toggle('projectOpen');
                    })
                    line1.classList.toggle('upperAnimate');
                    line2.classList.toggle('middleAnimate');
                    line3.classList.toggle('lowerAnimate');
                })
            }

            menuEvent();
        }

        
    }
}

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

complete.addEventListener('click', () => {
    const newProject = new Projects(title.textContent, creationContent.textContent, timerContent.textContent);
    toDoArr.push(newProject);
    newProject.writeToPage();
    
})

export { titleEdit, contentEdit, timerEdit, editTitle, editContent, editTimer }