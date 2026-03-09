let idade = 10
let Idade = 15

let teste = 5
teste = "Ola"

ex_teste = 2

// Variaveis e entrada do usuario
// let nome = "Joao"
let nome = prompt("Digite o seu nome") //entrada do usuario
console.log("Olá, " + nome + " seja bem vindo")

// //Calculadora
// let num_1 = 1
// let num_2 = 2
// let soma = num_1 + num_2
// console.log("A soma é: " + soma)

let num_1 = Number(prompt("Digite o primeiro numero"))
let num_2 = Number(prompt("Digite o segundo numero"))
let soma = num_1 + num_2
console.log("A soma é: " + soma)


let num_1 = Number(prompt("Digite o primeiro numero"))
let num_2 = Number(prompt("Digite o segundo numero"))
console.log("A soma é: " + (num_1 + num_2))


let nota = Number(prompt("Digite a sua nota"))
if (nota >= 7) {
    console.log("Parabens, voce foi aprovado")
} else {
    console.log("Infelizmente voce foi reprovado")
}

let num_1 = Number(prompt("Digite o numero 1"))
let num_2 = Number(prompt("Digite o numero 2"))

if (num_1 > num_2) {
    console.log(`O maior numero é: ${num_1}`)
} else if (num_2 > num_1) {
    console.log(`O maior numero é: ${num_2}`)
} else {
    console.log("Os numeros são iguais")
}

// Contagem de 0 a 5
for (let i = 0; i < 5; i++) {
    console.log(`Repetição numero: ${i}`)
}

let contador = 5
while (contador < 5) {
    console.log(`Repetição numero: ${contador}`)
    contador++
}

let contador = 5
do {
    console.log(`Repetição numero: ${contador}`)
    contador++
} while (contador < 5)

// 5 == '5'
// true
// 5 === '5'
// false

let numero = Number(prompt("Digite um numero"))
if (numero % 2 === 0) {
    console.log(`O numero ${numero} é par`)
} else {
    console.log(`O numero ${numero} é impar`)
}

let num_1 = Number(prompt("Digite o numero 1"))
let num_2 = Number(prompt("Digite o numero 2"))
let operador = prompt("Escolha uma das operações (+, -, *,/)")

if (operador === "+") {
    console.log(`Resultado: ${(num_1 + num_2)}`)
} else if (operador === "-") {
    console.log(`Resultado: ${(num_1 - num_2)}`)
} else if (operador === "*") {
    console.log(`Resultado: ${(num_1 * num_2)}`)
} else if (operador === "/") {
    if (num_2 !== 0) {
        console.log(`Resultado: ${(num_1 / num_2)}`)
    } else {
        console.log("Erro: divisão por zero")
    }
} else {
    console.log("Digite um operador valido")
}


let ano = Number(prompt("Digite um ano"))
if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`O ano ${ano} é bissexto`)
} else {
     console.log(`O ano ${ano} não é bissexto`)
}