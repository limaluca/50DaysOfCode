const filled = document.querySelector(".filled")
const empties = document.querySelectorAll(".empty")

filled.addEventListener("dragstart", dragStart);
filled.addEventListener("dragend", dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart() {
    console.log("start")

    this.className += " hold" //this will append hold into the other existent classes
    setTimeout(() => this.className = "invisible", 0);
}


function dragEnd() {
    console.log("end")

    this.className = "filled";

}


function dragOver(e) {
    console.log("over")

    e.preventDefault()
}


function dragEnter(e) {
    console.log("enter")
    this.className += " hovered"
    e.preventDefault()
}


function dragLeave() {
    console.log("drag leave")
    this.className = "empty"


}


function dragDrop() {
    console.log("drop")
    this.className = "empty";
    this.append(filled)
}