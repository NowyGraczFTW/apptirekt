import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {

  message:string;
  newSkill:string;

  CreateSkill()
  {
    let Record = {};
    Record['skill'] = this.newSkill;

    this.crudservice.create_NewSkill(Record).then(res => {

        this.newSkill = "";
        console.log(res);
        this.message = "Skill data save Done";
    }).catch(error => {
      console.log(error);
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  constructor(public dialog: MatDialog, public crudservice:CrudService, private dialogRef:MatDialogRef<SkillAddComponent>) { }

  ngOnInit(): void {
  }

}
