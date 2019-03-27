var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500
var pontuacao = 0

// identificar nivel e modificar o tempo de acordo com o nivel
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 2000
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 850
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

//cronometro
var cronometro = setInterval(function() {
    tempo--
    if (tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo 
    }
}, 1000);

function posicaoRandomica(params) {
    //remover mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()   
        pontuacao++
        console.log(pontuacao)
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)
    
    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
    tamanhoAleatorio()
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
   
    switch (classe) {
       case 0:
            return 'mosquito1'
       case 1:
            return 'mosquito2'
       case 2:
            return 'mosquito3'   
   }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
   
    switch (classe) {
       case 0:
            return 'ladoA'
       case 1:
            return 'ladoB'
 
   }
}
