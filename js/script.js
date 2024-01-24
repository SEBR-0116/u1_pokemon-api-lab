
let button = document.querySelector("#searchButton")

let button2 = document.querySelector("#searchButton2")


button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage1 = document.querySelector("#pokemonImage1")
    let pokemonImage2 = document.querySelector("#pokemonImage2")
    let pokemonImage3 = document.querySelector("#pokemonImage3")
    let pokemonImage4 = document.querySelector("#pokemonImage4")
    let ability = document.querySelector("#abilities")
    let pokemonTypes = document.querySelector('types') 
    let abilityNames= document.querySelector('.row1')
    let pokeTypes= document.querySelector('.row2')


    
    let textInput = document.querySelector("#inputBar").value
    
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response.data)
    //console.log(response.data.sprites)
    console.log(response.data.types)
    //console.log(response.data.name)
    let pName =response.data.name
    //console.log(response.data)  
    //let spritesDefault= response.data.sprites.front_default
    //let spritesShiny= response.data.sprites.back_shiny
    //let pPics =response.data.sprites
    // let pAbilities = response.data.abilities[0].ability.name
    let pAbilities = response.data.abilities
    //console.log(pAbilities)
    // let abilityList =[]

    let PokeAbility = []
    for(const element of pAbilities) {
            //console.log(element.ability.name)
            PokeAbility.push(element.ability.name)
    }

   
    //console.log(PokeTypes)
    let pokeTypeslist = loopArratys(response.data.types,type.name).toString()
    console.log(pokeTypeslist)

    pokemonName.innerHTML =`<h4> <span class="text">Name :<span> ${pName}</h4>`
    pokemonImage1.innerHTML=`<img src=${response.data.sprites.front_default}>`
    pokemonImage2.innerHTML =`<img src=${response.data.sprites.back_shiny}>`
    pokemonImage3.innerHTML =`<img src=${response.data.sprites.front_default}>`
    pokemonImage4.innerHTML =`<img src=${response.data.sprites.front_shiny}>`
    abilityNames.innerHTML = `<span class="text">Ability :<span> ${PokeAbility.toString()}`
    //pokeTypes.innerHTML =`<span class="test">Types :<span> ${loopArratys(response.data.types,type.name).toString} <span>`
    

}
)


function loopArratys(arraysList,root){
let listofArray=[]
for(const element of arraysList) {
    //console.log(element.ability.name)
    listofArray.push(`element.${root}`)
}
return listofArray
}


button2.addEventListener('click',async ()=>{
// Get the reference to the div with id "main"
let mainDiv = document.getElementById('.main');

// Create a new <p> element
let paragraph = document.createElement('p');

let textInput = document.querySelector("#inputBar2").value
let response = await axios.get(`https://pokeapi.co/api/v2/type/${textInput}`)

console.log(response)

})
        
