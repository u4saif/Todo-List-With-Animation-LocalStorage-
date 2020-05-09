import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Todo } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule],
  declarations: [ AppComponent,Todo ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
