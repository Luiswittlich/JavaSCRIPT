let produtos = []

function addProd(nome,preco){
    let produto = {
        nome: nome,
        preco: preco
    }
        produtos.push(produto) 
}

function listarProd(){
    produtos.forEach((produto,index)=>{
        console.log(`${index+1} - ${produto.nome} R$${produto.preco}`)
    })
}

function valorTotal(){
    const soma = produtos.reduce((total, produto)=>{
        return total + produto.preco
    },0)
    return soma
}

function buscarProduto(nome){
    return produtos.find(produto => produto.nome === nome)
}

function removerProduto(nome){
    const index = produtos.findIndex(produto => produto.nome === nome)
    if (index === -1){
        console.log(`Produto ${nome} não encontrado!`)
        return
    }
    produtos.splice(index,1)
    console.log('Produto removido')
}

addProd('Mouse',80)
addProd('Teclado', 120)

listarProd()

console.log(valorTotal())

console.log(buscarProduto('Mouse'))

removerProduto('Mouse')