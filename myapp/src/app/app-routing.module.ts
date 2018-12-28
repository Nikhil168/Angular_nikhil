import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { EditformComponent } from './todo/editform/editform.component';
import { CatEditComponent } from './category/cat-edit/cat-edit.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';

const routes: Routes = [

  {path:'', redirectTo:'todo',pathMatch:'full'},
  {
    path:'todo', 
    component:TodoComponent,
      children: [
        
      {path: 'new', component:TodoFormComponent},
      {path: 'edit/:id',component:EditformComponent}
      
      ]
    },
    {
      path:'category', 
      component:CategoryComponent,
      children:[
        {path: 'new1', component:CategoryFormComponent},
        {path: 'edit/:id',component:CatEditComponent}
      ]
  
  
  },
  
 {path:'category', component:CategoryComponent},
  {path:'**', redirectTo:'todo'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
