import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../Services/todo.service";
import { concatMap, exhaustMap, map} from "rxjs";
import { addTodo, addTodoSuccess, deleteTodo, getTodoList, getTodoListSuccess } from "./todo-action";
import { TodoState } from "./todo-reducers";
import { Store } from "@ngrx/store";


@Injectable()
export class TodoEffects{

    constructor(private actions:Actions, private api:ApiService, private store: Store<TodoState>){}

    loadTodo$ = createEffect(() =>
    this.actions.pipe(
      ofType(getTodoList),
      exhaustMap(() =>
        this.api.getTaskList().pipe(
          map((todos) => getTodoListSuccess(todos)),
        )
      )
    )
  );


  addTodo$ = createEffect(() =>
  this.actions.pipe(
    ofType(addTodo),
    exhaustMap(({todo}) =>
      this.api.postTaskList(todo).pipe(
        map((todos) => addTodoSuccess(todos)),
      )
    )
  )
);
}