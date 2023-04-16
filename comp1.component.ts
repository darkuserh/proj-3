import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/data.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit{
enteredText!:string;
constructor(private dataService:DataService){}
ngOnInit(): void {
  
}
OnButtonClick(){
this.dataService.raiseDataEmitterEvent(this.enteredText)
  // console.log(this.enteredText)
}
}
