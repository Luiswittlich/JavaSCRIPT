function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ffc261ff'
        document.body.style.backgroundImage = "url('imagens/pordosol.png')"
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#59405e'
        document.body.style.backgroundImage = "url('imagens/noitefundo.png')"
    }
}
