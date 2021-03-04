import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <input #txt type="text">
  <button (click)="itemsList(txt.value,txt)">AddItem</button>&nbsp;
  <button (click)="removeFirstItem()">RemoveFirstItem </button>&nbsp;
  <button (click)="removeLastItem()">RemoveLastItem</button>
  <ol >
  <li  *ngFor="let i of li">
  <input  type="checkbox" ><span>{{i}}</span>
  </li>
  </ol>
  `,
  styles:[`
    input[type="checkbox"]:checked+span{
    text-decoration:line-through;
  }
  `]
})
export class AppComponent {
  title = 'assignment';
  li=[]
 itemsList(val,txt)
  {
   this.li.push(val);
   txt.value="";
  }
  removeLastItem(){
    if(this.li.length!=0)
    this.li.pop();
  }
  removeFirstItem(){
    if(this.li.length!=0)
    this.li.shift();
  }
}
