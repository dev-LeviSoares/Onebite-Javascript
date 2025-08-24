const turista = window.prompt('Qual seu nome?')

let viagem1 = window.prompt('Você já viajou para alguma cidade? (Não/Sim)')
let cidades = '' // Mantenha a variável fora do loop para que ela possa acumular.
let contagem = 0

while(viagem1 === 'Sim'){
    let cidade = window.prompt('Quais cidades você já viajou?')
    cidades += ' - ' + cidade + '\n' //Serve para concatenar informações na string. 
    //Oberve que há 2 variaveis diferentes. Cidades e cidade. 'cidades' No escopo global e 'cidade' no escopo do bloco
    contagem++
    viagem1 = window.prompt('Você viajou para mais algum lugar? (Sim/Não)') 
}
window.alert(`
    \nTurista: ${turista}
    \nQuantidade de cidades visitadas: ${contagem}
    \nCidades visitadas:\n ${cidades}
`)