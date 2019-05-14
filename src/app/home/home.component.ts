import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {TodoService} from '../services/todo-services/todo.service';
import {Todo} from '../types/Todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;

  public date;

  public listTodos = [];

  public newTodo : Todo = new Todo()

  constructor(private modalService: NgbModal,private todoService : TodoService) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  public async createTodo(todo){
    
    if(this.newTodo.title == '' || this.newTodo.deadline == '' || this.newTodo.description == '')
      return;
    console.log("Here is the todo : ")
    console.log(todo)
    console.log("Creating todo...")
    let request = await this.todoService.createTodo(todo);
    request.subscribe((response) => console.log(response))
    console.log("Todo Created")
    this.newTodo = new Todo()
    this.modalService.dismissAll()
    await this.requestAllTodos();
  }

  public changeDateInPicker(dateObject){
    this.newTodo.deadline = `${dateObject.day}/${dateObject.month}/${dateObject.year}`
    console.log(dateObject)
  }
  

  private async requestAllTodos(){
    let todosObserver = await this.todoService.getAllTodos()
    let subs : Subscription = todosObserver.subscribe((listTodosServer) => this.listTodos = listTodosServer)
  }


  private async manageDelete(event){
      console.log("Me llamo el delete");
      console.log(event);
      await this.requestAllTodos()
  }

  private async manageEdit(event){
    console.log("Me llamo el edit");
    console.log(event);
    await this.requestAllTodos()
}

  async ngOnInit() {
    await this.requestAllTodos()
  }

}



