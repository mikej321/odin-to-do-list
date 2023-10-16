import { complete, slideInPage, slideOutPage } from './set';
import { projects, toDoArr, title, creationContent, timerContent, panes, elements, createProject } from './edit';


function editPane() {
    document.addEventListener('click', (event) => {
        let tarElement = event.target;
        if (tarElement.classList.contains('project')) {
            title.textContent = toDoArr[tarElement.id].title;
            creationContent.textContent = toDoArr[tarElement.id].content;
            timerContent.textContent = toDoArr[tarElement.id].timer;
            slideInPage();
            /* Make a separate function for the complete
            button in this instance that changes the toDoArr
            when editing after clicking on a pane to change,
            have it rewrite all of the panes and make sure that 
            it doesn't create a new pane when clicking complete. */
            complete.removeEventListener('click', createProject);
            complete.addEventListener('click', function changePane() {
                toDoArr[tarElement.id].title = title.textContent;
                toDoArr[tarElement.id].content = creationContent.textContent;
                toDoArr[tarElement.id].timer = timerContent.textContent;
                slideOutPage();
                rewriteToPage();
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

function rewriteToPage() {
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
        projectTitle.textContent = toDoArr[i].title;
            projectInfo.append(projectTitle);
            
            const projectContent = document.createElement('p');
            projectContent.textContent = toDoArr[i].content;
            projectInfo.append(projectContent);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            const projectTimer = document.createElement('p');
            projectTimer.textContent = toDoArr[i].timer;
            timeContainer.append(projectTimer);
            
            newDiv.append(projectInfo);
            newDiv.append(timeContainer);
            panes.append(newDiv);
            
            newElements = document.querySelectorAll('.project');   
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

    
    
    
    export { editPane };