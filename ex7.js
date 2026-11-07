'use strict';
//1. Korjaa linkki JavaScriptillÃ¤:
// Koira-linkin pitÃ¤Ã¤ viedÃ¤ oikealle Wikipedia-sivulle.

//2. TÃ¤ssÃ¤ yritetÃ¤Ã¤n lisÃ¤tÃ¤ kissalistaan uusi elementti.
// Korjaa toimivaksi.

const koiralinkkink = document.querySelector('a');
koiralinkkink.setAttribute('href', 'https://en.wikipedia.org/wiki/Dog');

const ol = document.querySelector('ol');
const kissalisays = document.createElement('li');
kissalisays.innerText = 'Cats are great alone too.';
ol.appendChild(kissalisays);


//3. TÃ¤ssÃ¤ yritetÃ¤Ã¤n lisÃ¤tÃ¤ koiralistaan uusi elementti.
// Korjaa toimivaksi.

const ul = document.querySelector('ul');
const koiralisays = document.createElement('li');
koiralisays.innerText = "Monet koirat palvovat omistajaansa.";
ul.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector("button");
button.addEventListener("mouseover", function(evt){
alert("Mouse moved over " + evt.currentTarget.tagName);
});



//tuntitehtävä 3, esimerkki
document.addEventListener("keydown", function(evt){
console.log(evt.key);
if (evt.key === "k") {
alert("Painoit salaista nappia!");
}
});
