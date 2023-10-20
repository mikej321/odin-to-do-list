// Change the 'notification timer' p element to an input:datetime-local element

/* Get rid of all of the logic dealing with the notification timer element and have
it replaced with logic that deals with the input. The complete button will submit the 
data that I need for it. Use CTRL + F to find all of the logic that deals with 'timer'
 */

// learn more about date-fns tomorrow as well

import './style.css';
import { icons, addBeat, removeBeat } from './modules/beat';
import { plusButton, arrow, slideOutPage, complete, slideInPage } from './modules/set';
import { toDoArr, titleEdit, editTitle, contentEdit, editContent, projects } from './modules/edit';
import { editPane } from './modules/change';
import { deleteToDo } from './modules/delete';

// logic for pulsing the icons in the navbar
addBeat();
removeBeat();


plusButton.addEventListener('click', slideInPage);
complete.addEventListener('click', slideOutPage);
arrow.addEventListener('click', slideOutPage);
editTitle.addEventListener('click', titleEdit);
editContent.addEventListener('click', contentEdit);
editPane();
deleteToDo(toDoArr);


