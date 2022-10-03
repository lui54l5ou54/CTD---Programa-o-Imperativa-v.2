
// Passo 1---------------------------------------------------------------------------------

// Crie uma função construtora aluno que tenha como atributos: nome (string), 
// quantidade de faltas (number) e notas (array de números). 


let aluno = {
    nome: "Nome do Aluno",
    qtDeFaltas: 3,
    notas: [7, 7, 7],
    calcularMedia: function() {
      let somaNotas = 0;
      let totalNotas = this.notas.length
      for (let n of this.notas) {
        somaNotas = somaNotas + n
      }
      return somaNotas / totalNotas
    },
    faltas: function() {
      this.qtdefaltas++
    }
  }

// Passo 2---------------------------------------------------------------------------------
//   Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
//   Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
//   Crie alguns alunos para testar a sua função construtora. 

  
  function alunoTeste(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }
  

  const teste1 = new alunoTeste("Luis", 2, [9.8, 10.7, 5.1]);

  const teste2 = new alunoTeste("Fernando", 5, [-35, 14, 10.5]);

  const teste3 = new alunoTeste("Almeida", 3, [21, -32, 17]);

  const teste4 = new alunoTeste("Sousa", -7, [22, -13, 12]);

  
// Passo 3---------------------------------------------------------------------------------
//   crie o objeto literal curso que tem como atributos: nome do curso (string),
//   nota de aprovação (number), faltas máximas (number) e uma lista de estudantes
//   (um array composto pelos alunos criados no passo 2).

// Passo 4---------------------------------------------------------------------------------
// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos
// nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade
// lista de estudantes do objeto curso.


  let curso = {
    nomeCurso: "curso",
    notaAprovacao: 3,
    faltasMaximas: 7,
    listaEstudantes: [],
    novoAluno: function(aluno) {
      this.listaEstudantes.push(aluno)
    },
    mediaAlunos:function(notas){
      let somaNotas = 0;
      let totalNotas = notas.notas.length
      for (let n of notas.notas) {
        somaNotas = somaNotas + n
      }
      return somaNotas / totalNotas
    },
    aprovacao: function(media, faltas) {
      if (this.faltasMaximas > faltas) {
        if (this.notaAprovacao <= media) {
          return true
        }
        else {
          return false
        }
      }
      else if (this.faltasMaximas == faltas) {
        if ((this.notaAprovacao +((this.notaAprovacao / 100) * 10)) <= media) {
          return true
        }
        else {
          return false
        }
      }
      else {
        return false
      }
    },
    listaAprovados:function(){
      let resultadoAlunos = []
      for(let a of this.listaEstudantes){
          resultadoAlunos.push(this.aprovacao(this.mediaAlunos(a), a.faltas))
      }
      return resultadoAlunos;
      
    }
  }
  
  // Passo 5---------------------------------------------------------------------------------
//   Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true
//   se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem
//   que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas
//   máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

  
  curso.novoAluno(teste1);
  curso.novoAluno(teste2);
  curso.novoAluno(teste3);
  curso.novoAluno(teste4);
  console.log("Alunos aprovados:")
  console.log("Luis","Fernando","Almeida","Sousa");
  console.log(curso.listaAprovados());