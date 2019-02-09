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
  tasks:Task[] = [];
  tasksWork:Task[]=[];
  tasksPersonal:Task[] = [];
  @Input() isUpdate:boolean;
  @Output() taskForEdit : EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasksFromService();
  }
  ngOnChanges(): void {
    this.getTasksFromService();
  }


  getTasksFromService(){
    this.tasks = this.taskService.getTasks().slice();
    this.tasksWork = [];
    this.tasksPersonal = [];
    this.tasks.forEach((item)=>{
      if(item.type == Types.WORKING){
        this.tasksWork.push(item);
      }
      else{
        this.tasksPersonal.push(item);
      }
    });
    this.tasks= null;
  }



  deleteTask(task: Task){
    _.remove(this.tasks, (item)=>{
      return item.number === task.number;
    });
    this.taskService.deleteTask(task);
    this.getTasksFromService();
  }

  editTask(task:Task){
    this.taskForEdit.emit(task);
  }




}
