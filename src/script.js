const anoNuevo = "1 Jan 2022";

const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function cuentaAtras(){
    const fechaAnoNuevo = new Date(anoNuevo);
    const fechaActual = new Date();
    //console.log(fechaAnoNuevo - fechaActual);
    /*console.log(fechaAnoNuevo)*/

    const totalSegundos = (fechaAnoNuevo - fechaActual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

   /* console.log(dias, horas, minutos);*/

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);
}

cuentaAtras();
setInterval(cuentaAtras, 1000);

