//                                                            ATIVIDADE 14

// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. 
// Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

// Objeto empresa com a propriedade departamentos

const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: ['Ana', 'Carlos', 'Beatriz']
        },
        {
            nome: 'TI',
            funcionarios: ['João', 'Mariana', 'Pedro']
        },
        {
            nome: 'Marketing',
            funcionarios: ['Fernanda', 'Lucas', 'Rafael']
        }
    ]
}

// Iterando sobre os departamentos e seus funcionários

for (const indice in empresa.departamentos) {
    const departamento = empresa.departamentos[indice]
    for (const funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`)
    }
}
