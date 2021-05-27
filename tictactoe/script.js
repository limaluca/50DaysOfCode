const boxes = document.querySelectorAll(".box")
const btn = document.querySelector(".btn")
let turn = 1;


btn.addEventListener("click", () => {
    newGame()
})



boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText == "") {
            const player = createPlayerElement(turn)
            box.appendChild(player);

        } else if (turn === 10) {
            turn = 1;
            newGame()
        }




    })

});





function createPlayerElement(playerTurn) {
    const turnElement = document.createElement("span");
    if (playerTurn % 2 == 0) {
        turnElement.innerText = "X"
    } else {
        turnElement.innerText = "O"
    }

    turn++

    if (turn === 10) {
        console.log("cabo")
    }

    return turnElement
}

function newGame() {
    boxes.forEach(box => {
        box.innerText = ""
    })
}