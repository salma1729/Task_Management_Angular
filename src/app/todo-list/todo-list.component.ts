import { Component } from '@angular/core';

import { Todo } from '../Interfaces/todo';
import { Store } from '@ngrx/store';
import { addTodo, getTodoList } from '../Store/todo-action';
import { TodoState } from '../Store/todo-reducers';
import { ApiService } from '../Services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  sortList:String[] = ["Due date","Priority","Status"];
  keyToSort!: String;
  taskList : Todo[] = []; 
  public taskTobeUpdated !: number;

  constructor(private store: Store<TodoState>, private api:ApiService, private activatedroute:ActivatedRoute){ }

  todolist$ = this.store.select('todos');
  public isUpdateActive : Boolean = false;

  ngOnInit(): void {
    this.getTasks();

    this.activatedroute.params.subscribe(val =>{
      this.taskTobeUpdated = val['id'];
      this.api.getTaskListById(this.taskTobeUpdated)
      .subscribe((res)=>{
        this.isUpdateActive = true;
        // this.fillFormToUpdate(res);
      })
    });
  
  }

  getTasks(){
    this.store.dispatch(getTodoList());
    console.log("Tsaskss !!!",this.todolist$);
  }

  convertdate(taskList:Todo[]){
    taskList.forEach((element) => {
      const s = element.duedate.split("T",1);
      element.duedate = s[0];
     
    });
  }

  

  

}

