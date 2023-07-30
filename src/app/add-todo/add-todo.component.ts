import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../Services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Interfaces/todo';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  PriorityList = ["High","Medium","Low"];

  taskForm !: FormGroup;
  public taskTobeUpdated !: number;
  public isUpdateActive : Boolean = false;

  constructor(private formBuilder : FormBuilder,private activatedroute: ActivatedRoute, private router: Router,
    private toastService: NgToastService, private api : ApiService,){

  }
  ngOnInit():void{
    this.taskForm = this.formBuilder.group({
      title : ["",Validators.required],
      description : [""],
      duedate: ["",Validators.required],
      priority: ["",Validators.required],
      status:["To-Do"]
    });

    this.activatedroute.params.subscribe(val =>{
      this.taskTobeUpdated = val['id'];
      this.api.getTaskListById(this.taskTobeUpdated)
      .subscribe((res)=>{
        this.isUpdateActive = true;
        this.fillFormToUpdate(res);
      })
    });
  }
   addTasks(){
    if(this.taskForm.valid){
       this.api.postTaskList(this.taskForm.value)
      .subscribe({
        next:(res)=>{
          this.toastService.success({ detail: 'SUCCESS', summary: 'Task Added Successful', duration: 3000 });
          this.taskForm.reset();

        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
    }
  }

  fillFormToUpdate(task : Todo){
    this.taskForm.setValue({
      title : task.title,
      description : task.description,
      priority: task.priority,
      duedate: task.duedate,
      status: task.status
    })
  }

  updateTasks(){
    if(this.taskForm.valid){
      this.api.updateRegisterUser(this.taskForm.value, this.taskTobeUpdated)
     .subscribe({
       next:(res)=>{
        this.toastService.success({ detail: 'SUCCESS', summary: 'Task Updated Successful', duration: 3000 });
         this.router.navigate(['taskList']);
       },
       error:()=>{
         alert("Error while Updating the Task")
       }
     })
   }
  }
}
