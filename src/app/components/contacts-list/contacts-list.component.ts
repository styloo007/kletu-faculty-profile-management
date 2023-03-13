import { Component, OnInit } from '@angular/core';
import { Crud5Service } from 'src/app/service/crud5.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  Contacts:any = [];
  constructor(private crudApi:Crud5Service ) { }

  ngOnInit(): void {
    this.crudApi.getContacts().subscribe(res=>{
      console.log(res);
      this.Contacts = res;
    })
  }
  
  delete(id:any,i:any) {
    console.log(id);
    if(window.confirm('Are you sure want to delete?')) {
      this.crudApi.deleteContact(id).subscribe(res=>{
        this.Contacts.splice(i,1);
      })
    }
  }

}
