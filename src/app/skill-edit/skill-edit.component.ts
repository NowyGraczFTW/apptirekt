import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  skill:any;

  constructor(public crudservice:CrudService) { }

  EditSkill(Record)
  {
    Record.isedit = true;
    Record.editskill = Record.skill;
  }

  UpdataSkill(recorddata)
  {
    let record = {};
    record['skill'] = recorddata.editskill;
    this.crudservice.update_skill(recorddata.id, record);
    recorddata.isedit = false;
  }

  ngOnInit(): void {
  }
}
