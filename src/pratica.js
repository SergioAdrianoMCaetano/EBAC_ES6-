// A entrega deste exercício consiste em:

// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

//ARRAY DE OBJETOS
const alunos = [
    {nome: 'Gabi', nota: 7},
    {nome: 'Bruno Henrique', nota: 8},
    {nome: 'Rodrigo Caio', nota: 9},
    {nome: 'Arthur', nota: 10},
    {nome: 'Bruno', nota: 3},
    {nome: 'Welligton', nota: 5},
    {nome: 'Toró', nota: 6},
    {nome: 'Junior', nota: 10}
];
console.log(alunos);
console.log(alunos.length);

//FUNÇÕES NOTA >= 6
function aprovadosComFilter(alunos){

    return alunos.filter(aluno => aluno.nota >= 6);
};
console.log(aprovadosComFilter(alunos));
console.log(aprovadosComFilter(alunos).length);

