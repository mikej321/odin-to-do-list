import { complete, slideInPage, slideOutPage } from './set';
import { projects, toDoArr, title, creationContent, timerContent, panes, elements, createProject } from './edit';
import { truncateText } from './truncate';

function editPane() {
    document.addEventListener('click', (event) => {
        let tarElement = event.target;
        if (tarElement.classList.contains('project')) {
            title.textContent = toDoArr[tarElement.id].title;
            creationContent.textContent = toDoArr[tarElement.id].content;
            timerContent.textContent = toDoArr[tarElement.id].timer;
            slideInPage();
            complete.removeEventListener('click', createProject);
            complete.addEventListener('click', function changePane() {
                toDoArr[tarElement.id].title = title.textContent;
                toDoArr[tarElement.id].content = creationContent.textContent;
                toDoArr[tarElement.id].timer = timerContent.textContent;
                slideOutPage();
                rewriteToPage(toDoArr);
                reverseEditPage();
                complete.addEventListener('click', createProject);
                complete.removeEventListener('click', changePane);
            })
        }
    })
}



let newElements;

function reverseEditPage() {
    title.textContent = 'Title of clicked to do item';
    creationContent.textContent = 'Notes that will appear when creating to do item';
    timerContent.textContent = 'Notification Timer';
}

function rewriteToPage(arr) {
    while (panes.firstChild) {
        panes.removeChild(panes.firstChild);
    }
    
    
    for (let i = 0; i < toDoArr.length; i++) {     
        const newDiv = document.createElement('div');
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
        
        const projectTimer = document.createElement('p');
        projectTimer.textContent = arr[i].timer;
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
        
        newElements = document.querySelectorAll('.project');  
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
        }) 
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

    
    
    
    export { editPane, rewriteToPage };