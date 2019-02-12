import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {MaterialAppModule} from "./ngmaterial.module";
import {FormsAppModule} from "./ngforms.module";

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskListPartComponent} from "./task-list-part/task-list-part.component";
import { EditTaskComponent } from './edit-task/edit-task.component';
import {EditTaskButton} from "./edit-task-button/edit-task-button.component";
import {DeleteTaskButton} from "./delete-task-button/delete-task-button.component";
import {DataLocalStorageService} from "../services/data-local-storage.service";

import {TaskTypesPipe} from "../pipes/task-types";
import {TaskLightDirective} from "./directives/taskLight.directive";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskListPartComponent,
    EditTaskComponent,
    EditTaskButton,
    DeleteTaskButton,
    TaskTypesPipe,
    TaskLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAppModule,
    FormsAppModule,
  ],
  providers: [
    DataLocalStorageService
  ],
  entryComponents: [EditTaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
