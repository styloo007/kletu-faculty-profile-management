import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Crud4Service } from 'src/app/service/crud4.service';

@Component({
  selector: 'app-research-detail',
  templateUrl: './research-detail.component.html',
  styleUrls: ['./research-detail.component.css']
})
export class ResearchDetailComponent implements OnInit {

  getId:any;
  updateForm: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute : ActivatedRoute,
    private crudApi : Crud4Service) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      crudApi.getResearch(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          name: res['name'],
          field: res['field'],
          funds: res['fund']
        })
      });

      this.updateForm = this.formBuilder.group({
        name:[''],
        field: [''],
        funds: ['']
      })
    }
 
  ngOnInit(): void {
  }

  onUpdate() {
    this.crudApi.updateResearch(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('data updated')
      this.ngZone.run(()=>{this.router.navigateByUrl('/researchs-list')})
    },(err)=>{
      console.log(err);
    })
  }
}
