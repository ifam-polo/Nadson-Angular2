import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  
  public foodList: Array<string>= [];
  foodListService: any;
  constructor(private FoodListService: FoodListService){
    
  }
  ngOnInit(): void{
    this.foodListService.foodList().subscribe(
      (      res: string[])=> this.foodList = res,
      () => console.log(Error)

    );
    
    this.foodListService.emitEvent.subscribe(

      (      res: string) =>
        { alert('Você add =>${res.nome} ');
      return this.foodList.push(res);
  }
)
}
  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      'res', => {
        this:this.foodList = this.foodList.filter(
          item =>{
            return id !== item.id
          }
        )
      },
         
  }
}
