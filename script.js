// Global variables
let button = document.querySelector("#searchButton")
let input = document.querySelector('#inputBar')
let pokemonName = document.querySelector("#pokemonName")
let pokemonType = document.querySelector('#pokemonType')
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonHeight = document.querySelector('#pokemonHeight')
let pokemonWeight = document.querySelector('#pokemonWeight')
let pokemonAbilities = document.querySelector('#pokemonAbilities')
let gameVersions = document.querySelector('#gameVersions')
let pokemonGeneration = document.querySelector('#pokemonGeneration')
let pokedexNumber = document.querySelector('#pokedexNo')
let evolves = document.querySelector('#evolves')
let evolution = document.querySelector('#evolvesFrom')
let evolutionImage = document.querySelector('#evolutionImage')
let caption = document.querySelector('figcaption')
let cardImages = document.querySelectorAll('.cardImages')
let cardLinks = document.querySelectorAll('.cardLinks')
let appears = document.querySelector('#appears')
let natPokedex = document.querySelector('#natPokedex')
let heightdt = document.querySelector('#height')
let weightdt = document.querySelector('#weight')
let abilitiesdt = document.querySelector('#abilities')

// Functions
function UrlExists(url) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404) {
        return true
    } else {
        return false
    }
}

const fetchPokemon = async (textInput) => {
    // Scoped variables
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    let name = (pokemon.data.name).charAt(0).toUpperCase() + (pokemon.data.name).slice(1)
    let image = pokemon.data.sprites.other.showdown.front_default
    let height = pokemon.data.height
    let weight = pokemon.data.weight
    let type = pokemon.data.types
    let abilities = pokemon.data.abilities
    let games = pokemon.data.game_indices
    
    let specieslink = pokemon.data.species.url
    let species = await axios.get(specieslink)
    let pokedexNo = species.data.pokedex_numbers[0].entry_number
    let generation = species.data.generation.name

    // DOM setters
    pokemonName.innerHTML = name
    pokemonImage.setAttribute("src", `${image}`)
    pokemonImage.setAttribute("alt", "front")
    caption.innerHTML = "Click to swivel"
    for (let i=0; i < type.length; i++) {
        pokemonType.innerHTML += `${(type[i].type.name).toUpperCase()}<br>`
    }
    heightdt.innerHTML = 'Height'
    pokemonHeight.innerHTML = `${height}ft`
    weightdt.innerHTML = 'Weight'
    pokemonWeight.innerHTML = `${weight}lbs`
    abilitiesdt.innerHTML = 'Abilities'
    pokemonAbilities.innerHTML = ''
    for (let i=0; i < abilities.length; i++) {
        ability = (abilities[i].ability.name).charAt(0).toUpperCase() + (abilities[i].ability.name).slice(1)
        pokemonAbilities.innerHTML += `<dd>${ability}</dd>`
    }
    appears.innerHTML = 'Appears in Games'
    gameVersions.innerHTML = ''
    for (let i=0; i<games.length; i++) {
        let version = (games[i].version.name).charAt(0).toUpperCase() + (games[i].version.name).slice(1)
        gameVersions.innerHTML += `<dd>${version}</dd>`
    }
    pokemonGeneration.innerHTML = (generation).toUpperCase()
    natPokedex.innerHTML = 'National Pokedex Entry'
    pokedexNumber.innerHTML = `No. ${pokedexNo}`
    evolves.innerHTML = 'Evolves From:'
    if (species.data.evolves_from_species !== null) {
        let evolvesFrom = species.data.evolves_from_species.name
        let evolvesFromPage = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolvesFrom}`)
        let evolvesFromPicture = evolvesFromPage.data.sprites.other.showdown.front_default
        evolution.innerHTML = evolvesFrom.toUpperCase()
        evolutionImage.setAttribute("src", `${evolvesFromPicture}`)
    } else {
        evolution.innerHTML = "Base Evolution"
        evolutionImage.setAttribute("src", '')
    }
}

const fetchAbility = async (textInputHyphen) => {
    let ability = await axios.get(`https://pokeapi.co/api/v2/ability/${textInputHyphen}`)
    let name = ability.data.name
    let effectChanges = ability.data.effect_changes
    let effectEntries = ability.data.effect_entries[1].effect
    let generation = ability.data.generation.name
    let pokemonList = ability.data.pokemon

    pokemonName.innerHTML = name
    natPokedex.innerHTML = 'Effect Changes'
    if (effectChanges === '' ) {
        pokedexNumber.innerHTML = effectChanges
    } else {
        pokedexNumber.innerHTML = 'None'
    }
    heightdt.innerHTML = 'Effect'
    pokemonHeight.innerHTML = effectEntries
    weightdt.innerHTML = 'Generation'
    pokemonWeight.innerHTML = generation
    abilitiesdt.innerHTML = 'Pokemon'
    pokemonAbilities.innerHTML = ''
    for (let i=0; i<pokemonList.length; i++) {
        pokemonAbilities.innerHTML += `<dd>${pokemonList[i].pokemon.name}</dd>`
   }
   evolution.innerHTML = ''
   evolves.innerHTML = ''
   appears.innerHTML = ''
   gameVersions.innerHTML = ''
}

const generateContent = () => {
    for(let i=0; i<cardImages.length; i++) {
        const cardContent = async() => {
            let pokemonNumber = Math.floor(Math.random() * 851)
            let cardLink = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
            const cardResponse = await axios.get(cardLink)
            let cardImage = (cardResponse.data.sprites.other.showdown.front_default)
            cardImages[i].setAttribute("src", `${cardImage}`)
            let cardName = (cardResponse.data.name).charAt(0).toUpperCase() + (cardResponse.data.name).slice(1)
            cardLinks[i].innerHTML = cardName
        }
        cardContent()
    }
}

generateContent()

// Event Listeners
button.addEventListener('click', () => {
    let textInput = input.value
    let textInputHyphen = input.value.replace(/ /g, '-')
    let pokemonLink = `https://pokeapi.co/api/v2/pokemon/${textInput}`
    let abilityLink = `https://pokeapi.co/api/v2/ability/${textInputHyphen}`

    if (UrlExists(pokemonLink)) {
        fetchPokemon(textInput)
    } else if (UrlExists(abilityLink)) {
        fetchAbility(textInputHyphen)
    } else {
        pokemonName.innerHTML = "Pokemon not found"
    }
})

pokemonImage.addEventListener('click', async() => {
    let textInput = pokemonName.innerHTML.toLowerCase()
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    if (pokemonImage.alt === "back") {
        let image = pokemon.data.sprites.other.showdown.front_default
        pokemonImage.setAttribute("src", `${image}`)
        pokemonImage.setAttribute("alt", "front")
    } else if (pokemonImage.alt === "front") {
        let image = pokemon.data.sprites.other.showdown.back_default
        pokemonImage.setAttribute("src", `${image}`)
        pokemonImage.setAttribute("alt", "back")
}
})

evolutionImage.addEventListener('click', () => {
    let textInput = evolution.innerHTML.toLowerCase()
    fetchPokemon(textInput)
    generateContent()
})

for(let i=0; i<cardLinks.length; i++) {
    cardLinks[i].addEventListener('click', () => {
        let textInput = cardLinks[i].innerHTML.toLowerCase()
        fetchPokemon(textInput)
        generateContent()
    })
}

