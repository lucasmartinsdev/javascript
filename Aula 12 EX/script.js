function carregar(){
let msg = document.getElementById('msg');
let img = document.querySelector('div#imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
}