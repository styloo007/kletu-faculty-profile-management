import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Crud6Service } from 'src/app/service/crud6.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  timetableForm:FormGroup;

  Timetables:any = [];

  constructor(
    public formBuilder:FormBuilder,
    private crudService: Crud6Service,
    private crudApi:Crud6Service
  ) { 
    this.timetableForm = this.formBuilder.group({
      name:['']
    })
  }

  ngOnInit(): void {
    this.crudApi.getTimetables().subscribe(res=>{
      console.log(res);
      this.Timetables = res;
    })
  }

  onSubmit():any {
    this.crudService.AddTimetable(this.timetableForm.value)
    .subscribe(()=>{
      console.log('data added');
      location.reload();
      }, (err) => {
        console.log(err);
    });
  }

  subjs1 = ['CN1 TUT B1(PPH,ASM)','ML LAB B2(UK,SV)'];
  addSubj1(newSubj: string) {
    if (newSubj) {
      this.subjs1.push(newSubj);
    }
  }
  subjs2 = ['SE(POD)'];
  addSubj2(newSubj1: string) {
    if (newSubj1) {
      this.subjs2.push(newSubj1);
    }
  }
  subjs3 = ['SS(GSH)'];
  addSubj3(newSubj2: string) {
    if (newSubj2) {
      this.subjs3.push(newSubj2);
    }
  }
  subjs4 = ['ML(UK)'];
  addSubj4(newSubj3: string) {
    if (newSubj3) {
      this.subjs4.push(newSubj3);
    }
  }
  subjs5 = ['SS(GSH)'];
  addSubj5(newSubj4: string) {
    if (newSubj4) {
      this.subjs5.push(newSubj4);
    }
  }
  subjs6 = ['NLP(PP)'];
  addSubj6(newSubj5: string) {
    if (newSubj5) {
      this.subjs6.push(newSubj5);
    }
  }
  subjs7 = ['ML(UK)'];
  addSubj7(newSubj6: string) {
    if (newSubj6) {
      this.subjs7.push(newSubj6);
    }
  }
  
  subjs8 = ['NLP(PP)'];
  addSubj8(newSubj7: string) {
    if (newSubj7) {
      this.subjs8.push(newSubj7);
    }
  }
  subjs9 = ['SE(POD)'];
  addSubj9(newSubj8: string) {
    if (newSubj8) {
      this.subjs9.push(newSubj8);
    }
  }
  subjs10 = ['SS(GSH)'];
  addSubj10(newSubj9: string) {
    if (newSubj9) {
      this.subjs10.push(newSubj9);
    }
  }
  subjs11 = ['CN1 TUT B2(PPH,ASM)','ML LAB B1(UK,SV)'];
  addSubj11(newSubj10: string) {
    if (newSubj10) {
      this.subjs11.push(newSubj10);
    }
  }
  subjs12 = ['WT LAB B2(MP,NT)','SS LAB B1(GSH,TAB)'];
  addSubj12(newSubj11: string) {
    if (newSubj11) {
      this.subjs12.push(newSubj11);
    }
  }
  subjs13 = ['ML(UK)'];
  addSubj13(newSubj12: string) {
    if (newSubj12) {
      this.subjs13.push(newSubj12);
    }
  }
  subjs14 = ['SS(GSH)'];
  addSubj14(newSubj13: string) {
    if (newSubj13) {
      this.subjs14.push(newSubj13);
    }
  }
  subjs15 = ['CN1(PPH)'];
  addSubj15(newSubj14: string) {
    if (newSubj14) {
      this.subjs15.push(newSubj14);
    }
  }
  subjs16 = ['NLP(PP)'];
  addSubj16(newSubj15: string) {
    if (newSubj15) {
      this.subjs16.push(newSubj15);
    }
  }
  subjs17 = ['NLP(PP)'];
  addSubj17(newSubj16: string) {
    if (newSubj16) {
      this.subjs17.push(newSubj16);
    }
  }
  subjs18 = ['NLP(PP)'];
  addSubj18(newSubj17: string) {
    if (newSubj17) {
      this.subjs18.push(newSubj17);
    }
  }
  subjs19 = ['NLP(PP)'];
  addSubj19(newSubj18: string) {
    if (newSubj18) {
      this.subjs19.push(newSubj18);
    }
  }
  subjs20 = ['NLP(PP)'];
  addSubj20(newSubj19: string) {
    if (newSubj19) {
      this.subjs20.push(newSubj19);
    }
  }
  subjs21 = ['NLP(PP)'];
  addSubj21(newSubj20: string) {
    if (newSubj20) {
      this.subjs21.push(newSubj20);
    }
  }
  subjs22 = ['NLP(PP)'];
  addSubj22(newSubj21: string) {
    if (newSubj21) {
      this.subjs22.push(newSubj21);
    }
  }
  subjs23 = ['NLP(PP)'];
  addSubj23(newSubj22: string) {
    if (newSubj22) {
      this.subjs23.push(newSubj22);
    }
  }
  subjs24 = ['NLP(PP)'];
  addSubj24(newSubj23: string) {
    if (newSubj23) {
      this.subjs24.push(newSubj23);
    }
  }
  subjs25 = ['NLP(PP)'];
  addSubj25(newSubj24: string) {
    if (newSubj24) {
      this.subjs25.push(newSubj24);
    }
  }
}
