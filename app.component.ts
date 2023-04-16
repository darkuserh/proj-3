import { Component, OnInit } from '@angular/core';
import {Observable,from, of,interval, Subscription} from 'rxjs'
import {map,filter} from 'rxjs/operators'
import { DataService } from 'src/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[DataService]
})
export class AppComponent implements OnInit{
  title = 'rxjs';

  constructor(private dataService:DataService){

}
counterObservable=interval(1000)
counterSub!: Subscription;
ngOnInit(): void {

 
}
unsubcribe(){
  this.counterSub!.unsubscribe()
}
subcribe(){
  this.counterSub=this.counterObservable.subscribe((val)=>{
    console.log(val)
  })
}
}
//   myObservable=new Observable((observer)=>{
// console.log('Observable starts')
// setTimeout(()=>{observer.next('1')},1000)
// setTimeout(()=>{observer.next('2')},2000)
// setTimeout(()=>{observer.next('3')},3000)
// setTimeout(()=>{observer.error(new Error('Something went wrong!Please try again later'))},3000)
// setTimeout(()=>{observer.next('4')},4000)
// setTimeout(()=>{observer.next('5')},5000)
// setTimeout(()=>{observer.complete()},6000)
// observer.next('1')
// observer.next('2')
// observer.next('3')
// observer.next('4')
// observer.next('5')
  // })
  // myObservable=Observable.create((observer: { next: (arg0: string) => void; complete: () => void; })=>{
  //   setTimeout(()=>{observer.next('A')},1000)
  //   setTimeout(()=>{observer.next('B')},2000)
  //   setTimeout(()=>{observer.next('C')},3000)
  //   // setTimeout(()=>{observer.error(new Error('Something went wrong!Please try again later'))},3000)
  //   setTimeout(()=>{observer.next('D')},4000)
  //   setTimeout(()=>{observer.next('E')},5000)
  //   setTimeout(()=>{observer.complete()},7000)
  // });
  // array1=[1,2,3,4]
  // array2=['A','B','C']
  // // myObservable= of(this.array1,this.array2)
  // myObservable = from(this.array1).pipe(
  //   map((val: number) => {
  //     return val * 5;
  //   }),
  //   filter((num) => {
  //     return num > 30;
  //   })
  // );
  // transformObst=this.myObservable.pipe(map((val: number)=>{
  //   return val*5
  // }),filter(val: number)=>{
  //   return val <= 30;
  // })
  //  filterObst=this.transformObst.pipe(filter(val)=>{
  //   return val <= 30;
  //  })

  // ngOnInit(): void {
  //   this.myObservable.subscribe((val: any)=>{
  //     console.log(val)
  //   },(error: { message: any; })=>{
  //     alert(error.message)
  //   },()=>{
  //     alert('Observable has complete emitting all values')
  //   })
  
    // }

 
  

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

