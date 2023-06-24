function relogio(){
    const relogio = document.querySelector('.timer');
    let segundos = 0
    let timer

    function getTimeFromSeconds(segundos){ //Você passa os segundos e converte a quantidade de segundos em hora
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    function iniciaRelogio(){ //Função para incrementar a variavel segundos a cada segundo usando setInterval
        timer = setInterval(function(){
            segundos++
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000)
    }

    document.addEventListener('click', function(e){ //Função para obter elemento pelo click
        const el = e.target // atribui o e.target a constante el
        
        if(el.classList.contains('iniciar')){  //Verifica se o elemento selecionado tem alguma classe que tenha iniciar e realiza as funções
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('paused')
        }

        if(el.classList.contains('pausar')){ //Verifica se o elemento selecionado tem alguma classe que tenha pausar e realiza as funções
            clearInterval(timer);
            relogio.classList.add('paused')
        }
        
        if(el.classList.contains('zerar')) { //Verifica se o elemento selecionado tem alguma classe que tenha zerar e realiza as funções
            segundos = 0;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }
    })

}
relogio();