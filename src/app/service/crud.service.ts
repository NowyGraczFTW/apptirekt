import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newemployee(Record)
  {
    return this.fireservices.collection('Employee').add(Record);
  }

  get_Allemployee()
  {
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  update_employee(recordid, record)
  {
    this.fireservices.doc('Employee/' + recordid).update(record);
  }

  delete_employee(record_id)
  {
    this.fireservices.doc('Employee/' + record_id).delete();
  }
  
  delete_skill(record_id)
  {
    this.fireservices.doc('Skills/' + record_id).delete();
  }

  create_NewSkill(Record)
  {
    return this.fireservices.collection('Skills').add(Record);
  }

  update_skill(recordid, record)
  {
    this.fireservices.doc('Skills/' + recordid).update(record);
  }

  get_Allskills()
  {
    return this.fireservices.collection('Skills').snapshotChanges();
  }
}

