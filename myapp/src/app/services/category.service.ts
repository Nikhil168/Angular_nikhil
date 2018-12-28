import { Injectable } from '@angular/core';
import{Category} from 'src/app/models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 category = [
    new Category( 'CDAC1',false),
    new Category('CDAC2',false),
    new Category('CDAC3',false)
  ];
  constructor() { }
}
