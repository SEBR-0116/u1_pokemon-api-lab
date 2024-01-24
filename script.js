

const getPokemon = async () => {
        let selectedPokemon = pokemonInput.value
        //console.log(selectedPokemon)
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
         //console.log(response.data)
         pokemonName.innerHTML = response.data.name
    
        let pokemonPic =response.data.sprites.other.home.front_default
        pokemonImage.src =  pokemonPic
         
       
        //console.log(pokemonPic)
        //console.log(pokemonName)
      
    }



let button = document.querySelector('#searchButton') 
let pokemonName = document.querySelector("#pokemonName")
let pokemonInput = document.querySelector("#inputBar")
let pokemonImage = document.querySelector("#pokemonImage")
let abilities = document.querySelector('#abilities')

 const pokemonAbilities =[]

 pokemonAbilities.push(abilities)



// button.addEventListener('click', async (event) => {
    
// })

