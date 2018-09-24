import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
  open2(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  constructor(private modalService: NgbModal,public db:AngularFireDatabase,public router:Router) {
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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  OnDelete(key){
    this.itemList.remove(key)
    this.itemArray=[];
  }
  OnEdit(item) {
    //console.log("Editing")
    console.log("item $ key"+item.$key)
    console.log("item + ")
    console.log(item)

    this.itemList.set(item.$key,{
      titre:this.data.titre,
      Description:this.data.Description,
      DateSelected:this.DateSelected
    });
    this.itemArray=[]


  }


  editForm(item){
    this.data=item;
  }
}
export class ListItemClass{
  $key :any;
  titre:string;
  DateSelected:any;
  Description:string;

}

