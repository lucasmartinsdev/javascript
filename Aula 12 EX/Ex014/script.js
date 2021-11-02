function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    if (hora < 10) {
        hora = '0' + hora;
    } else if (min < 10) {
        min = '0' + min;
    };


    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Bom dia! Agora são ${hora}:${min}`
        img.src = "manha.png"
        document.body.style.background = 'rgba(146, 190, 255, 0.925)'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}`
        img.src = "tarde.png"
        document.body.style.background = '#ddc1a8'
    } else {
        //  BOA NOITE!
        msg.innerHTML = `Boa noite! Agora são ${hora}:${min}`
        img.src = "noite.png"
        document.body.style.background = '#261858ec'
    }
}