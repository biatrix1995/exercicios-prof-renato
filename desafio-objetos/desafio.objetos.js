/*
a)Crie um algortimo que recebe informações de 15 produtos
b)Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque.
c)imprima no HTML as informações de cada produto
d)e o produto entre o preço e a quantidade de produtos em estoque (preço total).
*/

let produtos = [
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    },
    {
        nome:'',
        marca:'',
        foto:'',
        preco:'',
        quant:''
    }
]


for(let i = 1; i <=15; i++) { 
        nome = prompt(`Por favor, digite o nome que deseja dar ao ${i} º produto! `)
        marca = prompt(`Por favor, digite a marca do ${i} º produto!`)
        foto = prompt(`Por favor, insira o link da foto do ${i} º produto!`)
        preco = prompt(`Por favor, insira o preço do ${i} º produto!`)
        quant = prompt(`Por favor, insira a quantidade de itens que você possui do ${i} º produto!`)

        let precoTotal = quant*preco
        
        document.write(`<p><img src="${foto}" whidth="100px" height="100px"></img>
                        <br>
                        Nome: ${nome}
                        <br> 
                        Marca: ${marca}
                        <br> 
                        Preço Unitário: R$ ${preco},00
                        <br>  
                        Quantidade em estoque: ${quant} 
                        <br> 
                        Preço Total: R$ ${precoTotal},00
                        </p>`)
    }