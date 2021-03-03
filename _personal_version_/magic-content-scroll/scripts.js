const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes()


function checkBoxes() {
    const windowPercentage = 0.7;
    const bottomTrigger = window.innerHeight * windowPercentage;



    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < bottomTrigger) {
            box.classList.add("show")
        } else {

            box.classList.remove("show")
        }
    });
}