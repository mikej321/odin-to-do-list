import './style.css';
import { icons, addBeat, removeBeat } from './modules/beat';
import { plusButton, fadeOutPage, complete, fadeInPage } from './modules/set';
import { toDoArr, projects, retrieveProjects } from './modules/edit';

import { deleteToDo } from './modules/delete';


if (JSON.parse(localStorage.getItem('projects')) !== null && JSON.parse(localStorage.getItem('projects')).length > 0) {
    window.onload = retrieveProjects();
}

// logic for pulsing the icons in the navbar
addBeat();
removeBeat();

plusButton.addEventListener('click', fadeInPage);
complete.addEventListener('click', fadeOutPage);
deleteToDo();




