
//MAP => Trata-se de um conjunto de dados chave-valor
const meuMap = new Map();
meuMap.set('nome', 'Adriano');
meuMap.set('stack', 'html, css, js');
console.log(meuMap);

const nome = meuMap.get('nome');
console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has('sobrenome'));

for(let chave of meuMap.keys()){
    console.log(chave);
};

for(let valor of meuMap.values()){
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(chave, valor);
}

meuMap.delete('stack');

console.log(meuMap.size);

//SET Trata-se de um conjunto de dados onde temos apenas o valor e este valor não pode se repetir
const meuSet = new Set();
meuSet.add('273.952.300-94');
meuSet.add('119.073.070-43');
meuSet.add('248.964.300-26');

console.log(meuSet);
console.log(meuSet.keys());
console.log(meuSet.values());

meuSet.forEach((valor) =>{
    console.log(valor)
});

const array = ['Sérgio Adriano', 'Mario Bittencur', 'Gerson Koringa', 'Mario Lobo Zagallo', 'Mario Bittencur', 'Gerson Koringa'];
const arrayComSet = new Set([...array]);
const arraySemDuplicatas = [...arrayComSet];

console.log(array);
console.log(arrayComSet);
console.log(arraySemDuplicatas);


//https://www.4devs.com.br/gerador_de_cpf