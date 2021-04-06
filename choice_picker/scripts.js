const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");


textarea.focus();

textarea.addEventListener("keyup", (event) => {
    createTags(event.target.value);

    if (event.key == 'Enter') {
        setTimeout(() => {
                event.target.value = '';
            }, 10) // wait 10 mili seconds
        randomSelect()
    }
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

function randomSelect() {
    const times = 10; //times its going to highlight before stops

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highLightTag(randomTag)
        setTimeout(() => {
            unhighLightTag(randomTag);
        }, 100)

    }, 100); //every 100 miliseconds


    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highLightTag(randomTag);

        }, 100)

    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)];


}

function highLightTag(tag) {
    tag.classList.add("highlight")
}

function unhighLightTag(tag) {
    tag.classList.remove("highlight")
}