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
  isUpdate: boolean = false;

  addNewTask(){
    this.visualDetail = true;
    this.editableTask = null;
  }

  sendTaskToEdit(task: Task){
    this.editableTask = task;
    this.visualDetail = true;
  }
  closeDetail(){
    this.editableTask = null;
    this.visualDetail = false;
  }

  updateTaskList(){
    this.isUpdate = !this.isUpdate;
  }

  clearStorage(){
    localStorage.clear();
  }

}
