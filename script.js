const getPokemon = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(pokemon.data.results)
}
let button = document.querySelector('#searchButton')
button.addEventListener('click', async (event) =>{
    event.preventDefault
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let textInput = document.querySelector("#inputBar")
    let pokemon = textInput.value
    console.log(pokemon)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    pokemonName.innerHTML= `${pokemon}`
    console.log(response)
    
})