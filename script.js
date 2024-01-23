let getDetailsButton = document.getElementById(`Get_details`)
let getInputDetails = document.getElementById(`Pokemon_name`)
let getDIV = document.getElementById(`photo`)
let getWEIGHT = document.getElementById(`specific_weight`)

getDetailsButton.addEventListener(`click`,async function()
{
    let name1 = getInputDetails.value
    
    let display_name = document.getElementById(`specific_name`)
    
    display_name.innerHTML= `${name1}`
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name1}`)
    getWEIGHT.innerHTML = `${response.data.weight}`
    let display_image_src = response.data.sprites.front_default
    console.log(display_image_src)
    getDIV.innerHTML = `<img src= "${display_image_src}"/>`
}) 


