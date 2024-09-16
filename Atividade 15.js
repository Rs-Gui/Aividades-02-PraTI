//                                                            ATIVIDADE 15

// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

// Declaração de variável do saldo da conta

let saldoDaConta = 2000

// Array de objeto transações 

const transacoes = [
    {tipo: 'Saída', valor: 200},
    {tipo: 'Saída', valor: 250},
    {tipo: 'Saída', valor: 20},
    {tipo: 'Saída', valor: 100},
    {tipo: 'Entrada', valor: 300},
    {tipo: 'Saída', valor: 180},
    {tipo: 'Saída', valor: 80},
    {tipo: 'Entrada', valor: 100}
]

// Usando forEach para diminuir ou aumentar o saldo da conta com base no tipo de transação 

transacoes.forEach(transação => {

    if(transação.tipo === 'Saída') {

        saldoDaConta -= transação.valor

    } else {

        saldoDaConta += transação.valor

    }

})

// Exibindo resultados

console.log(saldoDaConta)
