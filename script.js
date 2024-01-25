// Search Constants
const button = document.querySelector('#searchButton')
const inputPokemon = document.querySelector('#inputBar')

// Desired Output Info
let pokemonName = document.querySelector('#pokemonName')
const imageOutput = document.querySelector('#pokemonImage')

const abilitiesTitle = document.querySelector('#abilitiesTitle')

let pokemonType = document.querySelector('#pokemonType')
let pokemonAbility1 = document.querySelector('#pokemonAbility1')
let pokemonAbility2 = document.querySelector('#pokemonAbility2')

// On Start
imageOutput.innerHTML = `<img src='assets/pokeball.png'/>`
document.querySelector("#attributeDiv").style.display = "none";

// Capitalize Output
function capitalize(string) {
    let arr = string.split('')
    let first = arr[0].toUpperCase()
    arr = arr.splice(1)
    arr = arr.join('')
    let finalString = first + arr
    return finalString
}

// Search Axios / API
button.addEventListener('click', async () => {
    // Define Variables
    let pokeName = inputPokemon.value
    
    // Search Results
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    
    let textName = response.data.species.name
    let pokePic = response.data.sprites.other.home.front_default
    
    let pokeType = response.data.types[0].type.name
    let pokeAbility1 = response.data.abilities[0].ability.name
    let pokeAbility2 = response.data.abilities[1].ability.name
    

    // Outputs
    document.querySelector("#pokemonImage").style.padding = "0";
    document.querySelector("#abilitiesTitle").style.display = "flex";
    abilitiesTitle.innerHTML = `Abilities:`
    document.querySelector("#attributeDiv").style.display = "flex";

    pokemonName.innerHTML = capitalize(textName)
    // pokemonName.append(imageOutput)
    imageOutput.innerHTML = `<img src='${pokePic}' width='400px'/>`
    imageOutput.append(pokemonName)

    pokemonType.innerHTML = `${pokeType} type`
    pokemonAbility1.innerHTML = `${pokeAbility1}`
    pokemonAbility2.innerHTML = `${pokeAbility2}`
})

// Improve / Expand:
//  -> change background color of Type to correspond with type value
//      -> water = blue, fire = red, grass = green, etc.
//      -> look up their official colors to match (mind, electric, etc.)