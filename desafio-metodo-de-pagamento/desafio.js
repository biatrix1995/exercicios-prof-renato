/**Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 
Código Condição de pagamento

a) À vista em dinheiro ou cheque, recebe 10% de desconto
b)À vista no cartão de crédito, recebe 15% de desconto
c)Em duas vezes, preço normal de etiqueta sem juros
d)Em três vezes ou mais, preço normal de etiqueta mais juros de 10% 
*/

/**
 * Métodos de pagamento:
 * * em dinheiro
 * *em cheque
 * *no cartão
 */

//parseFloat transforma texto ou número em número decimal
const precoProduto = parseFloat(prompt("Qual o preço do produto?"))

const mensagem = `
Por favor, informe qual é o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`
const metodoDePagamento = prompt(mensagem)

console.log (precoProduto)
console.log(metodoDePagamento)

/** Estrutura condicional "se" é o "if" - SE A CONDIÇÃO FOR VERDADEIRA, ELE EXECUTA P BLOCO DE CÓDIGO*/

/**Se o valor da constante de "metodoDePagamento" for 1 OU 2, o usuário terá 10% de desconto */

if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.90
    alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
} else if (metodoDePagamento == 3) {

    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = preço do produto
     * 3 ou mais parcelas = acrescimo de 10%
     */
    const parcelas = parseInt(prompt("Informe a quantidade de parcelas desejadas:"))

    if(parcelas==1){
        const precoFinal = precoProduto * 0.85
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    } else if(parcelas==2){
        const precoFinal = precoProduto
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    } else {
        const precoFinal = precoProduto * 1.10
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    }
}
/** Se o primeiro teste lógico for FALSE ele vai rodar o segundo teste = else */
/**Se o valor da constante de "metodoDePagamento" for 3 */
/**Na última alternativa, colocar o "else" sozinho, sem "if" */
