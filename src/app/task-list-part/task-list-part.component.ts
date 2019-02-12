import {Component, DoCheck, OnInit, Output, OnChanges, Input} from '@angular/core';
import {Task} from "../../models/task.model";
import {EventEmitter} from "@angular/core";
import {Types} from "../../models/types";
import _ from 'lodash';
import {DataLocalStorageService} from "../../services/data-local-storage.service";


@Component({
  selector: 'app-task-list-part',
  templateUrl: './task-list-part.component.html'
})
export class TaskListPartComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() tasks: Task[] =[];
  @Output() taskForEdit: EventEmitter<Task>;
  @Output() taskForDelete: EventEmitter<Task>;
  constructor() {
    this.taskForEdit = new EventEmitter();
    this.taskForDelete = new EventEmitter();
  }

  ngOnInit() {
  }
  ngOnChanges(): void {

  }

  deleteTaskRequest(task: Task){
    this.taskForDelete.emit(task);
  }

  editTaskRequest(task:Task){
    this.taskForEdit.emit(task);
  }




}
