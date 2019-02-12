import {Component, Input} from '@angular/core';
import {Task} from "../models/task.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editableTask: Task;
  visualDetail:boolean = false;
  currentDate: Date = new Date();

  openTaskAdding(){
    this.editableTask = null;
    this.openEditTask();
  }
  sendTaskToEdit(task: Task){
    this.editableTask = task;
    this.openEditTask()
  }

  closeDetail(){
    this.closeEditTask();
    this.editableTask = null;
  }
  openEditTask(){
    this.visualDetail = true;
  }
  closeEditTask(){
    this.visualDetail = false;
  }
  clearStorage(){
    localStorage.clear();
  }


}
