import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';
import { ToDo } from '../models/ToDo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[ToDoService]
})
export class TodoComponent implements OnInit {
  tasks ;


  // listPage = true;
  // formPage = false;
  // editForm = false;

  task:ToDo;
  index:number;
  
  constructor(toDoService:ToDoService) { 
    this.tasks=toDoService.tasks;
  }

  ngOnInit() {
  }

  // showNewToDoForm(){
  //   this.listPage = false;
  //   this.formPage = true;
  //   this.editForm=false;
  
  // }
  // viewListPage()
  // {
  //   console.log("ViewListPage");
  //   this.listPage=true;
  //   this.editForm=false;
   
  // }
  // onToDoAdded(toDo) {
  //   this.tasks.push(toDo);
  //   this.formPage = false;
  //   this.listPage = true;
  //   this.editForm=false;
  // }
  
  // onToEdited(toDoEdit){
  //   this.index=toDoEdit.index;
  //   this.task=this.tasks[this.index];
  //   console.log("dsf");
  //   this.formPage = false;
  //   this.listPage = false;
  //   this.editForm=true;
  // }



}
