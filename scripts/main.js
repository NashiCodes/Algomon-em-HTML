import layout from "./mapa.js";
let box = document.querySelector("#box");
let algcont = document.querySelector("#algmns");
const L = 11;
const C = 41;
let gId = 0;

layout.className = "map";
layout.id = "mId";

document.addEventListener("DOMContentLoaded", () => {
  const divs = [];
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
      } else if (
        layout[i] === 4 ||
        layout[i] === 5 ||
        layout[i] === 6 ||
        layout[i] === 7
      ) {
        divs[i].classList.add("ginasio");
        divs[i].id = gId;
        gId++;  
      }
      else if (layout[i] === 8) {
        divs[i].classList.add("cap");
      }
    }
  }

  criaMapa();
});
