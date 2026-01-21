let num = [1,8,6,3,9,7,4,1]
//let pos = 0
//for (c = num.length; c > pos; pos++){
//    console.log(num[pos])
//}

/*for(let pos=0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/ //Versão Tradicional

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //Versão mais recentes do JS e EcmaScript, Essa versão só funciona para arrays e objetos!!
