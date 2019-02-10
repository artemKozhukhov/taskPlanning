import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {MaterialAppModule} from "./ngmaterial.module";
import {FormsAppModule} from "./ngforms.module";

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

import {TaskTypesPipe} from "../pipes/task-types";
import {TaskLightDirective} from "./directives/taskLight.directive";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    EditTaskComponent,
    TaskTypesPipe,
    TaskLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAppModule,
    FormsAppModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
