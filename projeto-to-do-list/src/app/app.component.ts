import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-biding></app-data-biding>
  -->

  <!--
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  -->

  <app-forms></app-forms>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit(): void{ }
}
