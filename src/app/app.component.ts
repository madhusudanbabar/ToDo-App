import { Component } from '@angular/core';

@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo';
  todoArray = [];

  addTodo(value){
    if(!this.todoArray.includes(value)){
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
  }
}
