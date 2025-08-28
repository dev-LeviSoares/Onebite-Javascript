let cartasNaMesa = []
let opcao = ''

do{
    
    opcao = window.prompt(
        `Cartas no baralho: ${cartasNaMesa.length}
        \n1 - Adicionar uma carta 
        \n2 - Puxar uma carta 
        \n3 - Sair`
)
switch(opcao){
    case '1':
        const adicionar = window.prompt('Qual carta você deseja adicionar?')
        cartasNaMesa.push(adicionar) //Necessita de um elemento para funcionar.
        break
    case '2':
        const cartaPuxada = cartasNaMesa.pop()
        if(!cartaPuxada) { //Se não tiver uma carta no baralho, ele ira retornar false mas o ! ira transformar em true.
          window.alert('Não há nenhuma carta no baralho.')
        
        } else { //Esse recebe o false
            window.alert(`Você puxou um(a) ${cartaPuxada}`)
        }
        break
    case '3':
        window.alert('Finalizando programa...')
        break
    default:
        window.alert('Opção inválida!')

}
} while(opcao !== '3')

/*
    Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela 
    um menu interativo contendo as cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, 
    “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e 
    adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho 
    e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, 
    caso contrário deve voltar ao menu.
*/