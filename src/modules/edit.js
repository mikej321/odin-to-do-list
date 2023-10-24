const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('.topSection > h1');
const editTitle = document.querySelector('.editTitle');
const creationContent = document.querySelector('.middleSection > p');
const editContent = document.querySelector('.editContent');
const timerValue = document.querySelector('#setTimer');
const main = document.querySelector('main');
const projects = document.querySelectorAll('.project');
const panes = document.querySelector('.toDoPanes');
let elements;
let newProject;

import notification from '../notification.mp3';
import { complete } from './set';
import { truncateText } from './truncate';

let toDoArr = [];

window.onload = setToDoArr();

function setToDoArr() {
    if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects')) !== null) {
        let mainArr = JSON.parse(localStorage.getItem('projects'));
        toDoArr = mainArr;
        console.log(toDoArr)
    } else if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects')) === null) {
        return;
    }
}


class Projects {
    constructor(title, content, timer) {
        this.title = title,
        this.content = content;
        this.timer = timer;
    }

    writeToPage() {

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
            
            // timer stuff

            const timerP = document.createElement('p');
            timerP.classList.add('timerP');
            timeContainer.append(timerP);

            function countdownTimer() {
                const targetDate = new Date(toDoArr[i].timer);
                let targetTime = targetDate.getTime();
                let intervalID = setInterval(() => {
                    const today = new Date().getTime();
                    let leftoverTime = (targetTime - today) / 1000;
                    
                    if (leftoverTime <= 0) {
                        timerP.textContent = 'Time\'s up';
                        playNotification();
                        clearInterval(intervalID);
                    } else {
                        const days = Math.floor(leftoverTime / 60 / 60 / 24);
                        const hours = Math.floor(leftoverTime / 60 / 60 % 24);
                        const minutes = Math.floor(leftoverTime / 60 % 60);
                        const seconds = Math.floor(leftoverTime % 60);
                        
                        timerP.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                    }
                }, 1000)
                
            }
            
            countdownTimer();
            
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

let notify = new Audio(notification);

function playNotification() {
    notify.play();
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



function titleEdit() {
    title.toggleAttribute('contenteditable', true);
    title.textContent = title.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(title.firstChild, 0, title.lastChild, title.textContent.length);
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
    text.setBaseAndExtent(creationContent.firstChild, 0, creationContent.lastChild, creationContent.textContent.length);
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

// timer edit function

function addToStorage(arr) {
    localStorage.setItem('projects', JSON.stringify(arr));
}

function retrieveProjects() {
    if (localStorage.getItem('projects') !== null) {
        const userArr = JSON.parse(localStorage.getItem('projects'));
        console.table(userArr[0], userArr[1]);
        writeRetrievalData(userArr)
    } else {
        return;
    }
}

let newDiv;

function writeRetrievalData(arr) {
    
    for (let i = 0; i < arr.length; i++) {     
            newDiv = document.createElement('div');
            newDiv.classList.add('project');
            newDiv.classList.add(`project${i + 1}`);
            newDiv.id = i;

            const projectInfo = document.createElement('div');
            projectInfo.classList.add('projectInfo');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = arr[i].title;
            truncateText(projectTitle, projectTitle.textContent, 16);
            projectInfo.append(projectTitle);
            
            const projectContent = document.createElement('p');
            projectContent.textContent = arr[i].content;
            truncateText(projectContent, projectContent.textContent, 16);
            projectInfo.append(projectContent);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            // timer stuff

            const timerP = document.createElement('p');
            timerP.classList.add('timerP');
            timeContainer.append(timerP);
            
            function countdownTimer() {
                const targetDate = new Date(arr[i].timer).getTime()
                let intervalID = setInterval(() => {
                    const today = new Date().getTime();
                    let leftoverTime = (targetDate - today) / 1000;
                    
                    if (leftoverTime <= 0) {
                        timerP.textContent = 'Time\'s up';
                        playNotification();
                        clearInterval(intervalID);
                    } else {
                        const days = Math.floor(leftoverTime / 60 / 60 / 24);
                        const hours = Math.floor(leftoverTime / 60 / 60 % 24);
                        const minutes = Math.floor(leftoverTime / 60 % 60);
                        const seconds = Math.floor(leftoverTime % 60);
                        
                        timerP.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                    }
                }, 1000)
                
            }
            
            countdownTimer();
            
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
                    projectTitle.textContent = arr[i].title;
                    projectContent.textContent = arr[i].content;
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




function resetForm() {
    title.textContent = 'Title of clicked to do item';
    creationContent.textContent = 'Notes that will appear when creating to do item';
    timerValue.value = '';
}

// start here with creating a timer date object in this createProject function
function createProject() {
    if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects'))) {
        let mainArr = JSON.parse(localStorage.getItem('projects'));
        toDoArr = mainArr;
        const timerDate = new Date(timerValue.value);
        newProject = new Projects(title.textContent, creationContent.textContent, timerDate);
        toDoArr.push(newProject);
        addToStorage(toDoArr);
        console.log(toDoArr);
        newProject.writeToPage();
        resetForm();
    } else {
        const timerDate = new Date(timerValue.value);
        newProject = new Projects(title.textContent, creationContent.textContent, timerDate);
        toDoArr.push(newProject);
        addToStorage(toDoArr);
        console.log(toDoArr);
        newProject.writeToPage();
        resetForm();
    }
}

complete.addEventListener('click', (event) => {
    try {
        event.preventDefault();
        if (timerValue.value === '') {
            throw new Error('Please enter a date');
            return;
        } else {
            createProject();
        }
    } catch(error) {
        console.log(error);
    }
});

 

export { titleEdit, contentEdit, createProject, editTitle, editContent, projects, toDoArr, title, creationContent, panes, elements, timerValue, notify, playNotification, retrieveProjects }

