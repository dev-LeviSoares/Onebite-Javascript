let n1 = document.getElementById('txtn1')
let n2 = document.getElementById('txtn2')
let res = document.querySelector('div#resultado')

function somar(){
    if(n1.value.length === 0 || n2.value.length === 0){
        window.alert('ERRO[Digite um valor!!]')
    } else {
        let soma = Number(n1.value) + Number(n2.value)
        res.innerHTML = `O resultado é ${soma}`
    }
    // O 'length' vai depois do 'value', pois o 'length' lê o 'value'    
}

function subt(){
    if(!n1.value || !n2.value){
        window.alert('ERRO[Digite um valor!!]')
    } else{
        let subtra = Number(n1.value) - Number(n2.value)
        res.innerHTML = `O resultado da subtração é ${subtra}`
    }
}

function multi(){
    if (!n1.value || !n2.value){
        // No JS, uma string vazia ("") é considerada false.
        //Já uma string com conteúdo ("123", "oi") é considerada true.
        // O ! irá inveter o valor(booleano)
        // Por tanto, se der True nas 2, ele ira disparar o 'windows.alert'
        window.alert('ERRO[Digite um valor!!]')
    } else{
        let multipli = Number(n1.value) * Number(n2.value)
        res.innerHTML = `O resultado da multiplicação é ${multipli}`
    }
}

function div(){
    if(!n1.value || !n2.value){
        window.alert('ERRO[Digite um valor!!]')
    } else{ 
        let divi = Number(n1.value) / Number(n2.value)
        res.innerHTML = `O resultado da divisão é ${divi}`
    }
}