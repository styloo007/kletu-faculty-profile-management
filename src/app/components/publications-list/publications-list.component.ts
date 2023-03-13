import { Component, OnInit } from '@angular/core';
import { Crud3Service } from 'src/app/service/crud3.service';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent implements OnInit {
  Publications:any = [];
  constructor(private crudApi:Crud3Service ) { }

  ngOnInit(): void {
    this.crudApi.getPublications().subscribe(res=>{
      console.log(res);
      this.Publications = res;
    })
  }
  delete(id:any,i:any) {
    console.log(id);
    if(window.confirm('Are you sure want to delete?')) {
      this.crudApi.deletePublication(id).subscribe(res=>{
        this.Publications.splice(i,1);
      })
    }
  }
}
