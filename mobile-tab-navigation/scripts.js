const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        showContent(idx)
        showActive(idx)
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove("show"))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove("active"))
}

function showContent(index) {
    contents[index].classList.add("show")
}

function showActive(index) {
    listItems[index].classList.add("active")
}