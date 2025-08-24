let nome_1 = document.getElementById('txtnome')
let snome = document.getElementById('txtsobrenome')
let estudo = document.getElementById('txtestudo')
let dnas = document.getElementById('txtnascimento')
let res = document.getElementById('res')

function verificar() {
    let data = new Date()
    let d = data.getFullYear()
    
    if (nome_1.value.length == 0 ) {
        window.alert('Insira todos os dados')
    } else if (snome.value.length == 0) {
        window.alert('Insira todos os dados')
    } else if (estudo.value.length == 0) {
        window.alert('Insira todos os dados')
    } else if (dnas.value.length == 0) {
        window.alert('Insira todos os dados')
    } else{
        res.innerHTML = 
            `<p> O nome do usuário é ${nome_1.value} ${snome.value}.</p> 
            <p> O campo de estudo dele é ${estudo.value}.</p>
            <p> Ele nasceu em ${Number(dnas.value)}, portanto sua idade é ${d - Number(dnas.value)}.`
            /*
                Na operação do ano atual subtraindo a data de nascimento, é possível notar que se invertermos a ordem 
                dos valores, o resultado podera ser negativo ou positivo. 
                Ex: ${d - Number(dnas.value) = 21 e ${Number(dnas.value) - d} = -21 --> 
            */
            
            //fim do res.
            
    }

}