
const button = document.querySelector('#searchButton')
const inputBar = document.querySelector('#inputBar')


const getPokemon = async () => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputBar.value}`)
    console.log(pokemon.data) 

}

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const pokemonName = document.querySelector('#pokemonName')
    const pokemonImage = document.querySelector('#pokemonImage')
    let textInput = inputBar.value
    console.log(textInput)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    const capitalizedPokemonName = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);
    pokemonName.innerText = capitalizedPokemonName
    pokemonImage.src = response.data.sprites.front_default
})

getPokemon()