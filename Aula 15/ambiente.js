let num = [5,8,2,9,3]
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(num.length)

num[5] = 7

console.log(`Agora adicionamos mais um item ao nosso vetor: ${num}`)
console.log(num.length)

num.push(15)
console.log(`Agora adicionamos mais um item ao nosso vetor: ${num}`)

console.log(num.length)

pos = num.indexOf(9)
console.log(num[pos])