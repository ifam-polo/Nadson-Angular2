import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})

export class DiretivasEstruturaisComponent implements OnInit {
    public condition: boolean = true;
    public conditionClick: boolean = true;
    public list: Array<{nome: string, idade: number}> = [
      {nome: 'Nadson', idade: 43},
      {nome: 'Ruby', idade: 22},
      {nome: 'Estefany', idade:20},
      {nome: 'Glória', idade: 43},
      {nome: 'Sabrina', idade:20},
      {nome: 'Júlia', idade:20},
    ];

    public nome: string = 'NadsonCley';
    constructor(){}

    ngOnInit(): void{

      setInterval(()=>{
        if (this.condition){
          this.condition = false;
        } else {
          this.condition = true;
        }  
      }, 2000)

    }

    public onClick(){
      if (this.conditionClick){
        this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }
    }

    public onClickAddList(){
      this.list.push({nome: 'Rosa', idade:22});
    }

    public onClickEventList(Event:number){
      this.list.splice(Event,1)

    }

  }
