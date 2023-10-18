import { toDoArr } from "./edit";
import { rewriteToPage } from "./change";

function deleteToDo(arr) {
    document.addEventListener('click', (event) => {
        /* Program the delete button by tieing it to the id # of the click event.
        Tie it to the parent of the click event, or grandparent, depending on where it sits
        in the DOM. */
        let deleteEvent = event.target;
        if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane')) {
            arr.splice(deleteEvent.parentElement.parentElement.id, 1);
            rewriteToPage(toDoArr);
        }
    })
}

export { deleteToDo };