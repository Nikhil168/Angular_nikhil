import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { EditformComponent } from './todo/editform/editform.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CatEditComponent } from './category/cat-edit/cat-edit.component';

//import {CategoryCatEditFormComponent} from './category/cat-editform/cat-editform.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    EditformComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CatEditComponent
   // CategoryCatEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
