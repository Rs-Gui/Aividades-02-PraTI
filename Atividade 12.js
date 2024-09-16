//                                                            ATIVIDADE 12

// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// Array do estoque de objetos

const estoque = [

    {produto: 'Brinco', quantidade: 10, minimo: 8},
    {produto: 'Pulseira', quantidade: 4, minimo: 5},
    {produto: 'Anéis', quantidade: 18, minimo: 25},
    {produto: 'Colar', quantidade: 1, minimo: 5},
    {produto: 'Relógio', quantidade: 10, minimo: 5}

]

// Usando forEach para duplicar os produtos necessários

estoque.forEach(produtos => {

    while (produtos.quantidade < produtos.minimo) {

        produtos.quantidade *= 2

    }

})

// Exibindo os resultados

console.log(estoque)

