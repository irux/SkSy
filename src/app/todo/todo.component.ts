import { Component, OnInit } from '@angular/core';
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
