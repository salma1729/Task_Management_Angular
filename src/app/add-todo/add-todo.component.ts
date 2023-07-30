import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store} from '@ngrx/store';

import { addTodo } from '../Store/todo-action';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todoForm !: FormGroup;
  public isUpdateActive : Boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store){

  }
  
  ngOnInit():void{
    this.todoForm = this.formBuilder.group({
      title : ["",Validators.required],
      description : [""],
      duedate: ["",Validators.required],
      priority: ["",Validators.required],
      status:["To-Do"]
    });
  }

  addTasks(){
    console.log("ADD Task is being executed",this.todoForm.value)
    this.store.dispatch(addTodo(this.todoForm.value));
    this.todoForm.reset();
  }

  updateTasks(){
    
  }

  

}
