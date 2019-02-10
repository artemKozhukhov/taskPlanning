import {Task} from "../models/task.model";
import {Types} from "../models/types";
import _ from 'lodash';

export class TaskService{
  private tasks: Task[] = [
    // new Task("Buy products", new Date(2019,1,11), Types.PERSONAL),
    // new Task("Do homework", new Date(2019,1,9), Types.PERSONAL),
    // new Task("Buy tickets", new Date(2019,2,8), Types.PERSONAL),
    // new Task("Write new function", new Date(2019,1,10), Types.WORKING),
    // new Task("Meet with Bob", new Date(2019,1,9), Types.WORKING),
    // new Task("Call to mother", new Date(2019,1,3), Types.PERSONAL),
  ];

  public getTasks(): Task[]{
    console.log("отправились данные с сервиса", this.tasks);
    return this.tasks;
  }
  public deleteTask(task: Task){
    _.remove(this.tasks, (item)=>{
      return item === task;
    });
    console.log("таски на сервисе после удаления",this.tasks);
  }
  public addTask(task: Task){
    this.tasks.push(task);
    console.log("таски на сервисе после добавления нового",this.tasks);
  }
  editableTask:Task;
  public editTask(task:Task){
    console.log("в сервис пришла на редактирование таска", task);
    this.tasks.forEach((item)=>{
      if(item.number == task.number){
        this.editableTask = item;
      }
    });
    this.editableTask.title=task.title;
    this.editableTask.type=task.type;
    this.editableTask.deadLine=task.deadLine;
    this.editableTask.description=task.description;

    this.editableTask = null;
    console.log("таски на сервисе после обновления",this.tasks);
  }

}
