"use strict";

// - COMPREENDER OS MÉTODOS DE ARRAYS
// 	* Compreende ros diferentes métodos de array disponíveis no ES6+;
// 	* Praticar a iteração em arrays;
// 	* Aplique os métodos de array em exemplos do mundo real;

var redeSociais = ['Facebook', 'Instagram', 'Linkedin'];
for (var i = 0; i < redeSociais.length; i++) {
  console.log("Eu tenho a rede social: ".concat(redeSociais[i]));
}
;

//FOREACH
redeSociais.forEach(function (nomeDasRedes, indice) {
  console.log(" #".concat(indice, " Tenho login na rede social: ").concat(nomeDasRedes));
});

//MAP
var alunos = ['Gustano', 'Alex', 'Cristina', 'Brenda'];
var alunos2 = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Front-End'
  };
});
console.log(alunos2);
var numeros = [10, 50, 79, 26];
var dobroDosNumeros = numeros.map(function (numeroTotal) {
  return numeroTotal * 2;
});
console.log(dobroDosNumeros);

//FIND
var cristina = alunos2.find(function (aluna) {
  return aluna.nome == 'Cristina';
});
console.log(cristina);

//FINDINDEX
var indiceDaCristina = alunos2.findIndex(function (alunaIndice) {
  return alunaIndice.nome == 'Cristina';
});
console.log(indiceDaCristina);

//EVERY
var todosAlunosFrontEnd = alunos2.every(function (curso2) {
  return curso2.curso == 'Front-End';
});
console.log(todosAlunosFrontEnd);
alunos2.push({
  nome: 'Fernanda',
  curso: 'Back-End'
});
var todosAlunosSaoFront = alunos2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosAlunosSaoFront);

//SOME
var todosAlunosSaoFront2 = alunos2.some(function (item) {
  return item.curso === 'Back-End';
});
console.log(todosAlunosSaoFront2);

//FIND
function filtarAlunos(alunos2) {
  return alunos2.curso === 'Back-End';
}
;
var alunos3 = alunos2.filter(filtarAlunos);
console.log(alunos3);

//REDUCE
var precos = [10, 20, 40, 5];
var somaPrecos = precos.reduce(function (soma2, itemAtual) {
  soma2 += itemAtual;
  return soma2;
}, 0);
console.log(somaPrecos);
var somaComFor = 0;
for (var _i = 0; _i < precos.length; _i++) {
  somaComFor += precos[_i];
}
;
console.log(somaComFor);
var chamada = alunos2.reduce(function (chamada2, nomeAtual) {
  return chamada2 += "".concat(nomeAtual.nome, " ");
}, '');
console.log(chamada);