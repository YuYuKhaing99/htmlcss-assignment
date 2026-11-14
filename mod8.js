async function fetchData() {
    
    try{
        
        const data = await fetch('https://pokeapi.co/api/v2/pokemon');
        console.log(data);

    }
}

async function pokemonTypes(event,url) {
    const pokemonData = await fetch(url);
    console.log(pokemonData);
    console.dir(event)
}

async function pokemomCreate() {
        const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemomDiv = document.querySelector("#pokemon-content");
        for (let pokemom of pokemonData.results) {
        const pokemonDiv1 = document.querySelector("div");
        let pokemomText = document.createElement("p");
        pokemomText.textContent = pokemom.name;
        pokemomDiv.appendChild(pokemonDiv1);
        newParagraph.addEventListener("click", (event) => pokemonTypes(event,pokemom.url));
        pokemonDiv1.appendChild(pokemomText);
}  
}

pokemomCreate();
