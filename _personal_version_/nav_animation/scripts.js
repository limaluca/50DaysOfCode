const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const navList = document.getElementById("listNav");

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (navList.style.visibility == "hidden") {
        navList.style.visibility = "visible"
    } else {
        setTimeout(() => {
            navList.style.visibility = "hidden"
        }, 700)

    }
})