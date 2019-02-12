import {Component, DoCheck, OnInit, Output, OnChanges, Input} from '@angular/core';
import {Task} from "../../models/task.model";
import {EventEmitter} from "@angular/core";
import {Types} from "../../models/types";
import {DataLocalStorageService} from "../../services/data-local-storage.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  types = Types;
  tasks = {};
  @Input() isUpdate: boolean;
  @Output() taskForEdit : EventEmitter<Task> = new EventEmitter();

  constructor(private dataLocalStorageService: DataLocalStorageService) { }

  ngOnInit() {
    this.dataLocalStorageService.getDataFromLocalStorage();
    this.tasks = this.dataLocalStorageService.getTasks();
    //при добавлении таймаута не обновляются таски в листе при изменении тасков в сервисе!!!!
    // setTimeout(()=>{
    //   this.updateList();
    // }, 3000);
  }
  ngOnChanges(): void {
  }

  deleteTask(task: Task){
    this.dataLocalStorageService.deleteTask(task);
  }
  editTask(task:Task){
    this.taskForEdit.emit(task);
  }

}
