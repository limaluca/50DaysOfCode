const progress = document.getElementById('progress');
const next = document.getElementById('next');
const previous = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

previous.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1;
    }
    update()
})


function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
            circle.style.backgroundColor = "#f0f0f0";

        } else {
            circle.classList.remove("active");
            circle.style.backgroundColor = "#fff";

        }
    })

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%';
    console.log(progress.style.width);

}