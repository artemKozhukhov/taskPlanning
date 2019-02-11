import {Task} from "../models/task.model";
import {Injectable} from "@angular/core";
import {Types} from "../models/types";

@Injectable()
export class DataLocalStorageService {
  tasks: Task[]=[];

  constructor(){}

  getData() : Task[]{
    this.tasks=[];
    for(let i=0;i<localStorage.length;i++){
      let item = JSON.parse( localStorage.getItem( localStorage.key( i ) ),(key, value)=>{
        if (key == 'deadLine') return new Date(value);
        return value;
      } );
      this.tasks.push(item);
    }
    return this.tasks;
  }
  addTask(id:string, task:Task){
    localStorage.setItem(id, JSON.stringify(task));
  }

  deleteTask(task: Task){
    localStorage.removeItem(`${task.id}`);
  }
}
