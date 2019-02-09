import {Component, Input, OnInit, Output, OnChanges, DoCheck} from '@angular/core';
import {Task} from "../../models/task.model";
import {Types} from "../../models/types";
import {TaskService} from "../../services/task.service";
import {EventEmitter} from "@angular/core";


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges, DoCheck{
  @Input() task: Task;
  @Output() updateRequest : EventEmitter<any> = new EventEmitter();
  @Output() closeDetailRequest: EventEmitter<boolean>= new EventEmitter();
  types = Types;
  selectedType: string;
  selectedDate: Date;
  action: string;
  constructor(private taskService: TaskService) {
  }

  ngOnChanges(): void {
    console.log("Пришла таска в редактирование onChanges",this.task);
    this.action = this.task ? "Обновить" : "Создать";
    this.selectedType = this.task ? this.task.type : "Неизвестный тип";
    this.selectedDate = this.task ? this.task.deadLine : new Date();
  }
  ngOnInit() {

  }
  ngDoCheck(): void {

  }

  closeDetail(){
    this.closeDetailRequest.emit(false);
    this.task = null;
  }
  updateTask(title: string){
    this.task.title = title;
    this.task.type = this.selectedType;
    this.task.deadLine = this.selectedDate;
    this.taskService.editTask(this.task);
    setTimeout(()=>{
      this.updateRequest.emit();
    }, 2000);
    // this.closeDetail();
  }
  createTask(title: string){
    this.task = new Task(title, this.selectedDate, this.selectedType);
    this.taskService.addTask(this.task);
    setTimeout(()=>{
      this.updateRequest.emit();
    }, 2000);
    this.closeDetail();
  }






}
