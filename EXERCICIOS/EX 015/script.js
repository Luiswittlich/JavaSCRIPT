
let alunos = []

function adicionarAlunos(nome, nota){
    let aluno = {}
    aluno.nome = nome
    aluno.nota = nota
    alunos.push(aluno)
}

function listarAlunos(){
    alunos.forEach((aluno,index)=>{
        console.log(`${index+1}-${aluno.nome}: ${aluno.nota}`)
    })
}

function mediaTurma(){
    const soma = alunos.reduce((total,aluno)=>{
        return total + aluno.nota
    },0)

    return soma / alunos.length
}

function buscarNome(nome){
    return alunos.find(aluno => aluno.nome === nome)
    
}

function removerAluno(nome){
    const index = alunos.findIndex(aluno => aluno.nome === nome)

    if (index === -1){
        console.log('aluno não encontrado!')
        return
    }

    alunos.splice(index,1)
    console.log('Aluno removido!')
}

adicionarAlunos('Ana', 8)
adicionarAlunos('João', 6.5)
console.log(removerAluno('Ana'))