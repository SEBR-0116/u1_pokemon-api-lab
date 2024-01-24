document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById("pokemonSelect")
    const pokemonNameDisplay = document.getElementById("pokemonName")
    const pokemonImage = document.getElementById("pokemonImage")
    const pokemonNameInput = document.getElementById("pokemonNameInput")

    selectButton.addEventListener('click', async () => {
        const pokemonIdentifier = pokemonNameInput.value.toLowerCase().trim()
        if (!pokemonIdentifier) {
            alert('Please enter a Pokémon name or number.')
            return
        }

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`)
            const pokemonPic = response.data.sprites.other['official-artwork'].front_default
            pokemonImage.src = pokemonPic
            pokemonImage.alt = `Image of ${response.data.name}`
            pokemonImage.style.display = 'block'
            pokemonNameDisplay.textContent = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1)
        } catch (error) {
            console.error('Failed to fetch Pokémon:', error)
            alert('Failed to retrieve Pokémon data. Please check the name/number and try again.')
            pokemonNameDisplay.textContent = 'Not found'
            pokemonImage.style.display = 'none';
        }
    })
})
