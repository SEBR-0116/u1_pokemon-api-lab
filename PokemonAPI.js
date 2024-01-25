document.addEventListener('DOMContentLoaded', () => {
   const pokemonInput = document.querySelector('input');
   const pokeButton = document.querySelector('button');
   const pokemonNameElement = document.querySelector('#pokemonName');
   const pokemonImageElement = document.querySelector('#pokemonImage');

   pokeButton.addEventListener('click', async (event) => {
       event.preventDefault();

       try {
           // Get the user input from the input field
           const userInput = pokemonInput.value.toLowerCase();

           // Make a request to the PokeAPI to get information about the Pokemon
           const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
           const pokemonData = response.data;

           // Extract relevant information from the response
           const name = pokemonData.name;
           const imageUrl = pokemonData.sprites.front_default;

           // Update the content of the HTML elements with the fetched data
           pokemonNameElement.textContent = `Pokemon: ${name}`;
           pokemonImageElement.src = imageUrl;
       } catch (error) {
           console.error("Error fetching data from PokeAPI", error);
           // Handle errors (e.g., display an error message)
           pokemonNameElement.textContent = "Pokemon not found";
           pokemonImageElement.src = ""; // Clear the image
       }
   });
});
//https://chat.openai.com/share/719d795c-2a22-4d26-8705-63ec24287990