import AvaliacaoProfessor from"./AvaliacaoProfessor";
export default class Professor
{
    private nome_professor: string;
    private email: string;
    private matricula: string;

    constructor(nome_professor: string, email: string, matricula: string)
    {
        this.nome_professor = nome_professor;
        this.email = email;
        this.matricula = matricula;
    }
    
    public inserirNome(nome_professor: string)
    {
        this.nome_professor = nome_professor;
    }

    public retornarNome()
    {
        return this.nome_professor;
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

    fazerAvaliacao(numero_grupo: AvaliacaoProfessor["numero_grupo_avaliado"], nota:number): number{
        return nota;
    }
}