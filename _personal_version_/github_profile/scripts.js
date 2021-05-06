const APIURL = 'https://api.github.com/users/';
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main")





async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data)
        getUserRepos(username)

    } catch (error) {
        if (error.response.status === 404) {
            createErrorCard("Sorry, I couldn't find this user!")
        }
    }

}

async function getUserRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created")
        addReposToCard(data)

    } catch (error) {
        console.log(error)
    }

}

function createErrorCard(errorMessage) {
    const errorCard = `
        <div class="card" >
            <div class="error-card" >       
                <img src="/githubcat.png" alt="github-notfound">     
                <h2>${errorMessage}</h2>
            </div>
        </div>
    `

    main.innerHTML = errorCard;
}

function createUserCard(userName) {
    const userCard = `
        <div class="card">
            <img src="${userName.avatar_url}" alt="avatar of ${userName.name}" class="avatar" id="avatar">
            <div class="user-card">
                <h2>${userName.name}</h2>
                <p>${userName.bio}</p>
                <ul>
                    <li>${userName.followers} <strong>Followers</strong></li>
                    <li>${userName.following} <strong>Following</strong></li>
                    <li>${userName.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">

                </div>
            </div>

        </div>
    `

    main.innerHTML = userCard;

    form.style.transform = "translateY(440px)"


}

function addReposToCard(repos) {
    const reposElement = document.getElementById("repos")
    repos
        .slice(0, 4)
        .forEach(repo => {
            const repoElement = document.createElement('a');
            repoElement.classList.add("repo")
            repoElement.href = repo.html_url
            repoElement.innerText = repo.name
            reposElement.appendChild(repoElement)
        });

}



search.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = search.value;
    if (userName) {
        getUser(userName)
        search.value = ""
    }

})