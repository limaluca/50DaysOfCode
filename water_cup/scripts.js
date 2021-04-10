const smallCups = document.querySelectorAll(".small-cup");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained")

updateBigCup() //calling here to the litters remained can appear
smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightCups(index))
})





function highlightCups(index) {

    if (smallCups[index].nextElementSibling !== null) {
        if (smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")) {
            index--
        }
    } else if (smallCups[index].classList.contains("full")) {
        index--
    }





    smallCups.forEach((cup, index2) => {
        if (index >= index2) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }

    })

    updateBigCup()



}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".small-cup.full").length;

    const totalCups = smallCups.length;
    const cupHeight = 330;


    if (fullCups == 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups/totalCups * cupHeight}px`
        percentage.innerText = `${fullCups/totalCups *100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${(2- (250 * fullCups / 1000))}L`
    }

}