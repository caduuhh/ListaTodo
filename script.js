const add = document.querySelector('.adicionar');
const del = document.querySelector('.deletar');
const buttonAdd = document.querySelector('.add');
const buttonCancel = document.querySelector('.cancel');
const conteudo = document.querySelector('.conteudo');
const textarea = document.querySelector('.texto');
let nuvem = [];
showItens();

let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let segundos = data.getSeconds();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();


add.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'flex';
});

del.addEventListener('click', () => {
    conteudo.innerHTML = '';
    nuvem = [];
    localStorage.meuArr = [];
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
    if(localStorage.meuArr) {
        nuvem = JSON.parse(localStorage.getItem('meuArr'));
    }
    conteudo.innerHTML += '<div class="estilo">' + '<div class="estilo2">' + textarea.value + '</div>' + '<div class="estilo3">' + fixZero(dia) + '/' + fixZero(mes + 1) + '/' + ano + ', ' + fixZero(hora) + ':' + fixZero(minuto) + ':' + fixZero(segundos) + '</div>' + '</div>';

    let novoItem = '<div class="estilo">' + '<div class="estilo2">' + textarea.value + '</div>' + '<div class="estilo3">' + fixZero(dia) + '/' + fixZero(mes + 1) + '/' + ano + ', ' + fixZero(hora) + ':' + fixZero(minuto) + ':' + fixZero(segundos) + '</div>' + '</div>';

    nuvem.push(novoItem);

    localStorage.meuArr = JSON.stringify(nuvem);
    
}

function showItens() {
    if(localStorage.meuArr) {
        nuvem = JSON.parse(localStorage.getItem('meuArr'));
    }

    for(var i in nuvem) {
        let div = document.createElement('div');
        div.innerHTML = nuvem[i];
        conteudo.append(div);
    }
}

function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}


    
