
let button = document.querySelector("#searchButton")


button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")

    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    //let searchInput = textInput
    //console.log(textInput)

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    //console.log(responce.data.name)
    let pName =response.data.name
    console.log(response.data)
    //console.log(responce.data.url)
    
    let pPic= response.data.sprites.front_default
    let pPics =response.data.sprites
    //console.log(pPic)

    pokemonName.innerHTML =`<h2> Pokimon Name : ${pName}</h2>`
    pokemonImage.innerHTML=`<img src=${pPic}>`
    
    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here

}
)
