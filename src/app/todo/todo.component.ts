import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  faCalendarCheck = faCalendarCheck
  faTrashAlt = faTrashAlt
  faEdit = faEdit

  constructor() { }

  ngOnInit() {
  }

}
