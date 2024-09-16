//                                                            ATIVIDADE 04

// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

// Criação do array de objetos pessoas

let pessoas = [
    { nome: "Ana", idade: 28, cidade: "São Paulo" },
    { nome: "Bruno", idade: 34, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 25, cidade: "Belo Horizonte" },
    { nome: "Diego", idade: 30, cidade: "Porto Alegre" }
]

// Iteração sobre o array de objetos pessoas

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}
