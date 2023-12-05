export default class Estande{
    private numero_estande: string;

    constructor (numero: string){
        this.numero_estande = numero;
    }

    public inserirNumero(numero_estande: string){
        this.numero_estande = numero_estande;
    }

    public retornarNumero(){
        return this.numero_estande;
    }
    
}