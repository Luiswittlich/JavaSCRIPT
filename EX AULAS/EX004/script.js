function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor digite um número valido!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while(c <=10){
            let item = document.createElement('option') // Criando option no select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Adionamos value para as options criadas no select HTML
            tab.appendChild(item)
            c++
        }

    }
}