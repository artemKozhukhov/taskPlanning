import {Component, Input} from "@angular/core";
import {Task} from "../../models/task.model";
import {MatDialog} from "@angular/material";
import {EditTaskComponent} from "../edit-task/edit-task.component";



@Component({
  selector: 'delete-task-button',
  templateUrl: 'delete-task-button.component.html',
})
export class DeleteTaskButton {
  constructor(public dialog: MatDialog) {}




}
