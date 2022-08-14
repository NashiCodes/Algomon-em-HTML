import layout from "./mapa.js";
let box = document.querySelector("#box");
let algcont = document.querySelector("#algmns");

const width = 58;
const height = 19;

let gId = 0;
let playerIndex = 422;

layout.className = "map";
layout.id = "mId";

document.addEventListener("DOMContentLoaded", () => {
  const divs = [];

  document.addEventListener("keydown", movement);

  function criaAlgomon(nome, vida, atk, tipo) {
    this.nome = nome;
    this.vida = vida;
    this.atk = atk;
    this.tipo = tipo;
  }

  function criaPlayer(algm, Pname, algdex, insg) {
    this.algm = new criaAlgomon();
    this.Pname = Pname;
    this.algdex = algdex;
    this.insg = insg;
  }

  function criaMapa() {
    for (let i = 0; i < layout.length; i++) {
      const div = document.createElement("div");
      box.appendChild(div);
      divs.push(div);

      if (layout[i] === 0) {
        divs[i].classList.add("parede");
      } else if (layout[i] === 1) {
        divs[i].classList.add("caminho");
      } else if (layout[i] === 3) {
        divs[i].classList.add("player");
      } else if (
        layout[i] === 4 ||
        layout[i] === 5 ||
        layout[i] === 6 ||
        layout[i] === 7
      ) {
        divs[i].classList.add("ginasio");
        divs[i].id = gId;
        gId++;
      } else if (layout[i] === 8) {
        divs[i].classList.add("cap");
      }
    }
  }

  criaMapa();

  divs[playerIndex].classList.add("player");

  function movement(e) {
    divs[playerIndex].classList.remove("player");

    switch (e.key) {
      case "a":
        if (
          playerIndex % width !== 0 &&
          !divs[playerIndex - 1].classList.contains("parede")
        )
          playerIndex -= 1;
        break;

      case "w":
        if (
          playerIndex - width >= 0 &&
          !divs[playerIndex - width].classList.contains("parede")
        )
          playerIndex -= width;
        break;

      case "d":
        if (
          playerIndex % width < width - 1 &&
          !divs[playerIndex + 1].classList.contains("parede")
        )
          playerIndex += 1;
        break;

      case "s":
        if (
          playerIndex + width < width * height &&
          !divs[playerIndex + width].classList.contains("parede")
        )
          playerIndex += width;
        break;
    }
    divs[playerIndex].classList.add("player");
  }

  criaMapa();
  
  for (let i = 0; i < layout.length; i++) {
    if (layout[i] == 6) console.log(i);
  }

  function verifyCity(){
    if(divs[playerIndex - 1].classList.contains("cap")
     || divs[playerIndex + width].classList.contains("cap") 
     || divs[playerIndex + 1].classList.contains("cap")
     || divs[playerIndex - width].classList.contains("cap")
     ){
      recebeAlgomon();
    }
  }
  
  function recebeAlgomon(){
    
  }

  for (let i = 0; i < layout.length; i++) {
    if (layout[i] == 6) console.log(i);
  }
});
