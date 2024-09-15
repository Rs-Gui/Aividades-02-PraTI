//                                                            ATIVIDADE 01 



// // Criação do objeto carro

// let carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2021,
//     cor: "Prata"
// };

// // Iteração sobre as propriedades do objeto carro

// for (let propriedade in carro) {
//     console.log(`${propriedade}: ${carro[propriedade]}`)
// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 02



// // Criação do objeto livro

// let livro = {
//     titulo: "Dom Casmurro",
//     autor: "Machado de Assis",
//     anoPublicacao: 1899,
//     genero: "Romance"
// };

// // Verificação e adição da propriedade editora

// let propriedadeExiste = false

// for (let propriedade in livro) {
//     if (propriedade === "editora") {
//         propriedadeExiste = true
//         break
//     }
// }

// if (!propriedadeExiste) {
//     livro.editora = "Grupo Companhia das Letras"
// }

// console.log(livro)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 03



// Função para filtrar propriedades do objeto

// function filtrarPropriedades(obj, valorMinimo) {
//     let novoObjeto = {}

//     for (let propriedade in obj) {
//         if (obj[propriedade] > valorMinimo) {
//             novoObjeto[propriedade] = obj[propriedade]
//         }
//     }

//     return novoObjeto
// }

// // Exemplo de uso

// let produto = {
//     preco: 150,
//     peso: 2,
//     quantidade: 10,
//     desconto: 5
// }

// let valorMinimo = 5
// let resultado = filtrarPropriedades(produto, valorMinimo)

// console.log(resultado)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 04



// // Criação do array de objetos pessoas

// let pessoas = [
//     { nome: "Ana", idade: 28, cidade: "São Paulo" },
//     { nome: "Bruno", idade: 34, cidade: "Rio de Janeiro" },
//     { nome: "Carla", idade: 25, cidade: "Belo Horizonte" },
//     { nome: "Diego", idade: 30, cidade: "Porto Alegre" }
// ]

// // Iteração sobre o array de objetos pessoas

// for (let pessoa of pessoas) {
//     console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 05



// // Criação do array de objetos alunos

// let alunos = [
//     { nome: "João", nota1: 8, nota2: 7 },
//     { nome: "Maria", nota1: 9, nota2: 8 },
//     { nome: "Pedro", nota1: 6, nota2: 5 },
//     { nome: "Ana", nota1: 10, nota2: 9 }
// ]

// // Iteração sobre o array de objetos alunos e cálculo da média

// for (let aluno of alunos) {
//     let media = (aluno.nota1 + aluno.nota2) / 2
//     console.log(`Nome: ${aluno.nome}, Média: ${media}`)
// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 06


// // Criação do array de objetos funcionários

// let funcionarios = [

//     {nome: 'Maria', cargo: 'Consultora Junior', salario: 2300},
//     {nome: 'Jõao', cargo: 'Consultor Pleno', salario: 3000},
//     {nome: 'Cleber', cargo: 'Vendedor', salario: 1800},
//     {nome: 'Joana', cargo: 'Analista de Dados', salario: 4300},
//     {nome: 'Marcelo', cargo: 'Faxineiro', salario: 1500},
//     {nome: 'Kauan', cargo: 'Consultor Junior', salario: 2300},
//     {nome: 'Rose', cargo: 'Vendedora Executiva', salario: 4800},
//     {nome: 'Raissa', cargo: 'Gerente', salario: 4000},
//     {nome: 'Guilherme', cargo: 'Vendedor', salario: 1800}

// ]

// // Criação do filtro salárial

// for(funcionario of funcionarios) {

//     if (funcionario.salario >= 2000)

//         console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)

// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 07



// // Array de objetos produtos

// let produtos = [
//     { nome: "Monitor AOC", preco: 851.99, desconto: 0 },
//     { nome: "Mouse Redragon", preco: 200.00, desconto: 0 },
//     { nome: "Notebook Dell G15", preco: 5800.00, desconto: 0 }
// ]

// // Aplicar desconto de 10% em todos os produtos

// produtos.forEach(produto => {
//     produto.desconto = produto.preco * 0.10
//     produto.preco = produto.preco - produto.desconto
// })

// // Exibir o novo preço dos produtos

// produtos.forEach(produto => {
//     console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`);
// });



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 08



// // Array de objetos filmes

// let filmes = [
//     { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
//     { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
//     { titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 }
// ]

// // Novo array para armazenar apenas os títulos dos filmes
// let titulos = []

// // Usar forEach para preencher o novo array com os títulos

// filmes.forEach(filme => {
//     titulos.push(filme.titulo)
// });

// // Exibir os títulos dos filmes

// console.log(titulos)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 09



// // Array de objetos clientes

// let clientes = [
//     { nome: "Ana", idade: 25, cidade: "São Paulo" },
//     { nome: "Bruno", idade: 35, cidade: "Rio de Janeiro" },
//     { nome: "Carla", idade: 32, cidade: "Belo Horizonte" },
//     { nome: "Daniel", idade: 28, cidade: "Porto Alegre" },
//     { nome: "Elena", idade: 40, cidade: "Curitiba" }
// ]

