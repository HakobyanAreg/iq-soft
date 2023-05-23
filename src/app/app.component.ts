import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  public arrayOfObjects: any[] = [
    {
      name: 'Object 1',
      a: [
        { name: 'Object 1 / 1', a: 'Category A', status: true },
        { name: 'Object 1 / 2', a: 'Category b', status: true },
        { name: 'Object 1 / 3', a: 'Category c', status: true },
      ],
    },
    {
      name: 'Object 2',
      a: [
        { name: 'Object 2 / 1', a: 'Category A', status: true },
        { name: 'Object 2 / 2', a: 'Category b', status: true },
        { name: 'Object 2 / 3', a: 'Category c', status: true },
      ],
    },
    {
      name: 'Object 3',
      a: [
        { name: 'Object 3 / 1', a: 'Category A', status: false },
        { name: 'Object 3 / 2', a: 'Category b', status: true },
        { name: 'Object 3 / 3', a: 'Category c', status: true },
      ],
    },
    {
      name: 'Object 4',
      a: [
        { name: 'Object 4 / 4', a: 'Category A', status: true },
        { name: 'Object 4 / 4', a: 'Category b', status: true },
        { name: 'Object 4 / 4', a: 'Category c', status: true },
      ],
    },
    {
      name: 'Object 5',
      a: [
        { name: 'Object 5 / 1', a: 'Category A', status: true },
        { name: 'Object 5 / 2', a: 'Category b', status: true },
        { name: 'Object 5 / 3', a: 'Category c', status: true },
      ],
    },
  ];


}
