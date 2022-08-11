import mapa from "./mapa";

function structAlgomon (nome, vida, atk, tipo){
    this.nome = nome;
    this.vida = vida;
    this.atk = atk;
    this.tipo = tipo;
}

function structPlayer (algm, Pname, line, column, algdex, insg){
    this.algm = algm;
    this.Pname = Pname;
    this.line = line;
    this.column = column;
    this.algdex = algdex;
    this.insg = insg;
}

