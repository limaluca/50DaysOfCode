const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector(".final")
const replay = document.getElementById("replay")


runAnimation()

function resetDom() {
    counter.classList.remove("hide")
    finalMessage.classList.remove("show")

    nums.forEach((num) => {
        num.classList.value = ""
    })

    nums[0].classList.add("in")
}

function runAnimation() {
    nums.forEach((number, index) => {
        const nextToLast = nums.length - 1;


        number.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && index != nextToLast) {
                number.classList.remove("in")
                number.classList.add("out")
            } else if (e.animationName === "goOut" && number.nextElementSibling) {
                number.nextElementSibling.classList.add("in")
            } else {
                counter.classList.add("hide")
                finalMessage.classList.add("show")
            }
        })


    })
}

replay.addEventListener("click", () => {
    resetDom()
    runAnimation()
})