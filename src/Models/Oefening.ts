export class Oefening{
    public naam:string;
    public titel:string;
    public beschrijving:string;
    public tijdsduur:number;
    
    constructor(naam:string,titel:string,beschrijving:string,tijdsduur:number){
        console.log(naam);
        this.naam = naam;
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.tijdsduur = tijdsduur;
    }
}