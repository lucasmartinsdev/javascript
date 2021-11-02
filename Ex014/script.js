function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}:${min}`
        img.src = "manha.png"
        document.body.style.background = '#92beffec';
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}`
        img.src = "tarde.png"
        document.body.style.background = '#ddc1a8'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}:${min}`
        img.src = "noite.png"
        document.body.style.background = '#261858ec'
    }
}

function relogio() {
    let data = new Date();
    let hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hor < 10){
        hor= '0'+hor;
    } else if (min < 10){
        min = '0'+min;
    } else if (seg < 10) {
        seg = '0' + seg;
    }

    let horas = `${hor}:${min}:${seg}`;
    document.querySelector('input#rel').value = horas;
}

let tempo = setInterval(relogio, 1000);