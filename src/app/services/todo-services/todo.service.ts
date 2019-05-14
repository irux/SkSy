import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../../types/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  public async createTodo(newTodo){

    return this.http.post("http://127.0.0.1:4040/api/todo",newTodo)
  }

  public async getAllTodos() : Promise<Observable<Array<Todo>>>{
    
    return this.http.get<Todo[]>("http://127.0.0.1:4040/api/todo")
  }

  public async deleteTodo(id) : Promise<Observable<any>>{
    console.log(id);
    return this.http.delete<Todo[]>("http://127.0.0.1:4040/api/todo/" + id)
  }

  public async editTodo(id,newTodo) : Promise<Observable<any>>{
    
    return this.http.put<Todo[]>("http://127.0.0.1:4040/api/todo/" + id,newTodo)
  }


}
