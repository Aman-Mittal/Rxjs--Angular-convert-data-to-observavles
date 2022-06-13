import { Component , AfterViewInit} from '@angular/core';
import { from, fromEvent } from 'rxjs'

// from converts almost any type into observables

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  postsArray=[
    {
      title:'Aman1',
      description:'description1'
    },
    {
      title:'Aman2',
      description:'description2'
    },
    {
      title:'Aman3',
      description:'description3'
    },
  ];

  postsArrayObservables$ = from(this.postsArray);
// this variable is the observable converted from object postsArray 

promise = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve('resolve the promise. sending data');
  }, 3000);
});

promiseObservable$ = from(this.promise);


constructor(){
  this.postsArrayObservables$.subscribe({
    next:(data) => console.log(data),
    error:(error) => console.log(error),
    complete:() => console.log("complete done"),
  });

  this.promiseObservable$.subscribe({
    next:(data) => console.log(data),
    error:(error) => console.log(error),
    complete:() => console.log("complete done! promise done"),
  });

//next function will trigger when obervable sends a value
//error function will be executed when there is any error
//complete will execute when observable complete sending all its data.


}
ngAfterViewInit(){
 fromEvent(document.getElementById('click-button')!,'click').subscribe({
  next:(data) => console.log(data),
  error:(error) => console.log(error),
  complete:() => console.log("complete done! event done!"),
 })
}


  
}
