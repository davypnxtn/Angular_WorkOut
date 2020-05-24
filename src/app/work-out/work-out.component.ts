import { Component, OnInit } from '@angular/core';
import { WorkOutPlan } from 'src/Models/WorkOutPlan';
import { Oefening } from 'src/Models/Oefening';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-out',
  templateUrl: './work-out.component.html',
  styleUrls: ['./work-out.component.css']
})
export class WorkOutComponent implements OnInit {

  public workoutPlan: WorkOutPlan;
  public huidigeOefening: Oefening;
  public duurOefening: number;
  public huidigeOefeningId: number;
  public workoutTitel: string;
  public beschrijvingOefening: string;
  public titelOefening: string;
  public rustTussenOefening: Oefening;
  public gestart: boolean;
  public oefeningen: WorkOutPlan["oefeningen"];
  public interval; // Als ik hier "public interval: NodeJS.Timeout;" van maak krijg ik de volgende foutmelding: error TS2503: Cannot find namespace 'NodeJS'.
  
  constructor(private route: ActivatedRoute) {
    this.gestart = false;
    this.workoutPlan = this.workout();
    this.oefeningen = this.workoutPlan.oefeningen;
    this.rustTussenOefening = new Oefening("Rust", "Rust", "Neem even pauze", 10);
  }

  ngOnInit(): void {}

  workout(): WorkOutPlan{
    let workout = new WorkOutPlan(
      "5MinuteWorkout",
      [],
      "5 Minute Workout",
      10
    )
      
    workout.oefeningen.push(
      new Oefening(
        "Burpee",
        "De Burpee",
        `De burpee is een combinatie-oefening die gebruikt wordt bij fitness. 
        De oefening begint rechtop staand, vervolgens gaat de persoon in squat en brengt zijn handen naar de grond, 
        waarna hij met de handen aan de grond in een sprong zijn benen naar achter brengt in de plankpositie. 
        Vanuit de plank is het gebruikelijk om op te drukken. Daarna gaat de oefening weer terug: 
        de persoon brengt met een sprong de knieën weer naar voren, terug naar de squatpositie en gaat weer rechtop staan. 
        De oefening kan verzwaard worden door te eindigen met een sprong met de armen in de lucht.`,
        30
    ),
    new Oefening(
        "PushUp",
        "De Push-Up",
        `Met handen en voeten op de grond, in opgerichte positie, laat men zich zakken tot de borst even de grond raakt , 
        waarna men zichzelf weer omhoog "drukt". Een beginnersoefening is op de knieën zitten, de handen vooruit zetten en dan opdrukken. 
        Dit is veel lichter dan dat het hele lichaam, met uitzondering van de tenen en handen, van de grond is.`,
        30
    ),
    new Oefening(
        "AbCrunch",
        "De Ab Crunch",
        `Ga op je rug liggen met gebogen knieën en voeten plat op de grond, op heupbreedte van elkaar.
        Plaats je handen achter je hoofd, zodat je duimen achter je oren zitten.
        Houd je ellebogen naar de zijkanten uit, maar iets naar binnen afgerond.
        Trek je buikspieren voorzichtig naar binnen.
        Krul omhoog en naar voren zodat je hoofd, nek en schouderbladen van de vloer komen.
        Houd een moment aan de bovenkant van de beweging vast en laat dan langzaam weer zakken.`,
        30
    ),
    new Oefening(
        "Squats",
        "De Squat",
        `Een squat kan zonder gewicht uitgevoerd worden, de zogenaamde free squat (vrije squat), 
        ook bekend als deep knee bend (diepe kniebuiging). Dit kan met de voeten recht naar voren en op schouderbreedte: 
        naast elkaar met het midden van de voeten onder de schouders. De squat ontstaat door de knieën iets te buigen (niet voorbij de tenen), 
        door het bekken naar achteren te bewegen en het bovenlichaam in het heupgewricht naar voren te kantelen. 
        Het is alsof men op een stoel gaat zitten. 
        Deze squat kan ook uitgevoerd worden met de voeten verder uitelkaar en iets naar buiten gedraaid ten opzichte van de romp.
         Het is noodzakelijk er altijd op te letten dat er rechte lijnen zijn van het heupgewricht over de knieën naar de enkels en over het midden van de voeten zodat de knie- en enkelgewrichten niet verkeerd worden belast.`,
         30
    ),
    new Oefening(
        "Planking",
        "Planking",
        `Ga op je buik liggen en plaats je voeten 10 centimeter van elkaar.
        Plaats je ellebogen onder je schouders.
        Span je buik- en bilspieren aan en breng je heup omhoog.
        Houd je lichaam zo recht mogelijk.
        Houd dit 30 seconden vast.`,
        30
    ),
    new Oefening(
        "Lunge",
        "Lunges",
        `De basis voor de oefening is een rechtopstaande positie met de voeten vlak bij elkaar. 
        Het ene been stapt naar voren zodanig dat het onderbeen een hoek van 90 graden met de grond maakt. 
        Het achterste been gaat dan naar beneden tot de knie (bijna) de grond raakt. 
        Dan stapt het voorste been terug zodat de aanvangspositie weer is bereikt waarna de oefening (eventueel met het andere been naar voren) kan worden voortgezet.`,
        30
    ),
    new Oefening(
        "Tricep Dip",
        "Tricep Dips",
        `Zet je handen achter je op schouderbreedte uit elkaar op een bankje.
        Zorg ervoor dat dit bankje of deze verhoging stevig en stabiel staat.
        Laat je billen van het bankje zakken waarbij je jouw benen naar voren uitstrekt (dit kan op de grond zijn, maar ook op een andere verhoging.)
        Strek je triceps uit, waarbij je een lichte buiging in je ellebogen blijft houden. 
        Op deze manier creëer je volledige spanning op de tricep en ontlast je de elleboog! Dit is de beginhouding.
        Laat je lichaam nu langzaam naar beneden zakken, waarbij je buigt vanuit je ellebogen tot deze ongeveer een hoek van 90 graden hebben. 
        Houdt de spanning op je triceps en zorg ervoor dat je rug dicht bij het bankje blijft.
        Bij de opwaartse fase druk je krachtig vanuit je triceps omhoog. 
        Hierbij haal je de kracht dus volledig uit je triceps en duw je jezelf als het ware weer terug naar de beginhouding.`,
        30
    ),
    new Oefening(
        "Wall Sit",
        "Wall Sit",
        `Ga met je rug tegen een muur staan. Zak rustig door je knieën. Zet je voeten een stapje naar voren, een heupbreedte uit elkaar. 
        Je zit zoals je op een stoel zou zitten, maar dan tegen de muur, je knieën in een hoek van 90 graden.`,
        30
    ),
    new Oefening(
        "PushupAndRotate",
        "Puchup And Rotate",
        `Begin bovenaan de push-up positie met je handen op de grond, armen recht en onder je schouders. 
        Zet je voeten achter je en til je knieën op. Betrek je bilspieren, span je benen en ondersteun je kern om je lichaam stijf te houden. 
        Houd je ellebogen naar je ribben en je onderarmen verticaal, buig naar de ellebogen om je lichaam naar de grond te laten zakken. 
        Je hoofd en schouders moeten naar voren bewegen als je dichter bij de vloer komt. 
        Gebruik uw volledige bewegingsbereik om uw borst tussen uw handen te laten zakken, zo dicht mogelijk bij de vloer, 
        en druk vervolgens uw handen in de vloer, terwijl u uw lichaam gespannen houdt, om het omhoog van de vloer terug naar de startpositie te bewegen . 
        Terwijl je de bovenkant van de push-up bereikt, verplaats je je gewicht naar je linkerhand en til je je rechterarm op, 
        draaiend door de ruggengraat en schouders naar een zijplankpositie met je armen. 
        Plaats je rechterhand terug op de grond onder je rechterschouder en laat je zakken bij je volgende push-up. 
        Terwijl je terugkeert naar de bovenkant van deze push-up, verplaats je je gewicht naar je rechterhand en til je je linkerarm op in een zijplank. 
        Blijf doorgaan met deze push-up, zijplankbeweging, afwisselend zijden tussen elke push-up.`,
        30
    ),
    new Oefening(
        "vUp",
        "V-up",
        `Ga op je rug liggen en zorg dat je rug mooi recht is. Trek je buikspieren goed aan, want hierdoor train je nog effectiever.
         Nu ga je met je bovenlichaam omhoog, zoals in een sit-up. Tegelijkertijd doe je ook je benen omhoog. 
        Probeer met je handen je tenen aan te raken. Daarna ga je weer terug naar de beginpositie. Je hebt nu één V up gedaan.`,
        30
    ));
    this.workoutTitel = workout.titel;
    return workout;
  }

