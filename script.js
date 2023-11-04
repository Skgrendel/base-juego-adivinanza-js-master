let numeroAzar =Math.floor(Math.random()*100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function reiniciar() {
    numeroEntrada.disabled = false
    intentos = 0
    intento.textContent = intentos
    mensaje.textContent = '¡A JUGAR !'
    mensaje.style.color = 'black'
    numeroEntrada.value = ''   
}

function checarresultados() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || numeroIngresado >100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Introduce un numero Valido del 1 al 100'
        return
    }

if (numeroIngresado == numeroAzar) {
    mensaje.textContent = 'Felicidades Acertaste al Numero Correcto',
    mensaje.style.color = 'green',
    numeroEntrada.disabled = true

}else if(numeroIngresado < numeroAzar){
    mensaje.textContent = 'Mas alto al numero que ingresaste',
    mensaje.style.color = 'red'
}else{
    mensaje.textContent = 'Mas bajo al numero que ingresaste',
    mensaje.style.color = 'red'
}



}