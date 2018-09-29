'use strict'

/* permite obter inputs do usuario */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

/* base de dados */
const suspects = [
    'Charles B. Abbage',
    'Donald Duck Knuth',
    'Ada L. Ovelace',
    'Alan T. Uring',
    'Ivar J. Acobson',
    'Ras Mus Ler Dorf'
]
const places = [
    'Redmond',
    'Palo Alto',
    'San Francisco',
    'Tokio',
    'Restaurante no Fim do Universo',
    'São Paulo',
    'Cupertino',
    'Helsinki',
    'Maida Vale',
    'Toronto',
]

const guns = [
    'Peixeira',
    'DynaTAC 8000X (o primeiro aparelho celular do mundo)',
    'Trezoitão',
    'Trebuchet',
    'Maça',
    'Gládio'
]
/* fim da base de dados */

// variaveis indices para identificar os items (suspeito, armas e locais)
let suspect = 0,
    gun = 0,
    place = 0,
    countTheory = 1;

/**
 * este metodo verifica se ainda ha opções, se não ele finaliza a execução e apresenta uma mensagem ao usuario
 * @param {*} idx indice no array de suspeitos
 * @param {*} arr array de suspeitos
 * @param {*} reason escopo para apresentação da mensagem
 */
const validateState = (idx, arr, reason) => {
    if (idx >= arr.length) {
        console.log('O Crime nao pode ser solucionado!')
        console.log(`Não há mais ${reason}!`)
        process.exit(1);
    }
}
/**
 * remove itens duplicados em um array
 * @param {*} arr array de numeros inteiros
 */
const removeDuplicates = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) >= index;
    })
}

/**
 *  apresenta uma teoria ao usuario!
 */
const printTheory = () => {
    console.log(`\nTeoria ${countTheory}`)
    console.log(`[1] Suspeito -> (${suspect+1}) ${suspects[suspect]}`)
    console.log(`[2] Arma     -> (${gun+1}) ${guns[gun]}`)
    console.log(`[3] Local:   -> (${place+1}) ${places[place]}`)
}


printTheory();
process.stdout.write("\n>> ");

rl.on('line', function (line) {
    let options = [];
    // lendo entrada do usuario, removendo nao numeros e inserindo em forma de inteiro no array de opcoes
    line.split(' ').filter((n) => {
        return !isNaN(n)
    }).forEach(element => {
        options.push(parseInt(element, 10))
    });

    // removendo entradas duplicadas
    options = removeDuplicates(options);
    // caso não ha opções a ser tratada informar o usuario
    if (!options.length) {
        console.log('Opção Invalida!')
    }
    // crime solucionado quando a opção é zero
    if (options[0] == 0 && options.length == 1) {
        console.log('\n************************************************************************')
        console.log(`Crime Solucionado \\o/`)
        printTheory();
        console.log('*************************************************************************')
        process.exit(1)
    }
    // se condição satisfaz, uma nova teoria sera gerada!
    if(options.includes(1) || options.includes(2) || options.includes(3)) {
        console.log(`[${options}], gerando nova teoria...`)
        countTheory ++;
    }
    // descartando opções
    options.forEach(element => {
        switch (element) {
            case 1:
                suspect++;
                break;
            case 2:
                gun++;
                break;
            case 3:
                place++;
                break;
        }
    })
    // validando se ainda ha opções
    validateState(suspect, suspects, 'suspeitos');
    validateState(gun, guns, 'Armas');
    validateState(place, places, 'Locais');

    printTheory();
    process.stdout.write("\n>> ");

})