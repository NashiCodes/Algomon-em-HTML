import layout from "./mapa.js";
let box = document.querySelector("#box");
let algcont = document.querySelector("#algmns");

const width = 58;
const height = 19;

let gId = 0;
let capId = 0;

function criaAlgomon(nome, vida, atk, tipo) {
  this.nome = nome;
  this.vida = vida;
  this.atk = atk;
  this.tipo = tipo;
  return this;
}

function criaPlayer(algm, Pname, algdex, insg, index) {
  this.algm = [new criaAlgomon()];
  this.Pname = Pname;
  this.algdex = algdex;
  this.insg = insg;
  this.Index = index;
  return this;
}

layout.className = "map";
layout.id = "mId";

//Construção do Player//
let player = new criaPlayer();
player.Index = 422;
player.algdex = 3;

player.algm[0].nome = "Ifsauro";

document.addEventListener("DOMContentLoaded", () => {
  const divs = [];

  document.addEventListener("keydown", movement);

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
        divs[i].id = capId;
        capId++;
      }
    }
  }

  criaMapa();

  divs[player.Index].classList.add("player");

  function movement(e) {
    divs[player.Index].classList.remove("player");

    switch (e.key) {
      case "a":
        if (
          player.Index % width !== 0 &&
          !divs[player.Index - 1].classList.contains("parede")
        )
          player.Index -= 1;
        break;

      case "w":
        if (
          player.Index - width >= 0 &&
          !divs[player.Index - width].classList.contains("parede")
        )
          player.Index -= width;
        break;

      case "d":
        if (
          player.Index % width < width - 1 &&
          !divs[player.Index + 1].classList.contains("parede")
        )
          player.Index += 1;
        break;

      case "s":
        if (
          player.Index + width < width * height &&
          !divs[player.Index + width].classList.contains("parede")
        )
          player.Index += width;
        break;
    }
    divs[player.Index].classList.add("player");
    verifyCity();
  }

  criaMapa();

  function verifyCity() {
    if (divs[player.Index].classList.contains("cap")) {
      divs[player.Index].classList.remove("cap");
      divs[player.Index].classList.add("visited");

      recebeAlgomon(divs[player.Index].id);
    }
    if (divs[player.Index].classList.contains("ginasio")) {
      batalha(divs[player.Index].id);
    }
  }

  function recebeAlgomon(id) {
    player.algdex++;
    algcont.textContent = player.algdex;
  }
});
