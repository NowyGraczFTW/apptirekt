import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  title: string;
  message: string

  skill: any;
  employee:any;
  constructor(public crudservice:CrudService) { }

  Deleteemployee(record_id)
  {
    this.crudservice.delete_employee(record_id);
  }

  Deleteskill(record_id)
  {
    this.crudservice.delete_skill(record_id);
  }

  ngOnInit(): void {
  }

}
