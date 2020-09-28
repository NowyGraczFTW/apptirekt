import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {CrudService} from './service/crud.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './Search';
import {SkillzComponent} from './Skillz';
import {UsersComponent} from './Users';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import {DialogComponent} from './dialog/dialog.component'
import {RatingModule} from 'ng-starrating';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmComponent} from './confirm/confirm.component';
import {SkillEditComponent} from './skill-edit/skill-edit.component';
import {SkillAddComponent} from './skill-add/skill-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SkillzComponent,
    UsersComponent,
    DialogComponent,
    ConfirmComponent,
    SkillEditComponent,
    SkillAddComponent,
    UserEditComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RatingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],  
  providers: [CrudService],
  bootstrap: [AppComponent]

})
export class AppModule { }
