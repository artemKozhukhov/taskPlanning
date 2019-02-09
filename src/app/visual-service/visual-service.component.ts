import {Component, DoCheck, OnInit, Output,} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from 'src/models/task.model';


@Component({
  selector: 'visual-service',
  templateUrl: './visual-service.component.html',
  styleUrls: ['./visual-service.component.css']
})
export class VisualServiceComponent implements OnInit {
  tasks: Task[] = [];
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  constructor(private taskService: TaskService) { }





}
