const button = document.querySelector('button')
const pokemon = document.querySelector('input')
const imageOutput = document.querySelector('.screen')
let pokemonName = document.querySelector('#pokemonName')

function capitilize(string){
  let arr = string.split('')
  let first = arr[0].toUpperCase()
  arr = arr.splice(1)
  arr = arr.join('')
  let finalString = first + arr
  return finalString
}

button.addEventListener('click', async () => {
  let pokeName = pokemon.value
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  let pokePic = response.data.sprites.front_default
  let textName = response.data.species.name
  pokemonName.innerHTML = capitilize(textName)
  imageOutput.innerHTML = `<img src='${pokePic}'/>`
  imageOutput.append(pokemonName)
})
