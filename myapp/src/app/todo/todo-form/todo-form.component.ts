import { Component, OnInit} from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDo } from 'src/app/models/ToDo';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  
})
export class TodoFormComponent implements OnInit {
  name: string = "";
  category: string = "";
  status: boolean = false;

  todoService:ToDoService;
  cname;
  constructor(todoService:ToDoService,cat:CategoryService) {
    this.todoService=todoService;
    this.cname=cat.category;
   }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.todoService.tasks.push(
      new ToDo(this.name,this.category,this.status)
    );

    this.name= "";
    this.category= "";
    this.status= false;
  console.log("pushed");
  }

}
