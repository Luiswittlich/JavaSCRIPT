let numeros = []
let tab = document.getElementById('seltab')
let res = document.getElementById('res')

let inputAdd = document.getElementById('botaoAdd')
inputAdd.addEventListener('click',adicionar)

let inputFin = document.getElementById('final')
inputFin.addEventListener('click', finalizar)

let inputNum = document.getElementById('txtn')
inputNum.addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
        event.preventDefault()
        adicionar()
    }
})

 function adicionar(){
    let fnum = document.getElementById('txtn')
    res.textContent = ''
    if (fnum.value.trim().length === 0 || Number(fnum.value) > 100 || Number(fnum.value) < 0){
        window.alert('Por favor, digite um valor valido!')
        fnum.value = ''
        fnum.focus()
        return
    }
    let indice = numeros.indexOf(Number(fnum.value))
    if (indice !== -1){
        window.alert('Valor já cadastrado!')
        fnum.value = ''
        fnum.focus()
        return
    }

    let num = Number(fnum.value)
    let p = document.createElement('option')
    p.textContent = `Valor ${num} adicionado`
    numeros.push(num)
    let tabela = document.getElementById('seltab')
    tabela.appendChild(p)

    fnum.value = ''
    fnum.focus()
 }

function finalizar(){
    res.textContent = ''
    if (numeros.length === 0){
        res.textContent = `Adicione valores antes de finalizar`
        return
    }
    let titulo = document.createElement('h2')
    let fragment = document.createDocumentFragment()
    titulo.textContent = `Mostrando Estatisticas!`
    fragment.appendChild(titulo)

    let p = document.createElement('p')
    p.textContent = `Ao total foram adicionados ${numeros.length} números.`
    fragment.appendChild(p)

    let maiorNota = Math.max(...numeros)
    let pManota = document.createElement('p')
    pManota.textContent = `O maior valor informado foi ${maiorNota}.`
    fragment.appendChild(pManota)

    let menorNota = Math.min(...numeros)
    let pMenota = document.createElement('p')
    pMenota.textContent = `O menor valor informado foi ${menorNota}.`
    fragment.appendChild(pMenota)
    
    let soma = numeros.reduce((total, num)=>{
        return total + num
    },0)
    let pSoma = document.createElement('p')
    pSoma.textContent = `Somando todos os valores, temos ${soma}.`
    fragment.appendChild(pSoma)

    let media = numeros.reduce((total,num) =>{
        return total + num
    },0) / numeros.length

    let pMedia = document.createElement('p')
    pMedia.textContent = `A média dos valores digitados é ${media.toFixed(2)}.`
    fragment.appendChild(pMedia)

    res.appendChild(fragment)
}