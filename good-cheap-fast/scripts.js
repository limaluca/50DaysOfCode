const goodCheck = document.getElementById("good");
const cheapCheck = document.getElementById("cheap");
const fastCheck = document.getElementById("fast");

const checkBoxes = [goodCheck, cheapCheck, fastCheck];


checkBoxes.forEach(checkbox => checkbox.addEventListener("click", () => {
    if (checkbox.classList.contains("active")) {
        checkbox.classList.remove("active")
    } else {
        checkbox.classList.add("active")
    }
}));