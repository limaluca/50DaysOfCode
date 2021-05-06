const APIURL = 'https://api.github.com/users/';
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main")
const userName = document.querySelector(".user-info h2")
const userBio = document.querySelector(".user-info p")




async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)



    } catch (error) {
        console.log(error) //this only appears on console so we need to show something on the screen
        if (error.response.status === 404) {
            createErrorCard("There is no user with such user name");
        }

    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created")

        addReposToCard(data)



    } catch (error) {
        console.log(error) //this only appears on console so we need to show something on the screen
        createErrorCard("No repos found");

    }

}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h3>${message}</h3>
        </div>
    `
    main.innerHTML = cardHTML;
}


function addReposToCard(repos) {
    const reposElement = document.getElementById("repos")
    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoElement = document.createElement('a')
            repoElement.classList.add("repo");
            repoElement.href = repo.html_url
            repoElement.target = "_blank"
            repoElement.innerText = repo.name

            reposElement.appendChild(repoElement)
        });
}

function createUserCard(user) {
    const cardHTML = `        
    <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="user_avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
 
                </div>
            </div>
        </div>`
    main.innerHTML = cardHTML;

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value

    if (user) {
        getUser(user);
        search.value = ""
    }
})