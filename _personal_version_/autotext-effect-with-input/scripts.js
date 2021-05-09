const formEl = document.getElementById("form");
const inputEl = document.getElementById("user-input")
const textEl = document.getElementById("text")
const fasterBtn = document.getElementById("faster")
const slowerBtn = document.getElementById("slower")
let letterIndex = 1;
let typingSpeed = 400;
let text = ""

writeText()

function writeText() {
    textEl.innerText = text.slice(0, letterIndex);
    letterIndex++

    if (letterIndex > text.length) {
        letterIndex = 1;
    }

    setTimeout(() => {
        writeText()
    }, typingSpeed);

}


fasterBtn.addEventListener("click", () => {
    typingSpeed = typingSpeed / 2
    if (typingSpeed < 30) {
        typingSpeed = 30
    }

    console.log(typingSpeed)

})
slowerBtn.addEventListener("click", () => {
    typingSpeed = typingSpeed * 2
    if (typingSpeed > 2000) {
        typingSpeed = 2000;
    }
    console.log(typingSpeed)


})



form.addEventListener("submit", (e) => {
    e.preventDefault()
    text = inputEl.value;

    if (inputEl.value) {
        inputEl.value = ""
    }

})






// const textEl = document.getElementById("text");
// const speedEl = document.getElementById("speed");
// const text = "We love programming"
// let index = 1;

// let speed = 200;


// writeText()

// function writeText() {
//     //Getting the current text of the text element and slicing it 
//     // the slice gets a part of an array in the paramets
//     // slice from the index 0 to the current index variable (1)
//     // then increments the index 
//     textEl.innerText = text.slice(0, index)
//     index++;

//     if (index > text.length) {
//         index = 1;
//     }

//     setTimeout(() => {
//         writeText()
//     }, speed);
// }

// //when divided by the input value, the speed increases
// // because its in milliseconds. 200ms is slower than 100ms
// speedEl.addEventListener("input", (e) => {
//     speed = 200 / e.target.value
// })