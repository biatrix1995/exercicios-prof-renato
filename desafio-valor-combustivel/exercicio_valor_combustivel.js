/**
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos:
 * Álcool = até 25L = 2% off
 *          acima de 25L = 4% off
 * Gasolina = até 25L = 3% off
 *           acima de 25L = 5% off 
 * Escreva um algoritimo que leia o número de litros vendidos e o tipo de combustível (A para Alcool e G para gasolina), calcule e imprima o valor a ser pago pelo cliente.
 * Sabendo-se que o 1l de gasolina = R$2,70 e 1l de álcool = R$1,90
 */

 let tipoCombustivel = (prompt(`
 Olá! Qual tipo de combustível você deseja abastecer?
 Por favor, digite: G para gasolina ou A para Álcool!
 `).toUpperCase())
 let quantidadeLitros = (parseFloat(prompt(`E quantos litros deseja?`)))

 
    if (tipoCombustivel == "G" && quantidadeLitros <= 25) {
    const precoFinal = 2.70 * 0.97 * quantidadeLitros
    alert(`Você pagará ${precoFinal.toFixed(2)} reais por ${quantidadeLitros} litros de gasolina!`)
    } 
    else if (tipoCombustivel == "G" && quantidadeLitros > 25) {
    const precoFinal = 2.70 * 0.95 * quantidadeLitros
    alert(`Você pagará ${precoFinal.toFixed(2)} reais por ${quantidadeLitros} litros de gasolina!`)
    }
    else if (tipoCombustivel == "A" && quantidadeLitros <= 25){
    const precoFinal = 1.90 * 0.98 * quantidadeLitros
    alert(`Você pagará ${precoFinal.toFixed(2)} reais por ${quantidadeLitros} litros de álcool!`)
    }
    else if (tipoCombustivel == "A" && quantidadeLitros > 25){
    const precoFinal = 1.90 * 0.96 * quantidadeLitros
    alert(`Você pagará ${precoFinal.toFixed(2)} reais por ${quantidadeLitros} litros de álcool!`)
    }
