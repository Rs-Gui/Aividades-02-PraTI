//                                                            ATIVIDADE 10

// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

// Array de objetos vendas

let vendas = [
    { produto: "Banana", quantidade: 2, valor: 50 },
    { produto: "maça nanica", quantidade: 1, valor: 100 },
    { produto: "Uva", quantidade: 3, valor: 30 }
]

// Variável para armazenar o valor total das vendas

let valorTotal = 0

// Usar forEach para calcular o valor total das vendas

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor
})

// Exibir o valor total das vendas

console.log(`Valor total das vendas: R$${valorTotal.toFixed(2)}`)

