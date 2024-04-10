const dataElement = document.querySelector('#data-container');
const searchbox = document.querySelector('#search');


const displayPokemon = (pokemon)=> {
        reset ();
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = pokemon.name;
        let imageElement = document.createElement('img');
        imageElement.setAttribute("src",pokemon.sprites.front_default);
        let movesElement = document.createElement("ul");
        article.appendChild(h3);
        article.appendChild(imageElement);
        pokemon.moves.forEach(item=>{
        let moveElement=document.createElement ("li");
        moveElement.textContent = item.move.name;
        movesElement.appendChild (moveElement);
        });
        article.appendChild(movesElement);
        dataElement.appendChild(article);
 
}
const displaynotFound = ()=>{
  reset ();
  let article = document.createElement('article');
  let h3 = document.createElement('h3');
  h3.textContent = `We couldnt find ${searchbox.value}`;
  article.appendChild(h3);
  dataElement.appendChild(article);

}
const searchPokemon = async () =>{
  let searchTerm = searchbox.value;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      if (response.ok){
          const data = await response.json();
          pokemonData = data;
          displayPokemon(pokemonData);
      }else{
        displaynotFound();
      }
}

const reset = () => {
  dataElement.innerHTML = '';
}
