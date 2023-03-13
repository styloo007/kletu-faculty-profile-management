import { Component,NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  msg: string =""
  i: number = 3
  btnstate: boolean=false;

  signupUsers: any[] = [];
  isUserExist: boolean = false;

  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(
    private router:Router,
    private ngZone:NgZone
  ) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
    console.log(this.signupObj.email+" "+this.signupObj.password);
  }

  onLogin() {
    this.isUserExist = this.signupUsers.find(m => m.email == this.loginObj.userName
      && m.password == this.loginObj.password);

      if(this.isUserExist != undefined && this.i!=0) {
        // alert("login");
        this.ngZone.run(()=> this.router.navigateByUrl('/books-list'))
      } else if(this.i==0) {
        this.msg='Maximum Login Exceded; User Blocked';
        this.btnstate=true;
      } else {
        this.msg='Wrong Credentials Entered';
        this.i--;
      }
  }

}
