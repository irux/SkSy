import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../services/todo-services/todo.service';
import { Subscriber, Subscription } from 'rxjs';
import { Todo } from '../types/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  faCalendarCheck = faCalendarCheck
  faTrashAlt = faTrashAlt
  faEdit = faEdit


  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Input()
  public id : string;

  @Input()
  public title : string;

  @Input()
  public description : string

  @Input()
  public progress : number

  @Input()
  public deadline : string



  constructor(private modalService: NgbModal,public todoService : TodoService) { }

  openEditWindowSm(editContent) {
    this.modalService.open(editContent, { size: 'sm' });
  }
  openEditWindowLg(editContent){
    this.modalService.open(editContent,{size: 'lg'});
  }
  openEditWindow(editContent) {
    this.modalService.open(editContent);
  }
  openVerticallyCentered(editContent) {
    this.modalService.open(editContent, { centered: true });
  }
  ngOnInit() {
  }

  public  async deleteMe(){

    let deleteEmpty = await this.todoService.deleteTodo(this.id)
    let sub : Subscription = deleteEmpty.subscribe(() => this.delete.emit(null),(error) => this.delete.emit(null))
    
  }

  public async editMe(){

    let  newTodo : Todo = new Todo()

    newTodo.deadline = this.deadline
    newTodo.description = this.description
    newTodo.title = this.title
    newTodo.progress = this.progress

    let editMe = await this.todoService.editTodo(this.id,newTodo)
    let sub : Subscription = editMe.subscribe(() => this.delete.emit(null),(error) => this.delete.emit(null))
    this.modalService.dismissAll()
  }

}
