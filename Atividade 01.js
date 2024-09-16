//                                                            ATIVIDADE 01 

// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

// Criação do objeto carro

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    cor: "Prata"
};

// Iteração sobre as propriedades do objeto carro

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}
