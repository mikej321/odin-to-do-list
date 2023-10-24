import { toDoArr } from "./edit";
import { panes, rewriteToPage } from "./change";

function deleteToDo(arr) {
    document.addEventListener('click', (event) => {    
        let deleteEvent = event.target;
        if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane') && arr.length !== 0) {
            arr.splice(deleteEvent.parentElement.parentElement.id, 1);
            const localArr = JSON.parse(localStorage.getItem('projects'));
            localArr.splice(deleteEvent.parentElement.parentElement.id, 1);
            localStorage.setItem('projects', JSON.stringify(localArr));
            rewriteToPage(toDoArr);
        } else if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane') && arr.length === 0) {
            arr.splice(deleteEvent.parentElement.parentElement.id, 1);
            const localArr = JSON.parse(localStorage.getItem('projects'));
            localArr.splice(deleteEvent.parentElement.parentElement.id, 1);
            localStorage.setItem('projects', JSON.stringify(localArr));
            while (panes.firstChild) {
                panes.removeChild(panes.firstChild);
            }
        } 
    })
}

export { deleteToDo };