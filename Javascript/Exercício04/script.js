//Personagem de ataque
const atacante = window.prompt(`Qual é o nome do personagem atacante?`)
const poderDeAtaque = parseFloat(window.prompt('Qual é o seu poder de ataque?'))

//Personagem de defesa
const defensor = prompt('Qual é o nome do personagem defensor?')
let vida = parseFloat(window.prompt('Quantos ponto de vida ele possui?'))
const defesa = parseFloat(window.prompt('Qual é seu poder de defesa?'))
const escudo = window.prompt('Ele possui escudo? (Sim/Não)')

let danoCausado = 0

if (poderDeAtaque > defesa && escudo === "Não"){
    danoCausado = poderDeAtaque - defesa
} else if (poderDeAtaque > defesa && escudo === "Sim") {
    danoCausado = (poderDeAtaque - defesa) / 2
}

vida -= danoCausado

window.alert(`${atacante} causou ${danoCausado}`)

window.alert(
    `${atacante} possui poder de ataque: ${poderDeAtaque}\n` + 
    `${defensor} possui ${vida} pontos de vida.\n` + 
    `O defensor possui ${defesa} de defesa.\n` +
    `Possui escudo:${escudo}`
)
