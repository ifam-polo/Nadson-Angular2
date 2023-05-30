import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit{

  public title = "Bem Vindo Nadson Cley!!"
  constructor() {}

  ngOnInit(): void{
  }

}
