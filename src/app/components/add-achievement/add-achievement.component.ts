import { Component,NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud2Service } from 'src/app/service/crud2.service';

@Component({
  selector: 'app-add-achievement',
  templateUrl: './add-achievement.component.html',
  styleUrls: ['./add-achievement.component.css']
})
export class AddAchievementComponent implements OnInit {

  achievementForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: Crud2Service) { 
      this.achievementForm = this.formBuilder.group({
        desp:[''],
        year:[''],
        event:['']
      })
    }

  ngOnInit(): void { }

  onSubmit():any {
    this.crudService.AddAchievement(this.achievementForm.value)
    .subscribe(()=>{
      console.log('achievement added');
      this.ngZone.run(()=> this.router.navigateByUrl('/achievement-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
