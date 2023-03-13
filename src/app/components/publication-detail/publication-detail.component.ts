import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Crud3Service } from 'src/app/service/crud3.service';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {

  getId:any;
  updateForm: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute : ActivatedRoute,
    private crudApi : Crud3Service) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      crudApi.getPublication(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          name: res['name'],
          year: res['year'],
          publ: res['publ']
        })
      });

      this.updateForm = this.formBuilder.group({
        name:[''],
        year: [''],
        publ: ['']
      })
    }
 
  ngOnInit(): void {
  }
  onUpdate() {
    this.crudApi.updatePublication(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('data updated')
      this.ngZone.run(()=>{this.router.navigateByUrl('/publications-list')})
    },(err)=>{
      console.log(err);
    })
  }

}
