import { toDoArr } from "./edit";
import { rewriteToPage } from "./change";

function deleteToDo(arr) {
    document.addEventListener('click', (event) => {    
        let deleteEvent = event.target;
        if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane')) {
            arr.splice(deleteEvent.parentElement.parentElement.id, 1);
            const localArr = JSON.parse(localStorage.getItem('projects'));
            localArr.splice(deleteEvent.parentElement.parentElement.id, 1);
            localStorage.setItem('projects', JSON.stringify(localArr));
            rewriteToPage(toDoArr);
        }
    })
}

export { deleteToDo };