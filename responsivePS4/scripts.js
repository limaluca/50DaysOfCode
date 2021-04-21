const menuBtn = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list")
const columnTwo = document.querySelector(".col-2")
const rowEl = document.querySelector(".row")

menuList.style.maxHeight = "0px";


menuBtn.addEventListener("click", () => {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px"
        columnTwo.style.marginTop = "73px"
        menuBtn.style.transform = "rotate(44deg)"
        rowEl.style.margin = "50px 0"

    } else {
        menuList.style.maxHeight = "0px"
        columnTwo.style.marginTop = "-50px"
        menuBtn.style.transform = "rotate(0deg)"


    }
})