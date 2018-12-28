import { Component, OnInit } from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {Category} from 'src/app/models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
 
})
export class CategoryFormComponent implements OnInit {

 // @Output() addNewToDo = new EventEmitter();
 category: string = "";
 status: boolean = false;

  
  categoryService :CategoryService;
  //name: string;
 
  constructor(categoryService:CategoryService) {
    this.categoryService=categoryService;
   }

  ngOnInit() {
  }

  onSubmitClicked() {
   
    this.categoryService.category.push(
      new Category(this.category,this.status)

    );
     this.category= "";
     this.status= false;
      
     
   
  }

}
