import { Component, OnInit } from '@angular/core';
import { Crud2Service } from 'src/app/service/crud2.service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.css']
})
export class AchievementListComponent implements OnInit {
  Achievements:any = [];
  constructor(private crudApi:Crud2Service ) { }

  ngOnInit(): void {
    this.crudApi.getAchievements().subscribe(res=>{
      console.log(res);
      this.Achievements = res;
    })
  }
  delete(id:any,i:any) {
    console.log(id);
    if(window.confirm('Are you sure want to delete?')) {
      this.crudApi.deleteAchievement(id).subscribe(res=>{
        this.Achievements.splice(i,1);
      })
    }
  }

}
