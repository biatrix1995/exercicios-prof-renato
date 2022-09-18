//8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.

alert(" Agora vamos para o oitavo e último desafio! Parabéns por ter chegado até aqui! (: ")
let raioOleo = Number (prompt (" Insira o valor da do raio de sua lata de óleo, por favor! "))
let alturaOleo = Number (prompt (" Agora, insira o valor da altura de sua lata de óleo, por favor! "))
const pi = 3.14
let areaOleo = Math.pow(raioOleo,2)*pi
let volumeOleo = areaOleo*alturaOleo
alert(" A sua lata de óleo contém " + volumeOleo +  " cm³! " )

