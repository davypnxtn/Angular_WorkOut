import { Oefening } from './oefening';

export class WorkOutPlan{
    public naam:string;
    public oefeningen: Oefening[]; 
    public titel:string;
    public rustTussenOefeningen:number;

    constructor(naam:string,oefeningen:Oefening[],titel:string,rustTussenOefeningen:number){
        this.naam = naam;
        this.titel = titel;
        this.rustTussenOefeningen = rustTussenOefeningen;
        this.oefeningen = oefeningen;
        console.log(this.oefeningen);
    }
}