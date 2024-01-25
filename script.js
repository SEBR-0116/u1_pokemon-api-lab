let button = document.querySelector("#searchButton")
let inputBar = document.querySelector("#inputBar")

const getPokemon = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/')
    console.log(pokemon)
  }

  getPokemon()

inputBar.addEventListener('keypress', async (event) => {
   if (event.key === "Enter") {
    event.preventDefault()
    submitInput()
    }})

    button.addEventListener('click', async () => {
         submitInput()
    })

    async function submitInput(){
        let pokemonName = document.querySelector("#pokemonName")
        let pokemonImage = document.querySelector("#pokemonImage")
        let pokemonType = document.querySelector("#PokemonType")
        let pokemonId = document.querySelector("#pokemonId")
        //where does this need to be scoped?
        let textInput = document.querySelector("#inputBar").value
            
        
        //Axios call goes here
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}/`)
        
        
          //drilling our data response
          let pokePic = response.data.sprites.front_default
          let pokeName = response.data.name
          let pokeTypes = []
          for (let i = 0; i < response.data.types.length; i++) {
            pokeTypes.push(` ${response.data.types[i].type.name} `)
          }
          let pokeId = response.data.id
          //setting our DOM image
          
          pokemonImage.innerHTML = `<img src=${pokePic}>`
          pokemonName.innerHTML = `<h2>${pokeName}<h2>`
          pokemonType.innerHTML = `<h4>Type:${pokeTypes}<h4>`
          pokemonId.innerText =  `ID: #${pokeId}`
    
        
          console.log(response)
        }

    //remember to use Async and Await!
    //DOM Setters go here
