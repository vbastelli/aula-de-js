function tocaSom (idElemento) {
    const elemento = document.querySelector(idElemento);

    if (elemento === null) {
        console.log('Elemento não encontrado. ');
    }

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();

    } else {
        console.log('Elemento não é um áudio. ')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}