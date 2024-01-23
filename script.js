
let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")

button.addEventListener('click', async () => {
    let textInput = document.querySelector("#inputBar").value
    //console.log(textInput)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    //console.log(response.data.sprites.other.home.front_default)
    let pokePic = response.data.sprites.other.home.front_default
    pokemonImage.setAttribute ('src',`${pokePic}`)

    let pokeName = response.data.name
    pokemonName.innerHTML = (`${pokeName}`)
    //console.log(response.data.name)
}
)