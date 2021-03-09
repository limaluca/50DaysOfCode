const joke = document.getElementById("joke");
const jokeButton = document.getElementById("joke-button");

generateJoke();

jokeButton.addEventListener("click", generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()

    joke.innerHTML = data.joke;
    // .then(response => response.json())
    // .then((data) => {
    //     joke.innerHTML = data.joke
    // })
}