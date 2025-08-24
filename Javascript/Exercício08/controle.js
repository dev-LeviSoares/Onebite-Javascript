let saldo =parseFloat(window.prompt('Informe a quantidade de dinheiro inicial:'))
let opcao = ''

do{
    opcao = window.prompt(
        `Saldo dísponivel: ${saldo}.
        \n1 - Adicionar dinheiro
        \n2 - Remover dinheiro
        \n3 - Sair`
    )

    switch(opcao){
        case '1':
            saldo += parseFloat(window.prompt('Informe o valor a ser adicionar:'))
            break
        case '2':
            saldo -= parseFloat(window.prompt('Informe o valor a ser retirado:'))
            break
        case '3':
            window.prompt('Encerrando...')
            break
        default:
            window.alert('Entrada inválida.')
            break
    }
} while (opcao !== '3')