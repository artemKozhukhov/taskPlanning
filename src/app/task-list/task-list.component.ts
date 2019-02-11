import {Component, DoCheck, OnInit, Output, OnChanges, Input} from '@angular/core';
import {Task} from "../../models/task.model";
import {EventEmitter} from "@angular/core";
import {Types} from "../../models/types";
import _ from 'lodash';
import {DataLocalStorageService} from "../../services/data-local-storage.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  tasks: Task[] =[];
  tasksWork:Task[]=[];
  tasksPersonal:Task[] = [];
  tasksUnknown: Task[] = [];
  @Input() isUpdate: boolean;
  @Output() taskForEdit : EventEmitter<Task> = new EventEmitter();

  constructor(private dataLocalStorageService: DataLocalStorageService) { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.getTasks();
  }

  getTasks(){
    this.tasks = this.dataLocalStorageService.getData();
    this.tasksPersonal = [];
    this.tasksWork = [];
    this.tasksUnknown =[];
    for (let i = 0 ; i < this.tasks.length; i++ ) {
      let item = this.tasks[i];
      if (item.type == Types.WORKING){
        this.tasksWork.push(item);
      }
      else if(item.type == Types.PERSONAL){
        this.tasksPersonal.push(item);
      }
      else {
        this.tasksUnknown.push(item);
      }
    }
  }

  deleteTask(task: Task){
    //удаляем локально?
    // _.remove(this.tasks, (item)=>{
    //   return item.id == task.id;
    // });
    this.dataLocalStorageService.deleteTask(task);
    //костыль. вручную делаем запрос на обновление даты, надо прослушивать
    // this.getTasks();
  }

  editTask(task:Task){
    this.taskForEdit.emit(task);
  }

}
