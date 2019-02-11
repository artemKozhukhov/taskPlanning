import { NgModule } from '@angular/core';
import { MatButtonModule, MatRadioModule, MatDatepickerModule,MatFormFieldModule,MatNativeDateModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, BrowserAnimationsModule, MatDialogModule],
  exports: [MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, BrowserAnimationsModule, MatDialogModule]
})
export class MaterialAppModule { }
