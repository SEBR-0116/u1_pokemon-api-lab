let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    let searchInput = textInput
    //console.log(textInput)
    let responce = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
    console.log(responce)
    // console.log(responce.data.name)
    pokemonName.innerHTML =`<p> Pokimon Name : ${responce.data.name} </P>`



    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here

}
)
