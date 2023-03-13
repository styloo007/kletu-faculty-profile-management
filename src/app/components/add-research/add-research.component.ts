import { Component,NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud4Service } from 'src/app/service/crud4.service';

@Component({
  selector: 'app-add-research',
  templateUrl: './add-research.component.html',
  styleUrls: ['./add-research.component.css']
})
export class AddResearchComponent implements OnInit {

  researchForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: Crud4Service) { 
      this.researchForm = this.formBuilder.group({
        name:[''],
        field:[''],
        funds:['']
      })
    }

  ngOnInit(): void { }

  onSubmit():any {
    this.crudService.AddResearch(this.researchForm.value)
    .subscribe(()=>{
      console.log('data added');
      this.ngZone.run(()=> this.router.navigateByUrl('/researchs-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
