import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss'],
})
export class DropListComponent implements OnInit {
  containers = [
    {
      isContainer: true,
      name: 'Fruits',
    },
    {
      isContainer: true,
      name: 'Veggies',
    },
  ];
  allItems = [
    {
      isContainer: false,
      name: 'Apple',
    },
    {
      isContainer: false,
      name: 'Banana',
    },
    {
      isContainer: false,
      name: 'Broccoli',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allItems, event.previousIndex, event.currentIndex);
  }

  onDrop(event: any) {
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
