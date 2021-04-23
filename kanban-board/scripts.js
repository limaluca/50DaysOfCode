const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");



tasks.forEach(task => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);

});





function dragStart() {
    console.log("drag start")
    this.classList.add("is-dragging")
}

function dragEnd() {
    console.log("drag end")

    this.classList.remove('is-dragging')

}

columns.forEach(column => {
    column.addEventListener("dragenter", dragEnter)
    column.addEventListener("dragover", dragOver)
    column.addEventListener("dragleave", dragLeave)
    column.addEventListener("drop", dragDrop)

})

function dragEnter() {
    // log('DROPZONE: Enter in zone ')
}

function dragOver() {
    const cardBeingDragged = document.querySelector('.is-dragging')
    cardBeingDragged.style.visibility = "hidden"
    this.appendChild(cardBeingDragged)
    cardBeingDragged.style.visibility = "visible"

    //
}

function dragLeave() {
    console.log("drag leave")
}

function dragDrop() {
    console.log("dropd")
}