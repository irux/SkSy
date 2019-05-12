import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TodoService} from '../services/todo-services/todo.service';
import {Todo} from '../types/Todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;

  public date;

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
    console.log("Here is the todo : ")
    console.log(todo)
    console.log("Creating todo...")
    let request = await this.todoService.createTodo(todo);
    request.subscribe((response) => console.log(response))
    console.log("Todo Created")
    this.newTodo = new Todo()
    this.modalService.dismissAll()
  }


  ngOnInit() {
  }

}



