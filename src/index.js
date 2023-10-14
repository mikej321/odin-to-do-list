/* My 'todos' are going to be objects that will be dynamically
created. Use either factory functions or classes to generate them */

/* At a minimum, they should have a 'title', 'description', 'dueDate'
and 'priority'. I might also want to include 'notes' or even a 'checklist' */

/* My todo list should have 'projects' or seperate lists of 'todos'.
When they first open the app, there should be some sort of 'default'
project which all of their todos are put. Users should be able to create
new projects and choose which project their todos go into.
Ex. Have the projects tabs say something like 'chores', 'work', 'etc' */

/* I should separate my application logic (i.e. creating new todos,
    setting todos as complete, changing todo priority, etc) from the
    DOM-related stuff, keeping them all in separate modules */

/* The look of the interface is up to me, but it should be able to do
the following:

1. View all projects 

2. View all todos in each project (probably just the title and dueDate...
   perhaps changing the color for different priorities)

3. Expand a single todo to see/edit its details

4. delete a todo

*/

import './style.css';
import { icons, addBeat, removeBeat } from './modules/beat';
import { plusButton, arrow, slideOutPage, complete, slideInPage } from './modules/set';
import { titleEdit, editTitle, contentEdit, editContent, timerEdit, editTimer } from './modules/edit';

// logic for pulsing the icons in the navbar
addBeat();
removeBeat();


plusButton.addEventListener('click', slideInPage);
complete.addEventListener('click', slideOutPage);
arrow.addEventListener('click', slideOutPage);
editTitle.addEventListener('click', titleEdit);
editContent.addEventListener('click', contentEdit);
editTimer.addEventListener('click', timerEdit);
