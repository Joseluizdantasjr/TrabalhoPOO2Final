import Grupo from"./Grupo";
import AvaliacaoAluno from"./AvaliacaoAluno";
export default class Aluno
{
    private nome_aluno: string;
    private matricula: string;
    private email: string;
    private curso: string;
    private grupo?: Grupo;

    constructor(nome_aluno: string, matricula: string, email: string, curso: string)
    {
        this.nome_aluno = nome_aluno;
        this.matricula = matricula; 
        this.email = email;
        this.curso = curso;
    }

    public inserirNome(nome_aluno: string)
    {
        this.nome_aluno = nome_aluno;
    }

    public retornarNome()
    {
        return this.nome_aluno;
    }

    public inserirMatricula(matricula: string)
    {
        this.matricula = matricula;
    }

    public retornarMatricula()
    {
        return this.matricula;
    }

    public inserirEmail(email: string)
    {
        this.email = email;
    }

    public retornarEmail()
    {
        return this.email;
    }

    public inserirCurso(curso: string)
    {
        this.curso = curso;
    }

    public retornarCurso()
    {
        return this.curso;
    }

    public inserirGrupo(grupo: Grupo)
    {
        this.grupo = grupo;
    }

    public retornarGrupo()
    {
        return this.grupo;
    }

    fazerAvaliacao(numero_grupo: AvaliacaoAluno["numero_grupo_avaliado"], nota:number): number{
        return nota;
    }
}