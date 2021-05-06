const APIURL = 'https://api.github.com/users/';
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main")



getUser("limaluca");


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

// {
//     const reposElement = document.getElementById("repos")
//     repos
//         .slice(0, 5)
//         .forEach(repo => {
//             const repoElement = document.createElement('a')
//             repoElement.classList.add("repo");
//             repoElement.href = repo.html_url
//             repoElement.target = "_blank"
//             repoElement.innerText = repo.name

//             reposElement.appendChild(repoElement)
//         });
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = search.value;
    if (userName) {
        getUser(userName)
        search.value = ""
    }

})




// async function getUser(username) {
//     try {
//         const { data } = await axios(APIURL + username)

//         createUserCard(data)
//         getRepos(username)
//     } catch (error) {
//         console.log(error) //this only appears on console so we need to show something on the screen
//         if (error.response.status === 404) {
//             createErrorCard("There is no user with such user name");
//         }

//     }
// }

// async function getRepos(username) {
//     try {
//         const { data } = await axios(APIURL + username + "/repos?sort=created")

//         addReposToCard(data)



//     } catch (error) {
//         console.log(error) //this only appears on console so we need to show something on the screen
//         createErrorCard("No repos found");

//     }

// }

// function createErrorCard(message) {
//     const cardHTML = `
//         <div class="card">
//             <h3>${message}</h3>
//         </div>
//     `
//     main.innerHTML = cardHTML;
// }


// function addReposToCard(repos) {
//     const reposElement = document.getElementById("repos")
//     repos
//         .slice(0, 5)
//         .forEach(repo => {
//             const repoElement = document.createElement('a')
//             repoElement.classList.add("repo");
//             repoElement.href = repo.html_url
//             repoElement.target = "_blank"
//             repoElement.innerText = repo.name

//             reposElement.appendChild(repoElement)
//         });
// }

// function createUserCard(user) {
//     const cardHTML = `        
//     <div class="card">
//             <div>
//                 <img class="avatar" src="${user.avatar_url}" alt="user_avatar">
//             </div>
//             <div class="user-info">
//                 <h2>${user.name}</h2>
//                 <p>${user.bio}</p>
//                 <ul>
//                     <li>${user.followers} <strong>Followers</strong></li>
//                     <li>${user.following} <strong>Following</strong></li>
//                     <li>${user.public_repos} <strong>Repos</strong></li>
//                 </ul>
//                 <div id="repos">

//                 </div>
//             </div>
//         </div>`
//     main.innerHTML = cardHTML;

// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const user = search.value

//     if (user) {
//         getUser(user);
//         search.value = ""
//     }
// })