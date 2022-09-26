/**
 * /* 1)Faça um programa em Javascript que leia um vetor de 6 elementos numéricos inteiros, calcule e mostre:
a) A quantidade de números pares
b) Quais os números pares
c) A quantidade de números ímpares
d) Quais os números ímpares*/

//criar um novo array
const num = []
//criar um loop que execute 6 ezes
for(let i = 1; i <=6; i++) {
    const n = parseInt(prompt(`Digite o ${i} número!`))
    num.push(n)
}
//separar os pares ímpares

const pares = []
const impares = []

//percorre o array com os números informados
//cria uma variável que guarda os valores de cada posição do array

for (let numero of num){
    /*
    Separar os valores pares dos ímpares
    colocando cada valor em seu respectivo array*/
    /* O valor que você declara á esquerda do of em = "for( let x of y){}" é a variável que armazena os valores da lista.*/

    if(numero % 2 == 0){
        pares.push(numero)
    } else {
        impares.push(numero)
    }
}

alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} valores impares: ${impares.join(', ')}`)