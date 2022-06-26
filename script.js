

let musicas = [
{ titulo:'Dvorak new world symphony 4th movement', artista:'Antonín Dvořák', src:'Musicas/musicaDvorak.mp3', img:'Img/imgDvorak.jpg' },
{ titulo:'Rossini Overture William Tell', artista:'Gioachino Rossini.', src:'Musicas/musicaOverture.mp3', img:'Img/imgOverture.jpg' },
{ titulo:'ópera Turandot', artista:'Giacomo Puccini', src: 'Musicas/musicaNessun.mp3', img:'Img/imgNessun.jpg' },
{ titulo:'Parla più piano', artista:'love-theme from The Godfather', src: 'Musicas/musicaPiano.mp3', img:'Img/imgPiano.jpg' }
];


let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
duracaoMusica.textContent=segundosParaMinutos(Math.floor(musica.duration));

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


let indexMusica=0;


//  Meus_Eventos


document.querySelector('.botao-play').addEventListener('click',tocarMusica);
document.querySelector('.botao-pause').addEventListener('click',pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 3;
    }
renderizarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click',() => {
    indexMusica++;
    if (indexMusica > 3) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);




});

//funcões


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display='block';
    document.querySelector('.botao-play').style.display='none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display='none';
    document.querySelector('.botao-play').style.display='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width= Math.floor((musica.currentTime / musica.duration) * 100)+ '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent =segundosParaMinutos (Math.floor(musica.currentTime));
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

