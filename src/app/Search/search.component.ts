import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CrudService} from '../service/crud.service';


@Component({ 
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    selector: 'app-search'
})
export class SearchComponent{

    constructor(public dialog: MatDialog, public crudservice: CrudService) {}

    skill:any;
    employee:any;
    selectedUsers: string;
    selectedSkills: string;
    displayedColumns: string[] = ['name', 'surname', 'skill', 'rating'];

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
    /*applyFilter(selectedSkills: string) {
        this.dataSource.filter = selectedSkills.trim().toLowerCase();
    }*/
}