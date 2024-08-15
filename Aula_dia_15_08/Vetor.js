
let alunos = [];
function lerDadosAlunos() {
    let nome = document.getElementById('nome').value
    let faltas = parseInt(document.getElementById('faltas').value)
    let media = parseFloat(document.getElementById('media').value)

    let aluno = {
        nome: nome,
        faltas: faltas,
        media: media
    };

    alunos.push(aluno);

    //limpa os campos do formulario

    document.getElementById('alunoForm').reset();

    //Atualizar a listagem dos alunos
    exibirAlunos();
}
// funçao para exibir a listagem de alunos
function exibirAlunos() {
    let listagem = document.getElementById('listagemAlunos');
    listagem.innerHTML = '<h1>listagem de alunos:</h1>';
    for (let aluno of alunos) {
        listagem.innerHTML += `<h2>nome: ${aluno.nome}, faltas: ${aluno.faltas}, media: ${aluno.media}<h2>`;
    }
}