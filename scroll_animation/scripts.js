const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();


function checkBoxes() {
    const mininumHeight = 0.7; //This is set the bottomTrigger aways to 80%.
    const bottomTrigger = window.innerHeight * mininumHeight;


    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < bottomTrigger) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }

    })


}