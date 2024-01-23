
const searchButton = document.querySelector('#searchButton')
//console.log(pokemonInput, searchButton, pokemonName, pokemonImg)

searchButton.addEventListener('click', async () => {
    const input = document.querySelector('#searchField').value
    const pokemonName = document.querySelector('#pokemonName')
    const img = document.querySelector('#pokemonImg')
    const type1 = document.querySelector('#type1')
    const type2 = document.querySelector('#type2')
    const height = document.querySelector('#height')
    const weight = document.querySelector('#weight')
    const abilityName = document.querySelector('#abilityName')
    const abilityDesc = document.querySelector('#abilityDesc')

    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).catch(err => err);
    console.log(pokemon.data)
    pokemonName.innerHTML = pokemon.data.name
    img.innerHTML = `<img src="${pokemon.data.sprites.front_default}">`
    type1.innerHTML = pokemon.data.types[0].type.name
    pokemon.data.types.length == 2 ? type2.innerHTML = pokemon.data.types[1].type.name : type2.innerHTML = ""
    height.innerHTML = (pokemon.data.height * 0.1).toFixed(1)
    weight.innerHTML = (pokemon.data.weight * 0.1).toFixed(1)
    abilityName.innerHTML = pokemon.data.abilities[0].ability.name

    let ability = await axios.get(pokemon.data.abilities[0].ability.url)

    //console.log(ability.data.effect_entries[1].effect)
    abilityDesc.innerHTML = ability.data.effect_entries[1].effect
})