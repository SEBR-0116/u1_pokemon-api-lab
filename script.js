




const button = document.querySelector('#searchButton')
const inputBar = document.querySelector('#inputBar')

const getPokemon = async () => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputBar.value}`)
    console.log(response.data)

}

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const pokemonName = document.querySelector('#pokemonName')
    const pokemonImage = document.querySelector('#pokemonImage')
    const pokemonStats = document.querySelector('#pokemonStats')
    let textInput = inputBar.value
    console.log(textInput)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    pokemonName.innerText = response.data.name
    pokemonImage.src = response.data.sprites.front_default
    pokemonStats.innerHTML= ''

    response.data.stats.forEach(stat => {
        const statElement = document.createElement('p')
        statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`
        pokemonStats.appendChild(statElement)
    })
})


getPokemon()


