import layout from "./mapa.js";
let box = document.querySelector("#box");
let algcont = document.querySelector("#algmns");
const L = 11;
const C = 41;

layout.className = "map";
layout.id = "mId";

document.addEventListener("DOMContentLoaded", () => {
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
});
