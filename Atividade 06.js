//                                                            ATIVIDADE 06

// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. 
//Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

// Criação do array de objetos funcionários

let funcionarios = [

    {nome: 'Maria', cargo: 'Consultora Junior', salario: 2300},
    {nome: 'Jõao', cargo: 'Consultor Pleno', salario: 3000},
    {nome: 'Cleber', cargo: 'Vendedor', salario: 1800},
    {nome: 'Joana', cargo: 'Analista de Dados', salario: 4300},
    {nome: 'Marcelo', cargo: 'Faxineiro', salario: 1500},
    {nome: 'Kauan', cargo: 'Consultor Junior', salario: 2300},
    {nome: 'Rose', cargo: 'Vendedora Executiva', salario: 4800},
    {nome: 'Raissa', cargo: 'Gerente', salario: 4000},
    {nome: 'Guilherme', cargo: 'Vendedor', salario: 1800}

]

// Criação do filtro salárial

for(funcionario of funcionarios) {

    if (funcionario.salario >= 2000)

        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)

}


