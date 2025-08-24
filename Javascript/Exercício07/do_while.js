let opcao =''

do {
    opcao = window.prompt(
        `Seja bem-vindo(a)!\n
        \nEscolha uma das opções abaixo:
        \n1 - Página Inicial
        \n2 - Suplementos
        \n3 - Aminoácidos
        \n4 - Barras
        \n5 - Encerrar`
    )

    switch(opcao) { // As informações recebidas pela variáver usando o prompt são aplicadas no switch.
        case '1':
            window.alert('Você escolheu a Página Inicial.')
            break
        case '2':
            window.alert('Você escolheu a página de SUPLEMENTOS.')
            break
        case '3':
            window.alert('Você escolhei a página de AMINOÁCIDOS.')
            break
        case '4':
            window.alert('Você escolheu a página de BARRAS.')
            break
        case '5':
            window.alert('Encerrando o programa...')
            break
        default:
            window.alert('Entrada inválida! Escolha uma das cinco opções.')
    }
} while ( opcao !== '5') // Enquanto não for igual a '5'