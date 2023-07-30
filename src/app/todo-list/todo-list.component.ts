import { Component } from '@angular/core';

import { Todo } from '../Interfaces/todo';
import { Store } from '@ngrx/store';
import { addTodo, getTodoList } from '../Store/todo-action';
import { TodoState } from '../Store/todo-reducers';
import { ApiService } from '../Services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder } from '@angular/forms';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-dialog',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  sortList:String[] = ["Due date","Priority","Status"];
  keyToSort!: String;
  taskList : Todo[] = []; 
  tofetch : Boolean = true;

  constructor(private api:ApiService, private router:Router,private formBuilder:FormBuilder,
     private toastService:NgToastService, private confirmService: NgConfirmService){
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    if(this.tofetch){
      this.api.getTaskList()
      .subscribe({
        next:(res)=>{
          this.taskList = res;
          this.convertdate(res);
        },
        error:(err)=>{
          alert("Error while fetching the records!!");
        }
      })
    }
  }

  convertdate(taskList:Todo[]){
    taskList.forEach((element) => {
      const s = element.duedate.split("T",1);
      element.duedate = s[0];
     
    });
  }

  edit(id : Number){
    this.router.navigate(["update",id]);
  }

  deleteTask(id: Number){
    this.confirmService.showConfirm("Are you sure want to Delete?",
    ()=>{
      this.api.deleteTask(id).subscribe({
        next:(res)=>{
          this.toastService.success({detail: 'SUCCESS', summary: 'Task Deleted Successfully', duration: 3000 })
          this.getTasks();
      }})
    },
    ()=>{

    })
    
  }

SortByPriority(){
    const compare=(task1 : Todo, task2:Todo) =>{
    return  task1.priority < task2.priority ? -1 : 1;
  }
  this.taskList = this.taskList.sort(compare);
}
SortByDueDate(){
  const compare=(task1 : Todo, task2:Todo) =>{
  return  task1.duedate < task2.duedate ? -1 : 1;
}
this.taskList = this.taskList.sort(compare);
}
SortByStatus(){
  const compare=(task1 : Todo, task2:Todo) =>{
  return  task1.status < task2.status ? -1 : 1;
}
this.taskList = this.taskList.sort(compare);
}

SortTasks(keyToSort : String){
  console.log(keyToSort);
    this.tofetch = false;
    if(keyToSort == "Priority"){
      this.SortByPriority();
    }
    else if(keyToSort == "Due date"){
      this.SortByDueDate();
    }
    else if(keyToSort == "Status"){
      this.SortByStatus();
    }
    else{
      this.tofetch = true;
    }
    console.log("Tasks updated after calling",this.taskList);
    this.getTasks();
    
  }

}
