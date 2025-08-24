let metros = window.prompt('Digite um valor em metros:')
window.alert('Agora escolha uma medida e responda o próximo bloco.')
let medida = window.prompt('Digite o número referente a medida desejada: \n1- mm(milímetros) \n2- cm(centímetros) \n3- dm(decímetros) \n4- dam(decâmetro) \n5- hm(hectômetro) \n6- km(quilômetro) \n ')

switch(medida) {
    case '1':
        window.alert(`O resultado é ${1000 * metros} milímetros.`)            
        break
    case '2':
        window.alert(`O resultado é ${100 * metros} centímetros.`)
        break
    case '3':
        window.alert(`O resultado é ${10 * metros} decímetros.`)
        break
    case '4':
     window.alert(`O resultado é ${metros / 10}decâmetros.`)
        break
    case '5':
        window.alert(`O resultado é ${metros / 100} hectômetros.`)
        break
    case '6':
        window.alert(`O resultado é ${metros / 1000} quilômetros.`)
        break
    default: 
        window.alert('Opção inválida!')
        break
}