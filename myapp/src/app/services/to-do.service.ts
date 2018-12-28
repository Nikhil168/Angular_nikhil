import { Injectable } from '@angular/core';
import{ToDo} from 'src/app/models/ToDo';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  tasks = [
    new ToDo('Angular Session One', 'CDAC1', true),
    new ToDo('Angular Session Two', 'CDAC2', false),
    new ToDo('Angular Session Three', 'CDAC3', false)
  ];
  constructor() { }
}
