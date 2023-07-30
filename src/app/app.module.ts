import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreModule } from '@ngrx/store';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHistoryComponent } from './todo-history/todo-history.component';
import {todoReducer} from './Store/todo-reducers';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './Store/todo-effect';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoHistoryComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
