const classroom = document.querySelector(".classroom")
const studentsWrapper = document.querySelector(".students")
const deskWrapper = document.querySelector(".desks")
const button = document.querySelector(".hide")



button.addEventListener("click", () => {
    if (studentsWrapper.style.visibility == "visible") {
        studentsWrapper.style.visibility = "hidden";
        deskWrapper.style.transform = "translateX(33%)"
    } else {
        deskWrapper.style.transform = "translateX(0)"
        setTimeout(() => {
            studentsWrapper.style.visibility = "visible";

        }, 500);
    }

})