import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This is name', 'This is descripetion', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Paneer_Shashlik.JPG'),
    new Recipe('This is name', 'This is descripetion', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Paneer_Shashlik.JPG'),
    new Recipe('This is name', 'This is descripetion', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Paneer_Shashlik.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}
