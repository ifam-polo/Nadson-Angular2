import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome:string = "Nadson Cley";
  public idade: number = 43;
  public CheckedDisable: boolean = false;
  public imgSrc: string = "	https://t.ctcdn.com.br/-aepV3ltJ2nWgG-Z556MOYAmkSY=/1000x563/smart/filters:format(webp)/i257652.jpeg";
  public imgTitle: string ="Property Binding";
  public position: {x: number, y:number} = {x:0, y:0};
  
  constructor(){}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent){
      console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
  
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
