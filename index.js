const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
        respostas: [
            "/* Comente aqui */",
            "// Comente aqui",
            "<!-- Comente aqui -->"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "===",
            "=="
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript para verificar igualdade?",
        respostas: [
            "a == b",
            "a === b",
            "a = b"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o tipo de dados que representa valores verdadeiros ou falsos em JavaScript?",
        respostas: [
            "String",
            "Boolean",
            "Number"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "Retorna o valor absoluto de um número",
            "Converte uma string em um número inteiro",
            "Retorna o comprimento de uma string"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função usada para gerar um número aleatório em JavaScript?",
        respostas: [
            "random()",
            "Math.random()",
            "getRandomNumber()"
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador '&&' representa em JavaScript?",
        respostas: [
            "Operador de negação",
            "Operador de concatenação",
            "Operador lógico 'E' (AND)"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()"
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem= template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
           corretas.add(item)
        } 

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)   
}
