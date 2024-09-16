//                                                            ATIVIDADE 07

// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

// Array de objetos produtos

let produtos = [
    { nome: "Monitor AOC", preco: 851.99, desconto: 0 },
    { nome: "Mouse Redragon", preco: 200.00, desconto: 0 },
    { nome: "Notebook Dell G15", preco: 5800.00, desconto: 0 }
]

// Aplicar desconto de 10% em todos os produtos

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10
    produto.preco = produto.preco - produto.desconto
})

// Exibir o novo preço dos produtos

produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`);
});


