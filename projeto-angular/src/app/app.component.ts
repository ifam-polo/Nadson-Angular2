import {  Component,OnInit,} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-data-biding></app-data-biding>
    -->
    <app-diretivas-atributo></app-diretivas-atributo>
    <h1>Aulas de Diretivas Atributos</h1>
    <hr>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>
  `,

})
export class AppComponent implements OnInit {
   
  constructor(){

  }
  ngOnInit(): void {
    
  }
  
}