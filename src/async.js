//- PROGRAMAÇÃO DE FORMA ASSÍNCRONA - ASYNC AWAIT

function funcaoMuitoPesada(){
    let execucao = 0;

    for(let i = 0; i < 1000000000; i++){
        execucao++;
    };

    return execucao;
};

//PROMISE
const funcaoMuitoPesadaComPromise = new Promise((resolve, rejeita) => {
    try{
        let execucao = 0;
        for(let i = 0; i < 1000000000; i++){
        execucaso++;
        };
        resolve(execucao);
    }catch(e){
        rejeita('Deu errado a iteração');
    }
});

const promiseComParametro = (login, senha) =>{
    return new Promise((resolve, rejeita) => {
        setTimeout(()=>{
            resolve(`Logado com o usuário: ${login}`);
        }, 3000);
    });
};

//ASYNC AWAIT
async function execucaoPrincipal(){
    console.log('inicio');
    // console.log(funcaoMuitoPesada());
    // funcaoMuitoPesadaComPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    promiseComParametro('sergioadrianomc@gmail.com', 123456).then(resultado => {console.log(resultado)});

    try{
        const resultado = await funcaoMuitoPesadaComPromise;
        console.log(resultado);    
    }catch(e){
        console.log(e);
    }
    console.log('fim');
}

execucaoPrincipal();