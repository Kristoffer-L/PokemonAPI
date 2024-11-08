let pokemon;
let url;
let pokemon2;
let url2;
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInfo);

async function getInfo() {
  try {
    pokemon = document.querySelector(".input").value;
    pokemon2 = document.querySelector(".input2").value;
    url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    url2 = "https://pokeapi.co/api/v2/pokemon/" + pokemon2;
    const response = await fetch(url);
    const response2 = await fetch(url2);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const data2 = await response2.json();
    console.log(data);
    renderHTML(data);
    renderHTML2(data2);
  } catch (error) {
    console.error("Error", error);
  }
}

function renderHTML(data) {
  document.querySelector(".image").src = data.sprites.other.dream_world.front_default;
  console.log("works", data.sprites.front_default);
  document.querySelector(".headline").innerHTML = data.name;
  document.querySelector(".hp").innerHTML = "HP: " + data.stats[0].base_stat;
  console.log("pokemon", data);
}
function renderHTML2(data2) {
  document.querySelector(".image2").src = data2.sprites.other.dream_world.front_default;
  console.log("works", data2.sprites.front_default);
  document.querySelector(".headline2").innerHTML = data2.name;
  document.querySelector(".hp2").innerHTML = "HP: " + data2.stats[0].base_stat;
  console.log("pokemon2", data2);
}
