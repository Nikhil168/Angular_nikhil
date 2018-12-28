import { Component, OnInit} from '@angular/core';
import{CategoryService} from 'src/app/services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 
  todos;
  //@Output() addNewToDoButtonClicked = new EventEmitter();
  //@Output() addNewToBeEdited= new EventEmitter<{index:number}>();
  
  constructor(
    categoryService:CategoryService,
    private router:Router,) {
    this.todos=categoryService.category;
   }
   
  ngOnInit() {
  }

  onNewButtonClick() {
    //this.addNewToDoButtonClicked.emit();
    this.router.navigate(['/category/new1'])
  }
  
 onEditButtonClick(index){
  // this.addNewToBeEdited.emit(
  //   {
  //     'index':index
  //   }
  // );
  this.router.navigate(['/category','edit',index]);
 }

}