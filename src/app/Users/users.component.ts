import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {CrudService} from '../service/crud.service';


@Component({ 
    templateUrl: 'users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent{

    employee: any;
    employeeName:string;
    employeeSurname:string;
    employeeSkill:string;
    skillRating:number;
    message:string;

    constructor(public dialog: MatDialog, public crudservice:CrudService) {}
    
    openDialog() {
        this.dialog.open(DialogComponent, { data: 'yoyo'});
    }

    openConfirmDlg() {
        this.dialog.open(ConfirmComponent);
    }

    changeUserDlg() {
        this.dialog.open(UserEditComponent);
    }

    EditRecord(Record)
    {
      Record.isedit = true;
      Record.editname = Record.name;
      Record.editsurname = Record.surname;
      Record.editskill = Record.skill;
      Record.editrating = Record.rating;
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

    Deleteemployee(record_id)
    {
      this.crudservice.delete_employee(record_id);
    }
    
    displayedColumns: string[] = ['name', 'surname', 'action1', 'action2'];

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