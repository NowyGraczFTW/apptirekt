import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SkillAddComponent } from '../skill-add/skill-add.component';
import { SkillEditComponent } from '../skill-edit/skill-edit.component';
import {CrudService} from '../service/crud.service';


@Component({ 
    templateUrl: 'skillz.component.html',
    styleUrls: ['./skillz.component.css']
})
export class SkillzComponent{

    skill:any;
    constructor(public dialog: MatDialog, public crudservice:CrudService) {}

    openConfirmDlg() {
        this.dialog.open(ConfirmComponent);
    }

    AddSkill() {
        this.dialog.open(SkillAddComponent);
    }

    ChangeSkill() {
        this.dialog.open(SkillEditComponent);
    }

    ngOnInit(): void {
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