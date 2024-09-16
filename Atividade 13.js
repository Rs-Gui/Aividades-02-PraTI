//                                                            ATIVIDADE 13

// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é umarray de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. 
// Use forEach para calcular o valor total do carrinho.

// Objeto carrinho com a propriedade itens

const carrinho = {
    itens: [
        { nome: 'Maçã', quantidade: 3, precoUnitario: 2.00 },
        { nome: 'Banana', quantidade: 2, precoUnitario: 1.50 },
        { nome: 'Laranja', quantidade: 5, precoUnitario: 1.20 }
    ]
}

// Variável para armazenar o valor total do carrinho

let valorTotal = 0

// Usando forEach para calcular o valor total do carrinho

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
})

// Exibição do resultado

console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`)

