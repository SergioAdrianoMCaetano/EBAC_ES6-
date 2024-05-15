// - COMPREENDER OS MÉTODOS DE ARRAYS
// 	* Compreende ros diferentes métodos de array disponíveis no ES6+;
// 	* Praticar a iteração em arrays;
// 	* Aplique os métodos de array em exemplos do mundo real;

const redeSociais = ['Facebook', 'Instagram', 'Linkedin'];

for (let i = 0; i < redeSociais.length; i++){
    console.log(`Eu tenho a rede social: ${redeSociais[i]}`);
};

//FOREACH
redeSociais.forEach(function(nomeDasRedes, indice){
    console.log(` #${indice} Tenho login na rede social: ${nomeDasRedes}`);
});

//MAP
const alunos = ['Gustano', 'Alex', 'Cristina', 'Brenda'];
const alunos2 = alunos.map(function(item){
    return {
        nome: item,
        curso: 'Front-End'
    };
});

console.log(alunos2);

const numeros = [10, 50, 79, 26];
const dobroDosNumeros = numeros.map(function(numeroTotal){
    return numeroTotal * 2;
});

console.log(dobroDosNumeros);

//FIND
const cristina = alunos2.find(function(aluna){
    return aluna.nome == 'Cristina';

});

console.log(cristina);

//FINDINDEX
const indiceDaCristina = alunos2.findIndex(function(alunaIndice){
    return alunaIndice.nome == 'Cristina';
});

console.log(indiceDaCristina);

//EVERY
const todosAlunosFrontEnd = alunos2.every(function(curso2){
    return curso2.curso == 'Front-End';
});

console.log(todosAlunosFrontEnd);

alunos2.push({
    nome: 'Fernanda',
    curso: 'Back-End'
});

const todosAlunosSaoFront = alunos2.every(function(item){
    return item.curso === 'Front-End';
});

console.log(todosAlunosSaoFront);

//SOME
const todosAlunosSaoFront2 = alunos2.some(function(item){
    return item.curso === 'Back-End';
});

console.log(todosAlunosSaoFront2);

//FIND
function filtarAlunos(alunos2){
    return alunos2.curso === 'Back-End'
};

const alunos3 = alunos2.filter(filtarAlunos);

console.log(alunos3);

//REDUCE
const precos = [10, 20, 40, 5];
const somaPrecos = precos.reduce(function(soma2, itemAtual){
    soma2 += itemAtual;
    return soma2;
}, 0);

console.log(somaPrecos);

let somaComFor = 0;

for(let i = 0; i < precos.length; i++){
    somaComFor += precos[i];
};

console.log(somaComFor);

const chamada = alunos2.reduce(function(chamada2, nomeAtual){
    return chamada2 += `${nomeAtual.nome} `;
}, '');

console.log(chamada);