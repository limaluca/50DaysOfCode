const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItems = []


filter.addEventListener("input", (e) => { filterData(e.target.value) })


function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide")
        } else {
            item.classList.add("hide")

        }
    })
}

async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50")
    const data = await res.json()

    //Clear the results
    result.innerHTML = ""
    data.results.forEach(user => {
        const li = document.createElement("li")

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="Sarah">
        <div class="user-info">
            <h4>${user.name.first}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `

        result.appendChild(li)


    });
}


getData()




// const contents = document.querySelectorAll(".content");
// const listItems = document.querySelectorAll("nav ul li");

// listItems.forEach((item, idx) => {
//     item.addEventListener('click', () => {
//         hideAllContents()
//         hideAllItems()
//         showContent(idx)
//         showActive(idx)
//     })
// })

// function hideAllContents() {
//     contents.forEach(content => content.classList.remove("show"))
// }

// function hideAllItems() {
//     listItems.forEach(item => item.classList.remove("active"))
// }

// function showContent(index) {
//     contents[index].classList.add("show")
// }

// function showActive(index) {
//     listItems[index].classList.add("active")
// }

//   <li>
//         <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sarah">
//         <div class="user-info">
//             <h4>Sarah Smith</h4>
//             <p>Wexford, Ireland</p>
//         </div>
//     </li>
//     <li>
//         <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sarah">
//         <div class="user-info">
//             <h4>Sarah Smith</h4>
//             <p>Wexford, Ireland</p>
//         </div>
//     </li>
//     <li>
//         <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sarah">
//         <div class="user-info">
//             <h4>Sarah Smith</h4>
//             <p>Wexford, Ireland</p>
//         </div>
//     </li>