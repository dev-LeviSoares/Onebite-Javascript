const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf","Aragorn", "Legolas", "Gimli"]
console.log(arr)
// Adicionar Elementos
// push = Adiciona ao final da lista.
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift = Adiciona ao início da lista.
tamanho = arr.unshift("teste")
console.log(arr)
console.log(tamanho)

// Remover elementos
// pop = remv. fim
let ultimoElemento = arr.pop() //No pop() não precisar colocar valor algum.
console.log(arr)
console.log(ultimoElemento) // Ele a const guarda o ultimo elemento e aqui ela é exibida.

// shift = remv. começo
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um Elemento
//includes = verifica se um elemento existe(esta presente, inclui) no array.
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf = procura o elemento pelo índice.
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice = copia parte do array e salva em um novo array(somente a parte que você cortou)
const hobbits = arr.slice(0, 4) //ELe pega do 0 até antes da posição 4
const outros = arr.slice(-4) // É usado para referenciar partindo do final do array.
// Quando você utiliza o - ele inicia lê o array ao contrario (-1 = ultimo índice)
console.log(arr)
console.log(hobbits)
console.log(outros)
// O SLICE NÃO MODIFICA O ARRAY, ELE FAZ UMA CÓPIA

// concat = concatenar
const sociedade = hobbits.concat(outros, "Boromir") // Concatenou uma variável e uma string.
console.log(sociedade)

// Substituição dos Elementos
//splice = remove um grupo de elementos do array e substitui por outro grupo de elementos.
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf. o Cinzento')
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos do array(percorrer o array)
for (let i = 0; i < sociedade.length; i++){
    const elemento = sociedade[i]
    console.log(`${elemento} se encontra na posição ${i}`)
} 