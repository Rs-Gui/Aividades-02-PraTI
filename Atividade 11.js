//                                                            ATIVIDADE 11

// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

// Array de pedidos

const pedidos = [
    { cliente: 'João', produto: 'Maçã', quantidade: 5 },
    { cliente: 'Maria', produto: 'Banana', quantidade: 3 },
    { cliente: 'João', produto: 'Laranja', quantidade: 2 },
    { cliente: 'Maria', produto: 'Maçã', quantidade: 4 },
    { cliente: 'Pedro', produto: 'Banana', quantidade: 1 }
]

// Objeto para agrupar a quantidade total de produtos por cliente

const totalPorCliente = {}

// Usando forEach para agrupar as quantidades

pedidos.forEach(pedido => {
    const cliente = pedido.cliente
    if (totalPorCliente[cliente]) {
        totalPorCliente[cliente] += pedido.quantidade
    } else {
        totalPorCliente[cliente] = pedido.quantidade
    }
})

// Exibindo os resultados

for (const cliente in totalPorCliente) {
    console.log(`${cliente}: ${totalPorCliente[cliente]}`)
}

