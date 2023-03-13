import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Crud2Service } from 'src/app/service/crud2.service';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.css']
})
export class AchievementDetailComponent implements OnInit {

  getId:any;
  updateForm: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute : ActivatedRoute,
    private crudApi : Crud2Service) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      crudApi.getAchievement(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          desp: res['desp'],
          year: res['year'],
          event: res['event']
        })
      });

      this.updateForm = this.formBuilder.group({
        desp:[''],
        year: [''],
        event: ['']
      })
    }
 
  ngOnInit(): void {
  }
  onUpdate() {
    this.crudApi.updateAchievement(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('data updated')
      this.ngZone.run(()=>{this.router.navigateByUrl('/achievement-list')})
    },(err)=>{
      console.log(err);
    })
  }

}