  startWorkout(){
    this.gestart = true;
    this.huidigeOefeningId = 0;
    this.startOefening(this.workoutPlan.oefeningen[this.huidigeOefeningId]);
  }

  startOefening(oefening:Oefening){
    this.huidigeOefening = oefening;
    this.duurOefening = oefening.tijdsduur;
    this.beschrijvingOefening = oefening.beschrijving;
    this.titelOefening = oefening.titel;

    this.interval = setInterval(() => {
      if (this.duurOefening == 0) {
        clearInterval(this.interval);
        let volgendeOefening:Oefening = this.volgendeOefening();
        
        if (volgendeOefening) {
          this.startOefening(volgendeOefening);
        }
        else{
          this.titelOefening = "Einde Workout";
          this.beschrijvingOefening = "Nog niet moe? Herhaal de workout zoveel als je wil."
        }
      }
      else{
        this.duurOefening--;
        console.log(this.duurOefening);
      }
    }, 1000);
    
  }

  volgendeOefening():Oefening{
    let volgendeOefening:Oefening = null;

    if (this.huidigeOefening === this.rustTussenOefening){
      this.huidigeOefeningId++;
      volgendeOefening = this.workoutPlan.oefeningen[this.huidigeOefeningId];
    }
    else if (this.huidigeOefeningId < this.workoutPlan.oefeningen.length){
      volgendeOefening = this.rustTussenOefening;
    }
   
    return volgendeOefening;
  }

  instructies(){
    clearInterval(this.interval);
    this.gestart = false;
  }
}
