function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique o ano novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        if (fsex[0].checked){
            var genero = 'Homem'
            if (idade >=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/criancam.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'imagens/adultom.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/velho.jpg')
            }
        } else if (fsex[1].checked){
            var genero = 'Mulher'
            if (idade >=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/criancaf.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/jovemf.jpg')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'imagens/adultof.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}