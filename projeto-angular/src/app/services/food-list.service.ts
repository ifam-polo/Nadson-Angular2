import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Module Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Lasanha",
    "Macarronada",
    "Feijoada"
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAdd(value: string) {
  //   this.foodListAlert(value)
  //   return this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}import { Component, OnInit } from '@angular/core';

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
  <router-outlet></router-outlet>
  -->

  <app-forms></app-forms>
  `,
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit(): void{ }
}