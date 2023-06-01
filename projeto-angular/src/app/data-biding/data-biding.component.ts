import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome:string = "Nadson Cley";
  public idade: number = 43;
  constructor(){}

  ngOnInit(): void {
  }
}
