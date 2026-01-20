let compras = []

function adicionar(){
    let fprod = document.getElementById('txtprod')
    let res = document.getElementById('res')
    if (fprod.value.trim().length === 0){
        res.innerHTML = `Por favor, digite um produto valido para adicionar a lista!`
        fprod.value = ''
        fprod.focus()
    } else {
        compras.push(fprod.value)
        res.innerHTML = `Produto adiconado a lista com sucesso!`
        fprod.value = ''
        fprod.focus()
    }
        
}

function listar(){
    let res = document.getElementById('res')
    res.innerHTML = `Listando Compras!`
    for (let pos=0; compras.length > pos; pos++)
        res.innerHTML += `<p>${pos} - ${compras[pos]}</p>`
}

function remover(){
    let rprod = document.getElementById('txtrprod')
    let res = document.getElementById('res')
    if (rprod.value.trim().length === 0){
        res.innerHTML = `Por favor, digite um valor valido para remover da lista!`
        rprod.value = ''
        rprod.focus()
    } else {
        res.innerHTML = `${compras[rprod.value]} removido com sucesso!`
        compras.splice(rprod.value,1)
        rprod.value = ''
    }
}