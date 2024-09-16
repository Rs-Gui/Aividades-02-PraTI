//                                                            ATIVIDADE 05

// Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

// Criação do array de objetos alunos

let alunos = [
    { nome: "João", nota1: 8, nota2: 7 },
    { nome: "Maria", nota1: 9, nota2: 8 },
    { nome: "Pedro", nota1: 6, nota2: 5 },
    { nome: "Ana", nota1: 10, nota2: 9 }
]

// Iteração sobre o array de objetos alunos e cálculo da média

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`Nome: ${aluno.nome}, Média: ${media}`)
}

