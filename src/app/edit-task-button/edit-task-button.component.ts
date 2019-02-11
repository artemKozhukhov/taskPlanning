import {Component, Input} from "@angular/core";
import {Task} from "../../models/task.model";
import {MatDialog} from "@angular/material";
import {EditTaskComponent} from "../edit-task/edit-task.component";

@Component({
  selector: 'edit-task-button',
  templateUrl: 'edit-task-button.component.html',
})
export class EditTaskButton {
  @Input() task: Task;
  constructor(public dialog: MatDialog) {}

  openTaskAdding(): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '500px',
      data: this.task
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
