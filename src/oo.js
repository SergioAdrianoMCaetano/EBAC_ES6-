// O ECMAScript introduziu classes no JavaScript, substituindo as funções construtoras. As classes têm um construtor para inicializar os atributos. A palavra reservada 'extends' permite a herança entre classes. Melhorias no encapsulamento permitem criar membros privados facilmente, usando '#' antes do nome da propriedade. Estes membros só são acessíveis dentro da própria classe.

class Pokemon {

    hp = 100;

    constructor(nomeDoPokemo, tipoDoPokemon){
        this.nome = nomeDoPokemo;
        this.tipo = tipoDoPokemon;
    };

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com o ${nomeDoAtaque}`);
    };

    recebeuAtaque(){
        this.hp -= 10;
        console.log(`O life do ${this.nome} agora é de: ${this.hp};`);
    }
};

class Raichu extends Pokemon{
    constructor() {
        super('Raichu do Bil', 'elÉtrico')
    }

    atacar(){
        console.log(`${this.nome} atacou com ESPIRAL DE TROVÕES`);
        
    }
}

class Pikachu extends Pokemon{
    constructor(){
        super('Pikachu do Ash', 'ElétriC0')
    }

    atacar(){
        console.log(`${this.nome} atacou com CHOQUE DO TROVÃO`)
    }

    recebeuAtaque(){
        this.hp -= 20;
        console.log(`O life do ${this.nome} agora é de: ${this.hp};`);
    }
}


//RPG
const raichu = new Raichu();
const pikachu = new Pikachu();

console.log(`${raichu.nome} é instanceof Pokemon:`, raichu instanceof Pokemon);
console.log(`${pikachu.nome} é instanceof de Raichu:`, pikachu instanceof Raichu);

console.log(pikachu);
console.log(raichu);

pikachu.atacar();
raichu.recebeuAtaque();
pikachu.atacar();
pikachu.atacar();
raichu.recebeuAtaque();
raichu.atacar();
pikachu.recebeuAtaque();
raichu.atacar();
pikachu.recebeuAtaque();


console.log(raichu.hp);
console.log(pikachu.hp);



