// SOBRE A ARROW FUNCTION

const minhaFuncao = () => 'Diz olá';

const retornaUmCarro = () => ({
    nome: 'Gol',
    marca: 'Volks'
});

console.log(minhaFuncao);
console.log(retornaUmCarro);

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: function(){
        console.log(this);
        this.velocidadeAtual -= 10
    }
};

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);