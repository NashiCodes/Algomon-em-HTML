import mapa from "./mapa.js";

function criaAlgomon (nome, vida, atk, tipo){
    this.nome = nome;
    this.vida = vida;
    this.atk = atk;
    this.tipo = tipo;
}

function criaPlayer (algm, Pname, algdex, insg){
    this.algm =  new criaAlgomon();
    this.nome = nome;
    this.algdex = algdex;
    this.insg = insg;
}