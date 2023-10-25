import './style.css';
import { icons, addBeat, removeBeat } from './modules/beat';
import { plusButton, arrow, slideOutPage, complete, slideInPage } from './modules/set';
import { toDoArr, titleEdit, editTitle, contentEdit, editContent, projects, retrieveProjects } from './modules/edit';
import { editPane } from './modules/change';
import { deleteToDo } from './modules/delete';

if (JSON.parse(localStorage.getItem('projects')) !== null && JSON.parse(localStorage.getItem('projects')).length > 0) {
    window.onload = retrieveProjects();
}

// logic for pulsing the icons in the navbar
addBeat();
removeBeat();


plusButton.addEventListener('click', slideInPage);
complete.addEventListener('click', slideOutPage);
arrow.addEventListener('click', slideOutPage);
editTitle.addEventListener('click', titleEdit);
editContent.addEventListener('click', contentEdit);
editPane();
deleteToDo();




