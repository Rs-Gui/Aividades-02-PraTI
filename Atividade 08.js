//                                                            ATIVIDADE 08

// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes. 

// Array de objetos filmes

let filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
    { titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

// Novo array para armazenar apenas os títulos dos filmes
let titulos = []

// Usar forEach para preencher o novo array com os títulos

filmes.forEach(filme => {
    titulos.push(filme.titulo)
});

// Exibir os títulos dos filmes

console.log(titulos)

