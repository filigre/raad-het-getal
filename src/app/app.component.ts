import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
}) 

export class AppComponent { 
  
  title = 'Raad het getal';  

  public randomNummer: number;
  public aantalPogingen: number; 
  public gokVerschil: number;
  public gok: number;
  public errorMessage: string;
  public geschiedenis: any = [];

  constructor() { 
    this.randomNummer = null; 
  }

  private generateNumber = () : void => {
    this.randomNummer = Math.floor(Math.random() * 100) + 1;
  }

  private updatePogingen = () : void => {
    this.aantalPogingen -= 1;
  }
  
  startGame = () : void => {
    this.geschiedenis = [];
    this.gokVerschil = null;
    this.errorMessage = "";
    this.aantalPogingen = 10;
    this.generateNumber();
  }

  ngOnInit = () : void => { 
    this.errorMessage = "";
  }

  tryMatch = (gok: number) : void => {
    this.errorMessage = "";
    this.gokVerschil = this.randomNummer - gok;

    if(gok.toString() == "") {
      this.errorMessage = "Het veld mag niet leeg zijn!";
    }
    else if(isNaN(Number(this.gokVerschil)) || gok < 1  || gok > 100) {
      this.errorMessage = "Je dient een nummer in te geven tussen 1 en 100";
    }  
    else {
      this.gok = gok;
      this.geschiedenis.push(this.gok);
      this.updatePogingen();

      if(this.gokVerschil == 0) {
        this.randomNummer = null;
      }
  
      if(this.aantalPogingen < 1) {
        this.randomNummer = null;
      }
    } 
  }
}
