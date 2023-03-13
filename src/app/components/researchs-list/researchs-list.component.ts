import { Component, OnInit } from '@angular/core';
import { Crud4Service } from 'src/app/service/crud4.service';

@Component({
  selector: 'app-researchs-list',
  templateUrl: './researchs-list.component.html',
  styleUrls: ['./researchs-list.component.css']
})
export class ResearchsListComponent implements OnInit {

  Researchs:any = [];
  constructor(private crudApi:Crud4Service ) { }

  ngOnInit(): void {
    this.crudApi.getResearchs().subscribe(res=>{
      console.log(res);
      this.Researchs = res;
    })
  }
  delete(id:any,i:any) {
    console.log(id);
    if(window.confirm('Are you sure want to delete?')) {
      this.crudApi.deleteResearch(id).subscribe(res=>{
        this.Researchs.splice(i,1);
      })
    }
  }

}
