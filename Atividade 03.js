//                                                            ATIVIDADE 03

// Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. 
// Use for in para filtrar as propriedades.

// Função para filtrar propriedades do objeto

function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {}

    for (let propriedade in obj) {
        if (obj[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = obj[propriedade]
        }
    }

    return novoObjeto
}

// Exemplo de uso

let produto = {
    preco: 150,
    peso: 2,
    quantidade: 10,
    desconto: 5
}

let valorMinimo = 5
let resultado = filtrarPropriedades(produto, valorMinimo)

// Exibição do resultado final

console.log(resultado)
