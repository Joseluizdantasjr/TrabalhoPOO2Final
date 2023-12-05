import AvaliacaoAluno from "./AvaliacaoAluno";
import AvaliacaoProfessor from "./AvaliacaoProfessor";
import Grupo from "./Grupo";

export default class Avaliacao
{
    numero_avaliacao: string;
    numero_avaliacao_aluno: string;
    numero_avaliacao_professor: string;
    numero_grupo_avaliado: string;


    constructor(numero_avaliacao: string, numero_avaliacao_aluno: string, numero_avaliacao_professor: string, numero_grupo_avaliado: string)
    {
        this.numero_avaliacao = numero_avaliacao;
        this.numero_avaliacao_aluno = numero_avaliacao_aluno;
        this.numero_avaliacao_professor = numero_avaliacao_professor; 
        this.numero_grupo_avaliado = numero_grupo_avaliado;
    }

    public inserirNumero(numero_avaliacao: string)
    {
        this.numero_avaliacao = numero_avaliacao;
    }

    public retornarNumero()
    {
        return this.numero_avaliacao;
    }

    public inserirAvaliacaoAluno(numero_avaliacao_aluno: string)
    {
        this.numero_avaliacao_aluno = numero_avaliacao_aluno;
    }

    public retornarAvaliacaoAluno()
    {
        return this.numero_avaliacao_aluno;
    }

    public inserirAvaliacaoProfessor(numero_avaliacao_professor: string)
    {
        this.numero_avaliacao_professor = numero_avaliacao_professor;
    }

    public retornarAvaliacaoProfessor()
    {
        return this.numero_avaliacao_professor;
    }

    public inserirNumeroGrupo(numero_grupo_avaliado: string)
    {
        this.numero_grupo_avaliado = numero_grupo_avaliado;
    }

    public retornarNumeroGrupo()
    {
        return this.numero_grupo_avaliado;
    }

}