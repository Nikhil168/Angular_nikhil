import { Component, OnInit} from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;
  //@Output() addNewToDoButtonClicked = new EventEmitter();
 // @Output() addNewToBeEdited= new EventEmitter<{index:number}>();
  
  constructor(
    toDoService:ToDoService,
    private router:Router,
    private route: ActivatedRoute
    ) {
    this.todos=toDoService.tasks;
   }

  ngOnInit() {
  }

  onNewButtonClick() {
   // this.addNewToDoButtonClicked.emit();
  // this.router.navigate(['/todo/new'])
    this.router.navigate(['/todo/new'],{ relativeTo: this.route });
    console.log("new click");
    
  }
  
 onEditButtonClick(index){
  console.log("edit");
  this.router.navigate(['/todo','edit',index]);
   
 }
 deleteFieldValue(todo) {
   console.log("in delete");
  this.todos = this.todos.filter(t => t.name !== todo.name);
  console.log("after delete");
  }
}
