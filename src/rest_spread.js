// - OPERADORES DE REST E SPREAD
// 	* REST={
// Operador que possibilita receber um número indefinido de argumentos em uma função.
// Escrevemos o operador REST utilizando as reticências (...) antes do argumento:

// 		function somarNumetos(...numeros){}

// Assim, teremos acesso a um array chamado 'numeros'.

// OBSERVAÇÃO: podemos possuir apenas um argumento com o operador REST na função, e este argumento sempre deverá ser o argumento último da função.
// 	}

// 	* SPREAD={
// Com o operador SPREAD podemos distribuir/espalhar os dados de um array ou objeto.
// Sua sintaxe é igual ao do operador REST, utilizando as reticências.

// 		const array1 = [1, 2, 3, 4];
// 		const array2 = [...array1, 5, 6, 7, 8];

// Assim, podemos unir o conteúdo dos dois arrays.

// O seu uso com objetos nos permite copiar propriedades e também criar novos objetos.

// 		const carroDoJoao = {
// 		   marca: 'vw',
// 		   cor: 'prata'
// 		};
// 		const carroDaAna = {
// 		   ...carroDoJoao,
// 		   cor: 'azul'
// 		}
// 	}

function somar(){
    let somar = 0;

    for(let i = 0; i < arguments.length; i++){
        somar += arguments[i];
    }
    return somar;
};

console.log(somar(10, 20, 30));

//REST
function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual)=>{
        total += numeroAtual;
        return total; 
    }, 0);
    return soma;
};

console.log(somarComRest(10, 20, 35));

//SPREAD
const numeros = [1, 2, 3, 4];
console.log(numeros);

const timesDeFutebolSP = ['santos', 'bragantino', 'novohorizontino', 'ituano'];
const timesDeFutebolRJ = ['flamengo', 'bangu', 'américa', 'olaria'];
const timesDeFutebol = timesDeFutebolRJ.concat(timesDeFutebolSP);
console.log(timesDeFutebol);

const timesDeFutebol2 = [...timesDeFutebolSP, ...timesDeFutebolRJ];
console.log(timesDeFutebol2)

const carroDaJulia = {
    marca: 'fiat',
    modelo: 'uno',
    motor: 1.4
};
const carroDaMaria = {
    ...carroDaJulia,
    motor: 1.8
};
console.log(carroDaMaria);

//DESESTRUTURAÇÃO OBJETO
const {motor: motorCarroJulia} = carroDaJulia;
const {motor: motorCarroMaria} = carroDaMaria;

console.log(motorCarroJulia);
console.log(motorCarroMaria);

//DESESTRUTURAÇÃO ARRAY
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3); 
console.log(outrosTimes);