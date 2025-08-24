let numero = parseInt(window.prompt('Digite um valor a ser multiplicado:'))

let res = ''
// incialização ; condição ; finalização
for(let i = 1; i <= 20; i++){
    let resultado = numero * i
    res += `\n - ${resultado} \n `
}

window.alert(`Os resultados são: ${res}`)

