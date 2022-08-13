import mapa from "./mapa.js";

let box = document.querySelector('#box');

const L = 11;
const C = 41;

mapa.className = "map";
mapa.id = "mId";

function criaAlgomon (nome, vida, atk, tipo){
    this.nome = nome;
    this.vida = vida;
    this.atk = atk;
    this.tipo = tipo;
}
function criaPlayer (algm, Pname, algdex, insg){
    this.algm =  new criaAlgomon();
    this.Pname = Pname;
    this.algdex = algdex;
    this.insg = insg;
}

