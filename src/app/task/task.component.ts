import {Component, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../models/task.model";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteRequest: EventEmitter<Task>;
  @Output() editRequest : EventEmitter<Task>;
  constructor() {
    this.deleteRequest = new EventEmitter<Task>();
    this.editRequest = new EventEmitter<Task>();

  }

  ngOnInit() {
    console.log("таска внутри таска", this.task);
  }


  delete(){
    this.deleteRequest.emit(this.task);
  }

  edit(){
    this.editRequest.emit(this.task);
  }

}
