let teste = 12

// Lista de frutas favoritas
let lista = ["Maçã", "Laranja", "Uva", "Abacaxi"]
console.log(lista)

// acessando um index do array
lista[0] // imprime "Maçã"

//Modificar os itens do nosso array
//Substituir uma das frutas
lista[1] = "Morango"

//Adicionar uma nova fruta
lista.push("Manga")

//Verificar o tamanho do nosso array
lista.length

//remover itens do nosso array
lista.pop()

//guarda a palavra/item que foi removido
let lixo = lista.pop()

//removendo uma posição em especifico
//1 argumento é o indice que queremos comecar a remocao
//2 argumento é quantidade de elementos que queremos remover
lista.splice(1,1)

lista.indexOf("Uva") //acha o index
lista.indexOf("uva") //não acha o index e retorna -1

index_remover = lista.indexOf("Uva")
lista.splice(index_remover, 1)

let numeros = [10, 20, 30, 40, 10]
let soma = 0
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    soma += numeros[i]
}
console.log('A soma é: ' + soma)

//for of
let lista = ["Maçã", "Laranja", "Uva", "Abacaxi"]
for (let fruta of lista) {
    console.log(fruta)
}

for (let i = 0; i < lista.length; i++) {
    console.log(i)
    console.log(lista[i])
}

// Exercicio 5

let nomes = ["Ana", "Julio", "Andre", "Bruno", "Giovani"]
let nome = prompt("Digite um nome")
let existe = false
for (let n of nomes) {
    if (nome == n) {
        existe = true;
    }
}
if (existe == true) {
    console.log(`O nome: ${nome} existe na lista`)
} else {
    console.log(`O nome: ${nome} não existe na lista`)
}


let nomes = ["Ana", "Julio", "Andre", "Bruno", "Giovani"]
let nome = prompt("Digite um nome")
let existe = false
for (let n of nomes) {
    if (nome == n) {
        console.log(`O nome: ${nome} existe na lista`)
        break
    } else {
        console.log(`O nome: ${nome} existe na lista`)
    }
}



//Exercício 6
let numeros = [2, 5, 7]
//Percorrer o meu array
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
    console.log(`Tabuada do ${numero} \n`)
    //Tabuada de 1 a 10
    // 1,2,3...10
    for (let j = 1; j <= 10; j++) {
        let resultado = numero * j
        console.log(`${numero} X ${j} = ${resultado}`)
    }
    console.log("---------------------------")
}