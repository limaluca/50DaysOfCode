const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active")
    })

});