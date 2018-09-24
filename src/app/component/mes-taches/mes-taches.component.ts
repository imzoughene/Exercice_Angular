import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router'
@Component({
  selector: 'app-mes-taches',
  templateUrl: './mes-taches.component.html',
  styleUrls: ['./mes-taches.component.css']
})
export class MesTachesComponent implements OnInit {

  itemList:AngularFireList<any>
  itemArray=[]
  DateSelected: NgbDateStruct;
  $key:any;
  data= {
    titre:' ',
    Description:' '
  }
  constructor(public db:AngularFireDatabase,public router:Router) {
    this.itemList = db.list("taches");
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y = action.payload.toJSON()
        y["$key"]=action.key
        this.itemArray.push(y as ListItemClass)
      })
    });
    console.log(this.itemArray)

   }

  ngOnInit() {
  }

}
export class ListItemClass{
  $key :any;
  titre:string;
  DateSelected:any;
  Description:string;

}
