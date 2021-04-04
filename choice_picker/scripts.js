const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");


textarea.focus();

textarea.addEventListener("keyup", (event) => {
    createTags(event.target.value);
})

function createTags(input) {
    let tags = input.split(",")
        .filter(tag => tag.trim() != "")
        .map(tag => tag.trim());

    tagsEl.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}