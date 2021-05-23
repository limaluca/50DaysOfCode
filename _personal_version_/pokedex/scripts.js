const pokedex = document.querySelector(".pokedex")
const pokemonNumber = 16;
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)



const fetchPokemons = async() => {
    for (let i = 1; i <= pokemonNumber; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async(id) => {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(API_URL)
    const data = await res.json()

    createPokemonCard(data)
}

fetchPokemons()


function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add("pokemon")
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
        // const color = colors[type]

    // pokemonEl.style.backgroundColor = color;



    pokemonEl.innerHTML = `
            <div class="img-container">
                <div class="pokeball-bg">
                    <div class="pokeball top"></div>
                    <div class="pokeball bottom"></div>
                    <div class="pokeball middle">
                        <div class="outer">
                            <div class="inner"></div>
                        </div>
                    </div>
                </div>
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="" class="avatar">
            </div>
            <div class="info-container">
                <span class="id">#999</span>
                <h3 class="name">${pokemon.name}</h3>
                    <span>${type}</span>

                <small>Hp:<span>1</span></small>

                <div class="details">
                    <small>Height:<span>${pokemon.height}</span></small>
                    <small>Weight:<span>${pokemon.weight}</span></small>
                </div>

            </div>
    `

    pokedex.appendChild(pokemonEl)

}