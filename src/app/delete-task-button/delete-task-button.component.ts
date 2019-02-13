import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Task} from "../../models/task.model";
import {MatDialog} from "@angular/material";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {DeleteConfirmComponent} from "../delete-confirm/delete-confirm.component";



@Component({
  selector: 'delete-task-button',
  template: `<button (click)="openDialog()">Удалить</button>`,
})
export class DeleteTaskButton {
  @Output() isDelete: EventEmitter<boolean>;
  constructor(public dialog: MatDialog) {
    this.isDelete = new EventEmitter();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.isDelete.emit();
      }
    });
  }
}
