import { Component, OnInit, OnDestroy,ViewChild,ElementRef } from '@angular/core';
import {ToDo} from 'src/app/models/ToDo';

import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
  
})
export class EditformComponent implements OnInit,OnDestroy {
subscribe;
id;
@ViewChild('category') category: ElementRef;
cname;
  constructor(
    public toDoService:ToDoService,
    private route:ActivatedRoute,
    cat:CategoryService) {
      this.toDoService=toDoService;
      this.cname=cat.category;
  
   }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
   this.subscribe=  this.route.params.subscribe(
      (params: Params)=>{
        this.id=params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  tasks
  // onSubmitClicked()
  //  {
  //   //console.log(index);
  //   // name:this.task.name,
  //   // Category: this.task.category,
  //   // status: this.task.status
  
  //onSubmitClicked.showEdtasksitForm.emit();
  //onSubmitClicked
  @ViewChild('category') categ: ElementRef;
  @ViewChild('name') name:ElementRef;
  
  onSubmitClicked(
   
    status:HTMLInputElement){
      console.log("on submit");
      this.toDoService.tasks[this.id].name=this.name.nativeElement.value;
      this.toDoService.tasks[this.id].category=this.categ.nativeElement.value;
      this.toDoService.tasks[this.id].status=status.checked;

  }

}




  
