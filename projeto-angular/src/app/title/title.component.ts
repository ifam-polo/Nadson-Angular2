import { Component, Input, OnInit,OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit,OnChanges,OnDestroy{


  @Input() public title: string = "Bem Vindo Nadson Cley!!"
  constructor() {}

  ngOnInit(): void{}
  ngOnChanges(): void {}
  ngOnDestroy(): void {
    console.log("Tudo certo! Ele foi destruido!!");

}
}
