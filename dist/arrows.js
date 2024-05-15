"use strict";

// SOBRE A ARROW FUNCTION

var minhaFuncao = function minhaFuncao() {
  return 'Diz olá';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    nome: 'Gol',
    marca: 'Volks'
  };
};
console.log(minhaFuncao);
console.log(retornaUmCarro);
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(this);
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);