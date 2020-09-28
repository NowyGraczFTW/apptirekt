import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConfirmComponent} from '../confirm/confirm.component';
import {SkillAddComponent} from '../skill-add/skill-add.component';
import {SkillEditComponent} from '../skill-edit/skill-edit.component';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  skill:any;
  employee: any;
  employeeName:string;
  employeeSurname:string;
  employeeSkill:string;
  skillRating:number;
  message:string;

  selectedValue: string;
  currentRate = 0;

  constructor(public dialog: MatDialog, public crudservice:CrudService, @Inject(MAT_DIALOG_DATA) private data) {
    console.log(this.data)
  }

  displayedColumns: string[] = ['name', 'surname', 'skill', 'rating', 'action1', 'action2'];

  CreateRecord()
  {
    let Record = {};
    Record['name'] = this.employeeName;
    Record['surname'] = this.employeeSurname;
    Record['skill'] = this.employeeSkill;
    Record['rating'] = this.skillRating;

    this.crudservice.create_Newemployee(Record).then(res => {

        this.employeeName = "";
        this.employeeSurname ="";
        this.employeeSkill = "";
        this.skillRating = 0;
        console.log(res);
        this.message = "Employee data save Done";
    }).catch(error => {
      console.log(error);
    });
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

  AddSkill() {
    this.dialog.open(SkillAddComponent);
}

  EditSkill() {
    this.dialog.open(SkillEditComponent);
}

  closeDialog() {
    this.dialog.closeAll();
}

  openConfirmDlg() {
    this.dialog.open(ConfirmComponent);
}

  cancel(event) {
    event.preventDefault();
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

    this.crudservice.get_Allskills().subscribe(data => {
    
      this.skill = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          skill: e.payload.doc.data()['skill'],
        };
      })
      console.log(this.skill);

    });
  }
}