// // Contador para clientes com mais de 30 anos

// let contador = 0

// // Usar forEach para contar quantos clientes têm mais de 30 anos

// clientes.forEach(cliente => {
//     if (cliente.idade > 30) {
//         contador++;
//     }
// })

// // Exibir o número de clientes com mais de 30 anos

// console.log(`Número de clientes com mais de 30 anos: ${contador}`)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 10



// // Array de objetos vendas

// let vendas = [
//     { produto: "Banana", quantidade: 2, valor: 50 },
//     { produto: "maça nanica", quantidade: 1, valor: 100 },
//     { produto: "Uva", quantidade: 3, valor: 30 }
// ]

// // Variável para armazenar o valor total das vendas

// let valorTotal = 0

// // Usar forEach para calcular o valor total das vendas

// vendas.forEach(venda => {
//     valorTotal += venda.quantidade * venda.valor
// })

// // Exibir o valor total das vendas

// console.log(`Valor total das vendas: R$${valorTotal.toFixed(2)}`)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 11



// // Array de pedidos

// const pedidos = [
//     { cliente: 'João', produto: 'Maçã', quantidade: 5 },
//     { cliente: 'Maria', produto: 'Banana', quantidade: 3 },
//     { cliente: 'João', produto: 'Laranja', quantidade: 2 },
//     { cliente: 'Maria', produto: 'Maçã', quantidade: 4 },
//     { cliente: 'Pedro', produto: 'Banana', quantidade: 1 }
// ]

// // Objeto para agrupar a quantidade total de produtos por cliente

// const totalPorCliente = {}

// // Usando forEach para agrupar as quantidades

// pedidos.forEach(pedido => {
//     const cliente = pedido.cliente
//     if (totalPorCliente[cliente]) {
//         totalPorCliente[cliente] += pedido.quantidade
//     } else {
//         totalPorCliente[cliente] = pedido.quantidade
//     }
// })

// // Exibindo os resultados

// for (const cliente in totalPorCliente) {
//     console.log(`${cliente}: ${totalPorCliente[cliente]}`)
// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 12



// // Array do estoque de objetos

// const estoque = [

//     {produto: 'Brinco', quantidade: 10, minimo: 8},
//     {produto: 'Pulseira', quantidade: 4, minimo: 5},
//     {produto: 'Anéis', quantidade: 18, minimo: 25},
//     {produto: 'Colar', quantidade: 1, minimo: 5},
//     {produto: 'Relógio', quantidade: 10, minimo: 5}

// ]

// // Usando forEach para duplicar os produtos necessários

// estoque.forEach(produtos => {

//     while (produtos.quantidade < produtos.minimo) {

//         produtos.quantidade *= 2

//     }

// })

// // Exibindo os resultados

// console.log(estoque)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 13



// // Objeto carrinho com a propriedade itens

// const carrinho = {
//     itens: [
//         { nome: 'Maçã', quantidade: 3, precoUnitario: 2.00 },
//         { nome: 'Banana', quantidade: 2, precoUnitario: 1.50 },
//         { nome: 'Laranja', quantidade: 5, precoUnitario: 1.20 }
//     ]
// }

// // Variável para armazenar o valor total do carrinho

// let valorTotal = 0

// // Usando forEach para calcular o valor total do carrinho

// carrinho.itens.forEach(item => {
//     valorTotal += item.quantidade * item.precoUnitario;
// })

// console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`)



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 14



// // Objeto empresa com a propriedade departamentos

// const empresa = {
//     departamentos: [
//         {
//             nome: 'Recursos Humanos',
//             funcionarios: ['Ana', 'Carlos', 'Beatriz']
//         },
//         {
//             nome: 'TI',
//             funcionarios: ['João', 'Mariana', 'Pedro']
//         },
//         {
//             nome: 'Marketing',
//             funcionarios: ['Fernanda', 'Lucas', 'Rafael']
//         }
//     ]
// }

// // Iterando sobre os departamentos e seus funcionários

// for (const indice in empresa.departamentos) {
//     const departamento = empresa.departamentos[indice]
//     for (const funcionario of departamento.funcionarios) {
//         console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`)
//     }
// }



// ------------------------------------------------------------------------------------------------------------------------------------



//                                                            ATIVIDADE 15



// // Declaração de variável do saldo da conta

// let saldoDaConta = 2000

// // Array de objeto transações 

// const transacoes = [
//     {tipo: 'Saída', valor: 200},
//     {tipo: 'Saída', valor: 250},
//     {tipo: 'Saída', valor: 20},
//     {tipo: 'Saída', valor: 100},
//     {tipo: 'Entrada', valor: 300},
//     {tipo: 'Saída', valor: 180},
//     {tipo: 'Saída', valor: 80},
//     {tipo: 'Entrada', valor: 100}
// ]

// // Usando forEach para diminuir ou aumentar o saldo da conta com base no tipo de transação 

// transacoes.forEach(transação => {

//     if(transação.tipo === 'Saída') {

//         saldoDaConta -= transação.valor

//     } else {

//         saldoDaConta += transação.valor

//     }

// })

// // Exibindo resultados

// console.log(saldoDaConta)
