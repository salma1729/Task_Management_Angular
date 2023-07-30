import { createAction, props } from "@ngrx/store";
import { Todo } from "../Interfaces/todo";

export const getTodoList = createAction('[Todo Get] get Todo Lists')

export const getTodoListSuccess = createAction(
    '[Todo GetSuccess] get all Todo Lists success', 
    props<any>()
)

export const addTodo = createAction(
    '[Todo Add] add Todo item', 
    props<any>()
)

export const addTodoSuccess = createAction(
    '[Todo AddSucess] add Todo item success', 
    props<any>()
)

export const deleteTodo = createAction(
    '[Todo item] remove Todo Item', 
    props<any>()
)

