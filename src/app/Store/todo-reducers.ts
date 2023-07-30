import { createReducer, on } from "@ngrx/store";
import { Todo } from "../Interfaces/todo";
import { addTodo, addTodoSuccess, deleteTodo, getTodoList, getTodoListSuccess } from "./todo-action";

export interface TodoState{
    todos : ReadonlyArray<any>;
}

const initialState: ReadonlyArray<any> = [];

export const todoReducer = createReducer(
    initialState,
    on(getTodoListSuccess,(state,{todos})=>[...todos]),

    on(addTodoSuccess, (state, todo ) => ([...state, todo])),

    on(deleteTodo, (state, {todo})=>({
        ...state,
        todos: [...state, todo],
    }))
);

