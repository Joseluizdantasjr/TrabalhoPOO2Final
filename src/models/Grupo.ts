import Aluno from "./Aluno"

export default class Grupo{
    private nome_grupo: string;
    private matricula_lider: string;
    private numero_grupo: string;
    private numero_estande: string;
    private dia_apresentacao: Date;

    constructor(nome_grupo: string, matricula_lider: string, numero_grupo: string, numero_estande: string, dia_apresentacao: Date){
        this.nome_grupo = nome_grupo;
        this.matricula_lider = matricula_lider;
        this.numero_grupo = numero_grupo;
        this.numero_estande = numero_estande;  
        this.dia_apresentacao = dia_apresentacao;
    }

    public inserirNome(nome_grupo: string){
        this.nome_grupo = nome_grupo;
    }
    
    public retornarNome(){
        return this.nome_grupo;
    }
    
    public inserirMatriculaLider(matricula_lider: string){
        this.matricula_lider = matricula_lider;
    }
    
    public retornarMatriculaLider(){
        return this.matricula_lider;
    }

    public inserirNumero(numero_grupo: string){
        this.numero_grupo = numero_grupo;
    }

    public retornarNumero(){
        return this.numero_grupo;
    }

    public inserirEstande(numero_estande: string){
        this.numero_estande = numero_estande;
    }

    public retornarEstande(){
        return this.numero_estande;
    }

    public inserirDia(dia_apresentacao: Date){
        this.dia_apresentacao = dia_apresentacao;
    }

    public retornarDia(){
        return this.dia_apresentacao;
    }
}