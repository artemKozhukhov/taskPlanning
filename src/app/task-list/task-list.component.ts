import {Component, DoCheck, OnInit, Output, OnChanges, Input} from '@angular/core';
import {Task} from "../../models/task.model";
import {TaskService} from "../../services/task.service";
import {EventEmitter} from "@angular/core";
import {Types} from "../../models/types";
import _ from 'lodash';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  tasksWork:Task[]=[];
  tasksPersonal:Task[] = [];
  @Input() isUpdate:boolean;
  @Output() taskForEdit : EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.getTasksFromLocalStorage();
  }

  getTasksFromLocalStorage(){
    this.tasksPersonal = [];
    this.tasksWork = [];
    for (let i = 0 ; i < localStorage.length; ++i ) {
      let item = JSON.parse( localStorage.getItem( localStorage.key( i ) ) );
      if (item.type == Types.WORKING){
        this.tasksWork.push(item);
      }
      else {
        this.tasksPersonal.push(item);
      }
    }
    console.log("извлеклись WORK таски из local storage", this.tasksWork);
    console.log("извлеклись PERSONAL таски из local storage", this.tasksPersonal);
  }




  deleteTask(task: Task){
    console.log("пришел таск на удаление",task);
    _.remove(this.tasksWork, (item)=>{
      return item.id == task.id;
    });
    _.remove(this.tasksPersonal, (item)=>{
      return item.id == task.id;
    });
    localStorage.removeItem(`${task.id}`);
  }

  editTask(task:Task){
    this.taskForEdit.emit(task);
  }




}
