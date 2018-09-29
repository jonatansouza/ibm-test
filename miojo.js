'use strict'

// numero maximo de iteracoes
const MAX_ATTEMPTS = Number.MAX_SAFE_INTEGER;

/**
 * Valida se os argumentos passados estao corretos e retorna verdadeiro ou falso
 * @param {*} arr 
 */
const validateArgs = (arr) => {
    if (arr.lengh < 3) {
        return true;
    }
    for (let i = 0; i < 3; i++) {
        if (isNaN(arr[i])) {
            return true;
        }
    }
    return false;
}


if (validateArgs(process.argv.slice(2))) {
    console.log('Parâmetros Incorretos!');
    console.log('Uso: node miojo.js <numero inteiro ampulheta 1> <numero inteiro ampulheta 2> <numero inteiro tempo de cozimento>')
    process.exit(1);
}
// atribuinfo os parametros as variaveis globais
const amp1 = parseInt(process.argv[2], 10),
    amp2 = parseInt(process.argv[3], 10),
    cook = parseInt(process.argv[4], 10);
/**
 * Calcula o maximo divisor comum entre dois numeros
 * @param {*} num1 
 * @param {*} num2 
 */
const mdc = (num1, num2) => {
    let remain;
    do {
        remain = num1 % num2;
        num1 = num2;
        num2 = remain;

    } while (remain != 0);

    return num1;
}

/**
 * Verifica se e possivel resolver o problema com as ampulhetas passadas e o tempo de cozimento
 * @param {*} amp1 
 * @param {*} amp2 
 * @param {*} miojo 
 */
const validateViability = (amp1, amp2, miojo) => {
    // os tempos das ampulhetas deve ser maior
    if (amp1 <= miojo || amp2 <= miojo) {
        console.log(`O tempo das ampulhetas deve ser maior que o de cozimento!`);
        process.exit(1)
    }
    // o tempo de cozimento deve ter um divisao exata pelo MDC
    if ((miojo % mdc(amp1, amp2))) {
        console.log(`Não é possivel obter o tempo de cozimento exato com as ampulhetas informadas!`);
        process.exit(1)
    }
}


validateViability(amp1, amp2, cook);

let tempAmp1 = amp1,
    tempAmp2 = amp2,
    checkTime = 0,
    count = 0,
    totalTime = 0;

/**
 * Itera com as ampulhetas afim de encontrar a quantidade de iterações e o tempo gasto para o problema
 */
while (checkTime < MAX_ATTEMPTS) {
    // recebe o tempo da menor subAmpulheta
    checkTime = tempAmp1 > tempAmp2 ? tempAmp2 : tempAmp1;
    if (checkTime == cook) {
        totalTime += checkTime;
        break;
    } else {
        // resolve as diferenças e acrescenta ao tempo total
        if (tempAmp1 > tempAmp2) {
            tempAmp1 = tempAmp1 - tempAmp2
            totalTime += tempAmp2;
            tempAmp2 = amp2;
        } else {
            tempAmp2 = tempAmp2 - tempAmp1
            totalTime += tempAmp1;
            tempAmp1 = amp1;
        }
    }
    count++;
}
if(checkTime >= MAX_ATTEMPTS){
    console.log('Não foi possivel resolver com o numero maximo de tentativas configurado!')
    process.exit(1)
}
// imprime o relatorio final ao usuario
console.log('tempo total: ', totalTime);
console.log('tempo de cozimento: ', checkTime);
console.log('iterações necessarias: ', count)