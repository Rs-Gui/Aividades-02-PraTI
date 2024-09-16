//                                                            ATIVIDADE 02

// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

// Criação do objeto livro

let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
};

// Verificação e adição da propriedade editora

let propriedadeExiste = false

for (let propriedade in livro) {
    if (propriedade === "editora") {
        propriedadeExiste = true
        break
    }
}

if (!propriedadeExiste) {
    livro.editora = "Grupo Companhia das Letras"
}

// Exibição do resultado final

console.log(livro)
