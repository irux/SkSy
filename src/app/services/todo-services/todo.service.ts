import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  public async createTodo(newTodo){
    
    return this.http.post("http://127.0.0.1:4040/api/todo",newTodo)
  }


}
