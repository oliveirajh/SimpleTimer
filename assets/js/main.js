function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function(event){
    iniciaRelogio();
    iniciar.disabled = true
    pausar.disabled = false
    relogio.style.color = 'black'
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    pausar.disabled = true
    iniciar.disabled = false
    relogio.style.color = 'red';
})

zerar.addEventListener('click', function(event){
    segundos = 0;
    relogio.innerHTML = getTimeFromSeconds(segundos);
})