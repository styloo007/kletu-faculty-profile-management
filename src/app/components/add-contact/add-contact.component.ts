import { Component,NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud5Service } from 'src/app/service/crud5.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: Crud5Service) { 
      this.contactForm = this.formBuilder.group({
        name:[''],
        addr:['']
      })
    }

  ngOnInit(): void { }

  onSubmit():any {
    this.crudService.AddContact(this.contactForm.value)
    .subscribe(()=>{
      console.log('data added');
      this.ngZone.run(()=> this.router.navigateByUrl('/contacts-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
