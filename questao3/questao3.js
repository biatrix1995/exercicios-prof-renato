//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

alert( " Olá! Vamos fazer o terceiro cálculo! " )
let valorRaio = Number (prompt ( " Insira o valor do raio de sua circunferência" ))
const pi = 3.14
let valorArea = Math.pow ( valorRaio, 2 )*pi
alert( " O valor da área do sua circunferência é de " + valorArea )
let valorPerimetro = 2 * pi * valorRaio
alert( " O valor do perímetro da sua circunferência é " + valorPerimetro )

