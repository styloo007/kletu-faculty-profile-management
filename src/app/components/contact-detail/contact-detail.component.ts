import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Crud5Service } from 'src/app/service/crud5.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  getId:any;
  updateForm: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute : ActivatedRoute,
    private crudApi : Crud5Service) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      crudApi.getContact(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          name: res['name'],
          addr: res['addr']
        })
      });

      this.updateForm = this.formBuilder.group({
        name:[''],
        addr: ['']
      })
    }
 
  ngOnInit(): void {
  }
  onUpdate() {
    this.crudApi.updateContact(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('data updated')
      this.ngZone.run(()=>{this.router.navigateByUrl('/contacts-list')})
    },(err)=>{
      console.log(err);
    })
  }


}
