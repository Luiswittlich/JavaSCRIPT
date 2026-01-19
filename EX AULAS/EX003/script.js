function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam alguns dados!!')
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "<p>Contando: </p>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido, considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente---------------------
            for (let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c}.. `
            }   
        } else {
            //Contagem decrescente -------------------
            for (let c = i; c >= f; c-=p){
                res.innerHTML += `\u{1F449} ${c}.. `
            }
        }
    res.innerHTML += `\u{1F6A9}`
    }     
}