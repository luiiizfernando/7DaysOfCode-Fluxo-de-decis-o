let area
let especializacao
let opcao
let lista_aprendizado_tecnologias = [];
let contador = 0

console.log("Para a pergunta seguinte, insira a resposta exatamente como ela aparece na pergunta. ")
area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End? ")

//colocando o dado do usuário com a primeira letra maiuscula. Estou usando isso para tratamento. Para caso o usuário digitar com letra minúscula ao invés de maiuscula como está na perguta.
area = area.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

// Se usuário digitar uma área inválida o sistema avisará e pedirá novamente a area
while(area != "Front-End" && area != "Back-End")
{
    console.log("Você digitou uma área inválida.")
    area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End? ")
    area = area.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

if(area == "Front-End")
{
    especializacao = prompt("Você quer aprender React ou Vue? ")
    especializacao = especializacao.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    while(especializacao != "React" && especializacao != "Vue")
    {
        console.log("Você digitou uma especialização inválida")
        especializacao = prompt("Você quer aprender React ou Vue? ")
        especializacao = especializacao.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    }
}
else
{
    especializacao = prompt("Você quer aprender C# OU Java? ")
    especializacao = especializacao.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    while(especializacao != "C#" && especializacao != "Java")
    {
        console.log("Você digitou uma especialização inválida")
        especializacao = prompt("Você quer aprender C# ou Java ")
        especializacao = especializacao.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    }
}

console.log("1 - Deseja seguir se especializando na área escolhida.")
console.log("2 - Deseja seguir se desenvolvolvendo para se tornar Fullstack")
opcao = parseInt(prompt("Digite a opção desejada: "))

while (opcao != 1 && opcao != 2)
{
    console.log("Você digitou um valor inválido. ")
    opcao = parseInt(prompt("Digite a opção desejada: "));
}

if(opcao == 1)
{
    console.log(`\nVocê quer seguir a área de ${area}, e quer aprender ${especializacao}. E você quer seguir se especializando na área escolhida.\n`)
}
else
{
     console.log(`\nVocê quer seguir a área de ${area}, e quer aprender ${especializacao}. E você quer seguir se desenvolvolvendo para se tornar Fullstack.\n`)
}

while(true)
{
    if(contador == 0)
    {
        let entrada = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer? (se não tiver nenhuma digite 'sair' para encerrar): ")
        
        if(entrada.toLowerCase() === "sair")
        {
            break; // Sai do loop se o usuário digitar "sair"
        }
        else
        {
            lista_aprendizado_tecnologias.push(entrada);
            contador++;
        }
    }
    else
    {
        let entrada = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (se não tiver nenhuma digite 'sair' para encerrar): ")
        
        if(entrada.toLowerCase() === "sair")
        {
            break; // Sai do loop se o usuário digitar "sair"
        }
        else
        {
            lista_aprendizado_tecnologias.push(entrada);
        }
    }
}

//Como não sei usar alguma biblioteca ou API para pesquisar sobre a tecnoligia digitada pelo usuário. Estarei apenas imprimindo a lista de tecnologia digitada

if(lista_aprendizado_tecnologias.length === 0)
{
    console.log("Usuário não quer aprender mais nenhuma tecnologia. Portanto estamos encerrando o programa.")
}
else
{
    console. log("Segue a lista de tecnologias o usuário quer se especializar ou aprender: ")
    for (let i = 0; i < lista_aprendizado_tecnologias.length; i++)
    {
        console.log(i+1 + " - " + lista_aprendizado_tecnologias[i]);
    }
}