const hexButtons = document.querySelectorAll(".hex");
const instruction = document.getElementsByClassName("instruction");


hexButtons.forEach(button => {
    button.addEventListener("click", () => {

        console.log(button.innerText);


    })
});