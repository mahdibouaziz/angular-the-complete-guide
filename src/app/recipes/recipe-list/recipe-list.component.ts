import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'description test recepie',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'Test',
      'description test recepie',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'Test',
      'description test recepie',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
