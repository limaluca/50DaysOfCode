const images = document.getElementById("imgs")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const img = document.querySelectorAll("#imgs img")

// getting the index
// getting the interval that
// the images will change 
// get the image

let currentIndex = 0;
let interval = setInterval(run, 2000)

function run() {
    currentIndex++;
    changeImage()
}

function changeImage() {
    if (currentIndex > img.length - 1) {
        currentIndex = 0;

    } else if (currentIndex < 0) {
        currentIndex = img.length - 1
    }

    images.style.transform = `translateX(${- currentIndex * 500}px)`

}

function resertInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftButton.addEventListener("click", () => {
    currentIndex--;
    changeImage()
    resertInterval()

})


rightButton.addEventListener("click", () => {
    currentIndex++;
    changeImage()
    resertInterval()
})