
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
    const pokemonHP = document.querySelector('#pokemonHP')
    const pokemonType = document.querySelector('#pokemonType')
    const pokemonMove = document.querySelector('#pokemonMove')
    let textInput = inputBar.value
    console.log(textInput)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    const capitalizedPokemonName = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);
    pokemonName.innerText = capitalizedPokemonName
    pokemonImage.src = response.data.sprites.other.showdown.front_default
    const hpStat = response.data.stats.find(stat => stat.stat.name === 'hp')
    const baseStatValue = hpStat.base_stat
    pokemonHP.innerText = `HP: ${baseStatValue}`
    const type = response.data.types[0].type.name
    pokemonType.innerText = `Type: ${type}`
    const move = response.data.moves[0].move.name
    pokemonMove.innerText = `Move: ${move}`
})

getPokemon()