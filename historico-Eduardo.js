function atualizarHistorico() {
    const tabela = document.getElementById('tabelaHistorico');
    tabela.innerHTML = '';
    historico.forEach(entry => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${entry.aluno}</td>
        <td>${entry.nota1.toFixed(1)}</td>
        <td>${entry.nota2.toFixed(1)}</td>
        <td>${entry.nota3.toFixed(1)}</td>
        <td>${entry.media}</td>
        <td class="${entry.situacao === 'Aprovado' ? 'aprovado' : 'reprovado'}">${entry.situacao}</td>
      `;
      tabela.appendChild(tr);
    });
  }
  