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
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`+pokemon)

    console.log(response.data.name)
    pokemonName.innerHTML= `${pokemon}`

    let pokemonImage1=response.data.sprites.other.home.front_default
   
    pokemonImage.src = pokemonImage1

  console.log(pokemonImage1)


    console.log(response)
})
    






