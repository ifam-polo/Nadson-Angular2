import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {
  private url: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json"

  constructor() { }
}
