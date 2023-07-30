import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = ' https://json-server-lxir.onrender.com/tasks'

  constructor(private http:HttpClient) { }

   postTaskList(data : Todo){
    return  this.http.post<any>(this.baseUrl,data);
  }
  getTaskList(){
    // console.log("Effect block is being executed and data is not fetching")
    return this.http.get<any>(this.baseUrl);
  }

  getTaskListById(id : Number){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateRegisterUser(registerObj: Todo, id: number) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, registerObj)
  }

  deleteTask(id : Number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
