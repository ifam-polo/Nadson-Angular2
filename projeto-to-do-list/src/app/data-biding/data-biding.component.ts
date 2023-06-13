import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Estefany";
  public idade: number = 20;

  public checkedDisabled: boolean = false;

  public imgSrc: string = "";

  public alertaInfo(){
    alert("Deu certo!")
  }

  constructor(){ }

  ngOnInit(): void {
    
  }
}
