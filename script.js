let button = document.querySelector("#searchButton");

let aButton=document.querySelector('.a-button')

function capitilize(string) {
  let arr = string.split("");
  let first = arr[0].toUpperCase();
  arr = arr.splice(1);
  arr = arr.join("");
  let finalString = first + arr;
  return finalString;
}

let dTop=document.getElementById('d-top')
let dRight=document.getElementById('d-right')
let dMiddle=document.getElementById('d-middle')
let dBottom=document.getElementById('d-bottom')
let dLeft=document.getElementById('d-left')

button.addEventListener("click", async () => {
  let pokemonName = document.querySelector("#pokemonName");
  let pokemonImage = document.querySelector("#pokemonImage");
  //where does this need to be scoped?
  let pokemon = document.querySelector("#inputBar").value;

  //Axios call goes here

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let pokemonImgUrl = response.data.sprites.back_default;
    let name = response.data.species.name;
    pokemonName.innerHTML = capitilize(name);

    pokemonImage.innerHTML = `<img src="${pokemonImgUrl}"/>`;
    pokemonImage.append(pokemonName);


  //remember to use Async and Await!
  //DOM Setters go here
});
