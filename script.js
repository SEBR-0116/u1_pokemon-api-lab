
const getPokemon = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(pokemon.data.results)
}
getPokemon()


let button = document.querySelector('#searchButton')

//Axios call goes here //remember to use Async and Await!

button.addEventListener('click', async (event) =>{
    event.preventDefault
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let textInput = document.querySelector("#inputBar")
    let pokemon = textInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    console.log(response.data.name)
    if (
        response &&
        response.data.sprites &&
        response.data.sprites.front_default
      ) 
    { 
    
    } else {
        console.log("Invalid Pokemon")
        pokemonName.innerHTML = "Invalid Pokemon"

        pokemon.setAttribute("src","")
    }
    let pokemonImage1= response.data.sprites.front_default;
    pokemonName.innerHTML= `${pokemon}`;
    pokemonImage.src = pokemonImage1;
})
