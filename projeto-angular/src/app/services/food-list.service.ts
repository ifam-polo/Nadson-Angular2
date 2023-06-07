import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Arroz",
    "Feijão",
    "Óleo",
    "Frango",
    "Macarrão",
    "Batata",
    "Cebola",
    "Cheiro verde",
    "Alho",
    "Tempero em tablet"
  ];
  constructor() { }

  public foodList() {
    return this.list;
  }
}
