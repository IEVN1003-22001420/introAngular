import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  num1:string=''
  num2:string=''
  num3:string=''
  num4:string=''
  resultadoDis:number=0

  calcularDistancia():void{
    this.resultadoDis= Math.sqrt(
        Math.pow(parseInt(this.num2) - parseInt(this.num1), 2) +
        Math.pow(parseInt(this.num4) - parseInt(this.num3), 2)
    );
  }
}
