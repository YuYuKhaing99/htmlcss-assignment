async function fetchData() {
    
    try{
        
        const data = await fetch('https://pokeapi.co/api/v2/pokemon');
        console.log(data);
        if (data.ok) {
       
        const pokemomDiv = document.querySelector("#pokemon-content");
        for (let pokemom of data.results) {
        let pokemomText = document.createElement("p");
        pokemomText.textContent = pokemom.name;
        pokemomDiv.appendChild(pokemomText);
    }
        
       
    }else{
        throw new Error("Https error, tilakoodi: " + data.status);
    }
}catch(error){
    console.log("Error: " + error);    
}
}

async function pokemomCreate() {
    
    
    const pokemonlink = document.querySelector('a');
    newParagraph.addEventListener("click", fetchData);
    box.appendChild(newParagraph);
}  

pokemomCreate();
