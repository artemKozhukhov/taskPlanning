import {Component, Input} from "@angular/core";
import {MatDialogRef} from "@angular/material";




@Component({
  selector: 'delete-confirm',
  templateUrl: 'delete-confirm.component.html',
})
export class DeleteConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
