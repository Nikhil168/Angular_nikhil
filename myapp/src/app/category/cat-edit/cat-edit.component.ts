import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {Category} from 'src/app/models/category';
import {CategoryService} from 'src/app/services/category.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css'],
  
})
export class CatEditComponent implements OnInit {
id;
  // @Input() task:Category;
  // @Output() editToDo = new EventEmitter(); 
  
  //cat:CategoryService;
    
  constructor(
    public categoryService:CategoryService,
    private route:ActivatedRoute
    ) {
      this.categoryService=categoryService;
     }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
    (params:Params)=>{
      this.id=params['id'];
    }
    
    );
  }
  onSubmitClicked(category:HTMLInputElement
    ,status:HTMLInputElement) {
 this.categoryService.category[this.id].category=category.value;
 this.categoryService.category[this.id].status=status.checked;    

}

}
