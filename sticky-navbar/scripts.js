const nav = document.querySelector(".nav")

window.addEventListener("scroll", fixNav);

function fixNav() {
    const delayActive = 250; //this will make the active class addition to be delayed
    if (window.scrollY > nav.offsetHeight + delayActive) {
        nav.classList.add("active");

    } else {
        nav.classList.remove("active");
    }
}