const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('.topSection > h1');
const editTitle = document.querySelector('.editTitle');
const creationContent = document.querySelector('.middleSection > p');
const editContent = document.querySelector('.editContent');
const timerContent = document.querySelector('.finalSection > p');
const editTimer = document.querySelector('.editTimer');
const main = document.querySelector('main');
const projects = document.querySelectorAll('.project');
const panes = document.querySelector('.toDoPanes');
let elements;

import { complete } from './set';
import { truncateText } from './truncate';

// change the learn more tab to EDIT

/* allow the edit to pull down a list that, when one is selected,
pulls back down the edit page to change the info */


let toDoArr = [];


class Projects {
    constructor(title, content, timer) {
        this.title = title,
        this.content = content;
        this.timer = timer;
    }

    writeToPage() {
        // find a way to add items to the sidebar without having to close it
        const newDiv = document.createElement('div');
        
        for (let i = toDoArr.length - 1; i < toDoArr.length; i++) {     
            newDiv.classList.add('project');
            newDiv.classList.add(`project${i + 1}`);
            newDiv.id = i;

            const projectInfo = document.createElement('div');
            projectInfo.classList.add('projectInfo');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = toDoArr[i].title;
            truncateText(projectTitle, projectTitle.textContent, 16);
            projectInfo.append(projectTitle);
            
            const projectContent = document.createElement('p');
            projectContent.textContent = toDoArr[i].content;
            truncateText(projectContent, projectContent.textContent, 16);
            projectInfo.append(projectContent);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            const projectTimer = document.createElement('p');
            projectTimer.textContent = toDoArr[i].timer;
            timeContainer.append(projectTimer);

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');

            const deletePane = document.createElement('button');
            deletePane.classList.add('deletePane');
            buttonContainer.append(deletePane);

            const minusButton = document.createElement('i');
            minusButton.classList.add('fa-solid');
            minusButton.classList.add('fa-minus');
            minusButton.classList.add('fa-md');
            deletePane.append(minusButton);

            const expand = document.createElement('button');
            expand.classList.add('expand');
            expand.textContent = 'Expand';
            buttonContainer.append(expand);
            
            newDiv.append(projectInfo);
            newDiv.append(timeContainer);
            newDiv.append(buttonContainer);
            panes.append(newDiv);

            elements = document.querySelectorAll('.project');   
            expand.addEventListener('click', () => {
              if (!newDiv.classList.contains('expanded')) {
                  projectTitle.textContent = toDoArr[i].title;
                  projectContent.textContent = toDoArr[i].content;
                  newDiv.classList.add('expanded');
                  expand.textContent = 'Contract';
              } else {
                truncateText(projectTitle, projectTitle.textContent, 16);
                truncateText(projectContent, projectContent.textContent, 16);
                newDiv.classList.remove('expanded');
                expand.textContent = 'Expand';
              }
            }
            );
        }

        setTimeout(() => {
            let opacity = 0;
            let transformation = -25;
            let intervalID = setInterval(() => {
                if (opacity < 1 && transformation < 0) {
                    opacity = opacity + .20;
                    transformation = transformation + 5;
                    newDiv.style.opacity = opacity;
                    newDiv.style.transform = `translate(0, ${transformation}px)`;
                } else {
                    clearInterval(intervalID);
                }
            }, 15)
        }, 300)
    }
    
    
}

function removeFocusTitle() {
    title.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            
            event.preventDefault();
            title.removeAttribute('contenteditable');
            title.blur();
            grabTextTitle();
        }
    })

}

function removeFocusContent() {
    creationContent.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            creationContent.removeAttribute('contenteditable');
            creationContent.blur();
            grabTextContent();
        }
    })
}

function removeFocusTimer() {
    timerContent.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            timerContent.removeAttribute('contenteditable');
            timerContent.blur();
            grabTextTimer();
        }
    })
}

function titleEdit() {
    title.toggleAttribute('contenteditable', true);
    title.textContent = title.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(title.firstChild, title.textContent.length, title.lastChild, title.textContent.length);
    removeFocusTitle();
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
    text.setBaseAndExtent(creationContent.firstChild, creationContent.textContent.length, creationContent.lastChild, creationContent.textContent.length);
    removeFocusContent(creationContent);
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
    removeFocusTimer();
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

function resetForm() {
    title.textContent = 'Title of clicked to do item';
    creationContent.textContent = 'Notes that will appear when creating to do item';
    timerContent.textContent = 'Notification timer';
}

function createProject() {
    const newProject = new Projects(title.textContent, creationContent.textContent, timerContent.textContent);
    toDoArr.push(newProject);
    newProject.writeToPage();
    resetForm();

}

complete.addEventListener('click', createProject);

 

export { titleEdit, contentEdit, timerEdit, createProject, editTitle, editContent, editTimer, projects, toDoArr, title, creationContent, timerContent, panes, elements }

