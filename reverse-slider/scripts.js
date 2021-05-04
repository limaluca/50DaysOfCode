const sliderContainer = document.querySelector(".slider-container")
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const slidesLength = slideLeft.querySelectorAll("div").length;
let activeSlide = 0;


slideLeft.style.top = `-${(slidesLength-1)* 100}vh`


upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlide++
        if (activeSlide > slidesLength - 1) {
            activeSlide = 0;

        }
    } else if (direction === "down") {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = 3;


        }
    }


    slideRight.style.transform = `translateY(-${activeSlide*sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlide*sliderHeight}px)`



}