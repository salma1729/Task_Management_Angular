import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoHistoryComponent } from './todo-history/todo-history.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path:"", redirectTo : 'todoList', pathMatch :"full"},
  {path:"todoList", component:TodoListComponent},
  {path:"addTodo", component:AddTodoComponent},
  {path:"todoHistory", component:TodoHistoryComponent},
  {path:"updateTodo/:id", component:AddTodoComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }