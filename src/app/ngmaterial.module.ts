import { NgModule } from '@angular/core';
import { MatButtonModule, MatRadioModule, MatDatepickerModule,MatFormFieldModule,MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, BrowserAnimationsModule],
  exports: [MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, BrowserAnimationsModule]
})
export class MaterialAppModule { }
