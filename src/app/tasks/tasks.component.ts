import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks :Task[] = [
    new Task('Task 1', 'David', 3, 1, 'This is de description for the new task 1', 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Other-Task-icon.png', new Date()),
    new Task('Task 2', 'David', 3, 1, 'This is de description for the new task 2', 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Other-Task-icon.png', new Date()),
    new Task('Task 3', 'David', 3, 1, 'This is de description for the new task 3', 'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Other-Task-icon.png', new Date())
  ];

  constructor() { }

  ngOnInit() {
  }

}
