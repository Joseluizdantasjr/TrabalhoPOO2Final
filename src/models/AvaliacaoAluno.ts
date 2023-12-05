import Aluno from "./Aluno";
import Grupo from "./Grupo";

export default class AvaliacaoAluno
{
    numero_avaliacao: string;
    matricula_avaliador_aluno: string;
    numero_grupo_avaliado: string;
    nota: number;

    constructor(numero_avaliacao: string, matricula_avaliador_aluno: string, numero_grupo_avaliado: string, nota: number)
    {
        this.numero_avaliacao = numero_avaliacao;
        this.matricula_avaliador_aluno = matricula_avaliador_aluno; 
        this.numero_grupo_avaliado = numero_grupo_avaliado;
        this.nota = nota;
    }

    public inserirNumero(numero_avaliacao: string)
    {
        this.numero_avaliacao = numero_avaliacao;
    }

    public retornarNumero()
    {
        return this.numero_avaliacao;
    }

    public inserirMatricula(matricula_avaliador_aluno: string)
    {
        this.matricula_avaliador_aluno = matricula_avaliador_aluno;
    }

    public retornarMatricula()
    {
        return this.matricula_avaliador_aluno;
    }

    public inserirNumeroGrupo(numero_grupo_avaliado: string)
    {
        this.numero_grupo_avaliado = numero_grupo_avaliado;
    }

    public retornarNumeroGrupo()
    {
        return this.numero_grupo_avaliado;
    }

    public inserirNota(nota: number)
    {
        this.nota = nota;
    }

    public retornarNota()
    {
        return this.nota;
    }

}