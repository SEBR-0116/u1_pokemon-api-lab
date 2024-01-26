function searchPokemon() {
    const inputElement = document.getElementById('pokemonInput');
    const pokemonName = inputElement.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => displayPokemonInfo(data))
        .catch(error => {
            console.error('Error fetching Pokemon data:', error);
            displayNotFound();
        });
}

function displayPokemonInfo(pokemonInfo) {
    const nameElement = document.getElementById('pokemonName');
    const idElement = document.getElementById('pokemonId');
    const abilitiesElement = document.getElementById('pokemonAbilities');
    const typesElement = document.getElementById('pokemonTypes');
    const imageElement = document.getElementById('pokemonImage');
    const detailsContainer = document.getElementById('pokemonDetails');

    nameElement.textContent = `Name: ${pokemonInfo.name.capitalize()}`;
    idElement.textContent = `ID: ${pokemonInfo.id}`;
    
    const abilities = pokemonInfo.abilities.map(ability => ability.ability.name.capitalize());
    abilitiesElement.textContent = `Abilities: ${abilities.join(', ')}`;

    const types = pokemonInfo.types.map(type => type.type.name.capitalize());
    typesElement.textContent = `Types: ${types.join(', ')}`;

    // Set the Pokemon image
    const imageUrl = pokemonInfo.sprites.front_default;
    imageElement.src = imageUrl;
    imageElement.alt = `${pokemonInfo.name} Image`;

    detailsContainer.classList.remove('hidden');
}

function displayNotFound() {
    const detailsContainer = document.getElementById('pokemonDetails');
    detailsContainer.classList.add('hidden');
    alert('Pokemon not found. Please enter a valid name.');
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};



