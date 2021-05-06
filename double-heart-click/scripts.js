const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")
let lastClick = 0;
let heartTimes = 0;

loveMe.addEventListener("click", (e) => {

    if (lastClick === 0) {
        lastClick = new Date().getTime();
    } else if ((new Date().getTime() - lastClick) < 800) {
        createHeart(e)
        lastClick = 0;
    } else {
        lastClick = new Date().getTime()
    }
})

const createHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const xAxis = e.clientX;
    const yAxis = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = xAxis - leftOffset;
    const yInside = yAxis - topOffset;

    console.log(xInside, yInside)


    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    heartTimes++
    times.innerText = heartTimes

    loveMe.appendChild(heart)
    setTimeout(() => {
        loveMe.removeChild(heart)
    }, 600);
}