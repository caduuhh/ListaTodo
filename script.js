const add = document.querySelector('.adicionar');
const del = document.querySelector('.deletar');
const buttonAdd = document.querySelector('.add');
const buttonCancel = document.querySelector('.cancel');
const conteudo = document.querySelector('.conteudo');
const textarea = document.querySelector('.texto');
let nuvem = [];
showItens();

add.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'flex';
});

del.addEventListener('click', () => {
    conteudo.innerHTML = '';
    nuvem = [];
    localStorage.removeItem('meuArr');
});

buttonCancel.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
    textarea.value = '';
});

buttonAdd.addEventListener('click', () => {
    if(textarea.value !== '') {
        adicionarTexto();
        document.querySelector('.modal').style.display = 'none';
        textarea.value = '';
    }
});

function adicionarTexto() {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    if(localStorage.meuArr) {
        nuvem = JSON.parse(localStorage.getItem('meuArr'));
    }

    let dataFormatada = `${fixZero(dia)}/${fixZero(mes + 1)}/${ano}, ${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundos)}`;

    let texto = textarea.value;
    
    // let newBack = document.createElement('div');
    // newBack.classList.add('estilo');
    
    // let newText = document.createElement('div');
    // newText.classList.add('estilo2');
    // newText.innerHTML = texto;
    
    // let newDate = document.createElement('div');
    // newDate.innerHTML = dataFormatada;
    // newDate.classList.add('estilo3');

    // conteudo.appendChild(newBack);
    // newBack.appendChild(newText);
    // newBack.appendChild(newDate);

    conteudo.innerHTML += '<div class="estilo">' + '<div class="estilo2">' + textarea.value + '</div>' + '<div class="estilo3">' + fixZero(dia) + '/' + fixZero(mes + 1) + '/' + ano + ', ' + fixZero(hora) + ':' + fixZero(minuto) + ':' + fixZero(segundos) + '</div>' + '</div>';

    /* Primeira solução que salvava o html no localHost.

    let novoItem = '<div class="estilo">' + '<div class="estilo2">' + textarea.value + '</div>' + '<div class="estilo3">' + fixZero(dia) + '/' + fixZero(mes + 1) + '/' + ano + ', ' + fixZero(hora) + ':' + fixZero(minuto) + ':' + fixZero(segundos) + '</div>' + '</div>';

    */

    nuvem.push(texto, dataFormatada);

    localStorage.meuArr = JSON.stringify(nuvem);
}

function showItens() {
    if(localStorage.meuArr) {
        nuvem = JSON.parse(localStorage.getItem('meuArr'));
    }

    for (var i = 0; i < nuvem.length; i += 2) {
        let newBack = document.createElement('div');
        newBack.classList.add('estilo');

        let newText = document.createElement('div');
        newText.classList.add('estilo2');
        newText.innerHTML = nuvem[i];

        let newDate = document.createElement('div');
        newDate.classList.add('estilo3');
        newDate.innerHTML = nuvem[i + 1];

        conteudo.appendChild(newBack);
        newBack.appendChild(newText);
        newBack.appendChild(newDate);
    }
}

function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}