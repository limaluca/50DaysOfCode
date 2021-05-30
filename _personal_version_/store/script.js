const mainImage = document.querySelector(".main-image img")
const minorImages = document.querySelectorAll(".minor-image")
const quantityInput = document.querySelector(".quantity input")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
let quantity = 1;



// Changes the images on the product page
minorImages.forEach(image => {
    image.addEventListener("click", () => {
        mainImage.src = image.src
    })
});


increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity
})
decreaseBtn.addEventListener("click", () => {
    quantity--;
    if (quantity <= 1) {
        quantity = 1;
    }
    quantityInput.value = quantity
})