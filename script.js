let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")

button.addEventListener('click', async () => {
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    console.log(textInput)
        

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response)
    let PokemonPic = response.data.sprites.other.home.front_default
    pokemonImage.setAttribute('src',`${PokemonPic}`)
    pokemonName.innerHTML = response.data.name
    console.log(pokemonName, PokemonPic)
}
)