import {Component} from "@angular/core";
import { transition, animation, trigger,state, animate, style } from "@angular/animations";

@Component({
  selector:'todo',
  templateUrl:'./todo.component.html',
  styleUrls:['./todo.component.css'],
  animations:[ trigger('fade',[
    state('void',style({opacity:0,transform:'translateX(-100px)'})),
    transition('*=>void',[animate(300)])
  ]),
  trigger('fadein',[
    state('void',style({opacity:0 })),
    transition('void=>*',[animate(300)])
  ])]
})

export class Todo{
  inputvalue='';
  udata=[];
  showdata=[];

constructor(){
      if(JSON.parse(localStorage.getItem('mydata2'))){
      let temp=JSON.parse(localStorage.getItem('mydata2'));
      this.showdata=temp.mydat;}
      //check if data already there in  localStorage
}
  
  updateData(){
   if(this.inputvalue) {
     this.showdata.unshift(this.inputvalue); 
     localStorage.setItem('mydata2',JSON.stringify({mydat:this.showdata}))}
      let temp=JSON.parse(localStorage.getItem('mydata2'));
     this.inputvalue='';
    // console.log(this.showdata);
//update the list when data is inserted 


  }
  remove(val){
    let index=this.showdata.indexOf(val);
    this.showdata.splice(index,1);
    localStorage.setItem('mydata2',JSON.stringify({mydat:this.showdata}))}

//remove the item from localstorae as well as the array list in App


}