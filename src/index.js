import './style.css';
import { icons, addBeat, removeBeat } from './modules/beat';
import { plusButton, arrow, slideOutPage, complete, slideInPage } from './modules/set';
import { toDoArr, titleEdit, editTitle, contentEdit, editContent, timerEdit, editTimer, projects } from './modules/edit';
import { editPane } from './modules/change';
import { deleteToDo } from './modules/delete';


addBeat();
removeBeat();


plusButton.addEventListener('click', slideInPage);
complete.addEventListener('click', slideOutPage);
arrow.addEventListener('click', slideOutPage);
editTitle.addEventListener('click', titleEdit);
editContent.addEventListener('click', contentEdit);
editTimer.addEventListener('click', timerEdit);
editPane();
deleteToDo(toDoArr);


