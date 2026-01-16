function verificar(){
    var pais = window.document.getElementById('txtpais').value
    pais = pais.toUpperCase()
    var res = window.document.getElementById('res')
    if (pais == 'BRASIL'){
        res.innerHTML += `<p>Você nasceu em ${pais}, você é <strong>BRASILEIRO</strong></p>`
    } else {
        res.innerHTML += `<p> Você nasceu em ${pais}, portanto você é <strong>ESTRANGEIRO</strong></p>`
    }
}