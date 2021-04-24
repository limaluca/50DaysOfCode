// Getting the items that will be dragged around 
const tasks = document.querySelectorAll(".task");

//Getting the items that will be the "drop zone"
const columns = document.querySelectorAll(".column");


//Those will be fired for the draggable items
tasks.forEach(task => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);

});

function dragStart() {
    console.log("drag start")
        // This class is added so we know which of the item is being dragged individually
    this.classList.add("is-dragging")
}

function dragEnd() {
    //this must be removed after the dragging is over
    // so we can drag other items
    this.classList.remove('is-dragging')

}

//Those will be fired when the item begins to be dragged 
columns.forEach(column => {
    column.addEventListener("dragenter", dragEnter)
    column.addEventListener("dragover", dragOver)
    column.addEventListener("dragleave", dragLeave)
    column.addEventListener("drop", dragDrop)

})

function dragEnter() {
    // log('DROPZONE: Enter in zone ')
}

function dragOver(e) {
    e.preventDefault();

    //
}

function dragLeave() {}

// The real dropping will only happen when the user releases it over a drop zone
function dragDrop(e) {
    e.preventDefault();

    // This will get the currently item being dragged by searching for a class
    const cardBeingDragged = document.querySelector('.is-dragging')

    //this will append the item on the "this" element that refers to the column, the drop zone
    this.appendChild(cardBeingDragged)

}