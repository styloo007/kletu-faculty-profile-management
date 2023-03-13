import { Component,NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud3Service } from 'src/app/service/crud3.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

  publicationForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: Crud3Service) { 
      this.publicationForm = this.formBuilder.group({
        name:[''],
        year:[''],
        publ:['']
      })
    }

  ngOnInit(): void { }

  onSubmit():any {
    this.crudService.AddPublication(this.publicationForm.value)
    .subscribe(()=>{
      console.log('data added');
      this.ngZone.run(()=> this.router.navigateByUrl('/publications-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
