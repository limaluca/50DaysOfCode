const mainImage = document.querySelector(".main-image img")
const minorImages = document.querySelectorAll(".minor-image")
const quantityInput = document.querySelector(".quantity input")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const cartButton = document.querySelector(".add-to-cart")
const productPage = document.querySelector(".product-page")
const shopCart = document.querySelector(".shop-cart")
const cards = document.querySelectorAll(".card")
let quantity = 1;



for (let card of cards) {
    card.addEventListener("click", () => {
        const cardId = card.getAttribute("id")
        window.location.href = `/product?id=${cardId}`
    })
}

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

cartButton.addEventListener("click", () => {
    if (productPage.classList.contains("active")) {
        productPage.classList.remove("active")
        shopCart.style.visibility = "hidden"


    } else {
        productPage.classList.add("active")
        shopCart.style.visibility = "visible"

    }

})