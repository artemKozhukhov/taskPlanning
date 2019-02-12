import {Task} from "../models/task.model";
import {Injectable} from "@angular/core";
import _ from 'lodash';
import {Types} from "../models/types";

@Injectable()
export class DataLocalStorageService {
  private tasks= {};

  constructor(){}

  getDataFromLocalStorage() : void{
    this.tasks = {};
    for(let i=0;i<localStorage.length;i++){
      let item = JSON.parse( localStorage.getItem( localStorage.key( i ) ),(key, value)=>{
        if (key == 'deadLine') return new Date(value);
        return value;
      } );
      if(!this.tasks[item.type]){
        this.tasks[item.type] = [];
      }
      this.tasks[item.type].push(item);
    }
    console.log("таски получены с хранилища",this.tasks);
  }
  getTasks(){
    return this.tasks;
  }
  addTask(task:Task){
    if(!this.tasks[task.type]){
      this.tasks[task.type]=[];
    }
    for(let key in this.tasks){
      if(key == task.type){
        this.tasks[key].push(task);
      }
    }
    console.log("таски в сервисе после добавления", this.tasks);
    localStorage.setItem(`${task.id}`, JSON.stringify(task));
  }
  deleteTask(task: Task){
    for(let key in this.tasks){
      let arr = this.tasks[key];
      _.remove(arr, (item)=>{
        return item.id == task.id;
      });
    }
    console.log("таски после удаления", this.tasks);
    localStorage.removeItem(`${task.id}`);
  }

  updateTask(task:Task){
    this.deleteTask(task);
    this.addTask(task);
    console.log("таски в сервисе после апгрейда", this.tasks);
    // for(let key in this.tasks){
    //   let arr = this.tasks[key];
    //   for(let i=0;i<arr.length;i++){
    //     if(arr[i].id == task.id){
    //       arr[i]=task;
    //     }
    //   }
    // }
    // localStorage.setItem(`${task.id}`, JSON.stringify(task));
  }

  getNextID(): number{
    let nextID = 0;
    for(let i = 0; i < localStorage.length; i++){
      let keyValue = +localStorage.key(i);
      if (keyValue >= nextID){
        nextID = keyValue + 1;
      }
    }
    return nextID;
  }
}
