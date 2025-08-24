const palavra = window.prompt('Digite uma palavra e descubra se é palíndromo ou não:')
let palavraInvertida = ''

for( let i = palavra.length - 1; i >= 0; i-- ){
    palavraInvertida += palavra[i]
}
if (palavra === palavraInvertida){
    window.alert(`${palavra} é um palíndromo!`)
} else{
    window.alert(
        `${palavra} não é um palíndromo!\n\n 
        ${palavra} !== ${palavraInvertida}`
    )
}