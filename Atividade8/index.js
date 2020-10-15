var Aluno1 = {
  ra: '58745',
  nome: 'Gustavo Doyle'
}
console.log(Aluno1);

Aluno1.ra = '45632';
Aluno1.nome = 'Gustavo Sartori';
console.log(Aluno1);

Aluno1['ra'] = '12345';
Aluno1['nome'] = 'Gustavo';
console.log(Aluno1);
