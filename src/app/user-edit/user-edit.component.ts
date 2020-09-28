import { Component, OnInit } from '@angular/core';
import {SkillAddComponent} from '../skill-add/skill-add.component';
import {MatDialog} from '@angular/material/dialog';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  employee: any;
  employeeName:string;
  employeeSurname:string;
  employeeSkill:string;
  skillRating:number;
  message:string;

  displayedColumns: string[] = ['name', 'surname', 'skill', 'rating', 'action1', 'action2'];

  constructor(public dialog: MatDialog, public crudservice:CrudService) { }

  AddSkill() {
    this.dialog.open(SkillAddComponent);
}

Updatarecord(recorddata)
{
  let record = {};
  record['name'] = recorddata.editname;
  record['surname'] = recorddata.editsurname;
  record['skill'] = recorddata.editskill;
  record['rating'] = recorddata.editrating;
  this.crudservice.update_employee(recorddata.id, record);
  recorddata.isedit = false;
}

closeDialog() {
  this.dialog.closeAll();
}

ngOnInit(): void {
  this.crudservice.get_Allemployee().subscribe(data => {

    this.employee = data.map(e => {
      return {
        id: e.payload.doc.id,
        isedit: false,
        name: e.payload.doc.data()['name'],
        surname: e.payload.doc.data()['surname'],
        skill: e.payload.doc.data()['skill'],
        rating: e.payload.doc.data()['rating'],
      };
    })
    console.log(this.employee);

  });
}

}
