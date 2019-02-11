import {Component, Input, OnInit, Output, OnChanges, DoCheck, Inject} from '@angular/core';
import {Task} from "../../models/task.model";
import {Types} from "../../models/types";
import {EventEmitter} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataLocalStorageService} from "../../services/data-local-storage.service";


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent implements OnInit, OnChanges, DoCheck{
  @Input() task: Task;
  @Output() updateListRequest : EventEmitter<any> = new EventEmitter();
  @Output() closeDetailRequest: EventEmitter<boolean>= new EventEmitter();
  types = Types;
  selectedType: string;
  selectedDate: Date;
  actionLabel: string;
  action: any;
  constructor(private dataLocalStorage: DataLocalStorageService) {}

  ngOnChanges(): void {
    this.actionLabel = this.task ? "Обновить" : "Создать";
    this.action = this.task ? this.updateTask : this.createTask;
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
    this.task.title = title?title:"Новая таска";
    this.task.type = this.selectedType;
    this.task.deadLine = this.selectedDate;
    this.dataLocalStorage.addTask(`${this.task.id}`, this.task);
    // this.updateListRequest.emit();
  }

  createTask(title: string){
    let maxID = 0;
    for(let i = 0; i < localStorage.length; i++){
      let keyValue = +localStorage.key(i);
      if (keyValue >= maxID){
        maxID = keyValue + 1;
      }
    }
    this.task = new Task(title, this.selectedDate, this.selectedType, maxID);
    this.dataLocalStorage.addTask(`${this.task.id}`, this.task);
    // this.updateListRequest.emit();
    this.closeDetail();
  }


}





