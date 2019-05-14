import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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



  constructor(private modalService: NgbModal) { }

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

}
