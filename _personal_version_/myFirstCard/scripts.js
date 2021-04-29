const container = document.querySelector(".container");
const card = document.querySelector(".card");
const image = document.querySelector(".card-image img");
//Moving animation of the whole card - not what I wanted
// container.addEventListener("mousemove", (e) => {
//     let xAxis = ((window.innerWidth / 2) - e.pageX) / 50; // the 2 makes the number next to the middle 
//     let yAxis = ((window.innerHeight / 2) - e.pageY) / 50; // the 10 is the intensity of the rotation

//     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`


// })

// animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    image.style.transform = "translateZ(200px) rotateZ(-15deg)";



});

// animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = `all 0.5s ease-out`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    image.style.transform = "translateZ(0)";

})