// Global Variables
let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
//where does this need to be scoped?
let pokemonAbility = document.querySelector('#ability')
let pokemonType = document.querySelector('#type')

// Generate random Pokemon when page load & reload
addEventListener('load', () => {
  getRandomPokemon()
})

async function getRandomPokemon() {
  try {
    // Fetch a list of Pokémon
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    let resultsArr = response.data.results;
    console.log(resultsArr)

    // Get a random Pokémon from the list
    let randomIndex = Math.floor(Math.random() * resultsArr.length);
    let randomPoke = resultsArr[randomIndex];

    // Fetch details of the random Pokémon
    let urlResponse = await axios.get(randomPoke.url);
    console.log('url is', urlResponse)
    let randomPokeData = urlResponse.data;
    let randomPokePic = randomPokeData.sprites.front_default;

    // Update content on the page
    pokemonName.textContent = randomPokeData.name;
    pokemonImage.setAttribute('src', randomPokePic);

    // Get Ability
    // {
    //   "data": ["", ""] 
    // }
    getAbility(urlResponse)
    
    // Get Type
    getType(urlResponse)
    console.log(randomPokeData.name);
  } catch (error) {
    console.error('There was an error fetching the Pokémon data:', error);
  }
}



// Search for Pokémon when querying
button.addEventListener('click', async () => {
  let textInput = document.querySelector("#inputBar").value
  //Axios call goes here
  //remember to use Async and Await!
  //DOM Setters go here
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
  console.log(response)
  let pokePic = response.data.sprites.other.home.front_default;
  console.log(pokePic)
  let = pokeName = response.data.name;
  console.log(pokeName)
  pokemonName.textContent = pokeName;
  pokemonImage.setAttribute('src', `${pokePic}`)
  
  getAbility(response)
  getType(response)
}
)

function insertName() {
  
}

function getAbility(response) {
  let abilitiesData = response.data.abilities;
  let abilitiesArr = abilitiesData.map((element) => element.ability.name)
  // Clear existing content
  let abilityStr = abilitiesArr.join(', ')  
  pokemonAbility.textContent = `Ability: ${abilityStr}`
}


function getType(response) {
  let type = response.data.types[0].type.name
  pokemonType.textContent = `Type: ${type}`
}




console.log('working')