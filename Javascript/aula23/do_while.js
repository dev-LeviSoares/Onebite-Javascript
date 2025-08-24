let velocidade = 30

do {
    window.alert(`A velocidade do veículo é ${velocidade} km/h.`)
    velocidade -= 20
} while (velocidade > 0)

window.alert(`Velocidade final: ${velocidade} km/h.`)