const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profileImage = document.getElementById("profile-img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_text = document.querySelectorAll(".animated-bg-text")

setTimeout(() => {
    getData();
}, 2000);

function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/random" alt="header-image">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, aliquam.';
    profileImage.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile-pic">';
    name.innerHTML = 'Joe Doe';
    date.innerHTML = 'Apr 27, 2021';

    animated_bgs.forEach(bg => {
        bg.classList.remove('animated-bg')

    });


    animated_bgs_text.forEach(bg => {
        bg.classList.remove('animated-bg-text')

    });
}