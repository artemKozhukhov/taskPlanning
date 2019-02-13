import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Task} from "../../models/task.model";
import {MatDialog} from "@angular/material";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {DeleteConfirmComponent} from "../delete-confirm/delete-confirm.component";



@Component({
  selector: 'open-editor-button',
  template: `<!--<button (click)="openDialog()">{{title}}</button>-->`,
})
export class OpenEditorButtonComponent {
  @Input() title: string;
  @Input() task: Task;
  constructor(public dialog: MatDialog) {
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditTaskComponent, {
  //     width: '550px',
  //     data: this.task
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //
  //   });
  // }
}
