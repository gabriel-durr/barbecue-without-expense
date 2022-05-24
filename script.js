
// Carne - 400 gr por pessoa.  + de 6 horas - 650
// Cerveja - 1200ml por pessoa. + de 6 horas - 2000ml
// Refrigerante/Agua - 1000ml por pessoa. + de 6 horas 1500ml
// Crianças Valem por 0,5


// 1- pegar os ids dos inputs

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")



let resultado = document.getElementById("resultado");


// 2- Função principal de calculo das categorias do evento: Adultos, Crianças e a duracao do evento. 

function calcular() {
    console.log("calculando ...");
    

    // 3.1 - criar variáveis que recebem as variáveis que receberam o id dos inputs e em seguida .value pra pegar o valor digitado nos inputs 

    let adultos = inputAdultos.value; 
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

                        // 4 - Criar variável que recebe a função de Carne por pessoa e como parâmentro colocamos a duracao do evento, que pega o valor digitado no input, para adultos e criaças
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);


    // 6 - Criar variável que recebe a função de calculo da cerveja, em relação a duracao do evento como paramêtro  e removemos a parte da criança como na var anteior pois criança não bebe hehe 


    let qdtTotalCerveja = cervejaPP(duracao) * adultos;


    // 8 - Criar variável que recebe a função de bebidas por pessoa e como parâmentro colocamos a duracao do evento, que pega o valor digitado no input, para adultos e criaças

    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);




    // 9 - pegar a variável resultado que esta com a ID da DIV e colocamor ela na tela com innerHTML, e atribuímos uma template string que pega a tag elemento P e dentro dela as variáveis que traz a a quantidade total pra cada categoria.
    
  

    // 10 -Dentro da template string:  Na quantidade total de carne colocamos a variável divida por 1000, para transformar o valor em grama, em kilograma.
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne</p>`

    


    // 11 - Dentro da template string:  Na quantidade total de cerveja colocamos a variável divida por 355, para transformar o valor em ml de cerveja, para unidades de lata. E para não ficar um valor quebrado, utilizamos o método Math.ceil, para transformar em número inteiro do teto, e arredondar o valor. 

    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Lata(s) de Cerveja</p>`



    // 12 - Dentro da template string:  Na quantidade total de cerveja colocamos a variável divida por 2000, para transformar o valor em ml de Bebidas(Refri), para unidades de garrafas de 2l. E para não ficar um valor quebrado, utilizamos o método Math.ceil, para transformar em número inteiro do teto, e arredondar o valor. 
    
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafa(s) de Refrigerante</p>`

    


    //  - Após a primneira linha colocamos o += para não subistuir a linha anterior no innterHTML, que significa que estamos recebendo o anterior + o que estamos acrescentando.

    console.log(qdtTotalCarne);

    


}



// 3.2 - Criar Função para multiplicar a quantidade de carne por pessoa, com base no tempo do evento, se passar de 6 horas o valor é aumentado e então é criada uma condicional para isso.

function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    }else {
        return 400;
    }
    
}


// 5 - Função para calcular a quantidade de cerveja por adlto


 function cervejaPP(duracao){
    
    if(duracao >= 6){
        return 2000;
    }else {
        return 1200;
    }
    
}

// 7 - função para calcular a quantidade de bebidas por adultos e crianças 


function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

