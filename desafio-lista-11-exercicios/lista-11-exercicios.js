
/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar :
a. A menor altura do grupo;
b. A maior altura do grupo;*/

const altura = [] /** vai guardar as alturas na lista*/
for(let i = 1; i <=15; i++) { /** o i só serve pra fazer o loop executar */
    const n = parseInt(prompt(`Digite a altura da pessoa ${i} !`))
    altura.push(n) /** guardar localmente pra depois colocar na lista */
}
let menorAltura = 1000
let maiorAltura = 0

for (let numero of altura){
    if(numero < menorAltura){
        menorAltura = numero
    } 
    if (numero > maiorAltura){
        maiorAltura = numero
    }
}
alert(`A menor altura do grupo, é de ${menorAltura}`)
alert(`A maior altura do grupo, é de ${maiorAltura}`)

