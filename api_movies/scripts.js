// This will show the movies in the front page
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb02f427d50c085630e7d6e13b01bb76&page=4'
    //                      destructuring
    //https://api.themoviedb.org/3/             -- Base Link    
    //discover/movie                            -- This will get all the movies using Discover and the conditions below
    //?sort_by=popularity.desc                  -- This will sort the movies by popularity in descending order 
    //api_key=cb02f427d50c085630e7d6e13b01bb76  -- My API Key to acess the Database
    //page=1                                    -- Pagination, meaning it will show the results of one page (about 30 movies)

//API particular path to the images as we are working using the movies cover
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=cb02f427d50c085630e7d6e13b01bb76&query="' //leaving a single " to work as a placeholder for our future searches
    // After the base link, the Search is the verb used here
    // The query will be concatenated with the value of the input (of id search)


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const domOverview = document.getElementsByClassName('overview');



getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url) //search for the async *fetch*<-
    const data = await response.json()

    showMovies(data.results) // returns the data from JSON file in a form of array
    console.log(data.results)


}

function showMovies(movies) {
    main.innerHTML = '' //empties the HTML in the main (everything)

    movies.forEach((movie) => {
        //destructuring, getting only the NEEDED data for this project
        // that way we store the data in variables to put them on the right places of the DOM
        const { title, poster_path, vote_average, overview } = movie;

        //Extra: If a movie doesn't have poster it isn't shown
        if (movie.poster_path == null) {
            return
        }

        //extra: Change the font size if the text is too big


        // for each movie, a div will be created inside the variable movieEl-ement
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" >

            <div class="movie-info">
                <h3 class="title">${title}</h3>
                <span class="${getRating(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
            //after creation of the div, we have to add to the main tag



        main.appendChild(movieEl);
    })
}


// This will put the color on the rating 
function getRating(rating) {
    if (rating >= 8) {
        return 'green'
    } else if (rating >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault() //nao sei oq isso faz... ainda

    const searchTerm = search.value // gets the value from the input

    if (searchTerm && searchTerm !== '') { //If exists and its not empty 

        getMovies(SEARCH_URL + searchTerm); //it will get the movies using the search term and the search URL

        //   search.value = ''; //clears the input but I will keep it there

    } else {
        window.location.reload; // dont know what this does...
    }
})