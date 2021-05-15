const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".deleteAll");

const notes = JSON.parse(localStorage.getItem("notes"))



if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click", () => {

    addNewNote("")

})


deleteAllBtn.addEventListener("click", () => {
    deleteAllNotes()
})



function addNewNote(writtenText) {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${writtenText ? "": "hidden"}"></div>
    <textarea class="${writtenText ? "hidden" : ""}"></textarea>
    `
    document.body.appendChild(note)

    const deleteBtn = note.querySelector(".delete")
    const editBtn = note.querySelector(".edit")
    const main = note.querySelector(".main")
    const textarea = note.querySelector("textarea")

    textarea.value = writtenText
    main.innerHTML = marked(writtenText)

    deleteBtn.addEventListener("click", () => {
        note.remove()
        updateLocalStorage()
    })

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden")
        textarea.classList.toggle("hidden")
    })

    textarea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);


        updateLocalStorage()
    })




}

function deleteAllNotes() {
    const notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        note.remove();
        updateLocalStorage()
    })

}

function updateLocalStorage() {
    const notesText = document.querySelectorAll("textarea")

    const notes = []


    notesText.forEach(note => notes.push(note.value))

    console.log(notes)

    localStorage.setItem('notes', JSON.stringify(notes))

}