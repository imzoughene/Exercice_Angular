import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrls: ['./new-tache.component.css']
})
export class NewTacheComponent implements OnInit {

  closeResult: string;
  DateSelected: NgbDateStruct;
  modalReference: any;

  data= {
    titre:' ',
    Description:' '
  }
  itemList:AngularFireList<any>

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

    this.itemList = db.list('taches');


  }


  add_tache(){
    this.itemList.push({
        titre:this.data.titre,
        Description:this.data.Description,
        DateSelected:this.DateSelected
    });
    this.modalReference.close()

    this.router.navigate(['/component/mes_taches']);

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



  ngOnInit() {
  }

}
