let alunos = [];

function cadastrarAluno() {
  const nome = document.getElementById('nomeAluno').value.trim();
  if (nome && !alunos.includes(nome)) {
    alunos.push(nome);
    const li = document.createElement('li');
    li.textContent = nome;
    document.getElementById('listaAlunos').appendChild(li);
    document.getElementById('nomeAluno').value = '';
  } else {
    alert("Nome inválido ou já cadastrado.");
  }
}