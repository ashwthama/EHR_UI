import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username='';
  password='';
  constructor() { }

  ngOnInit(): void {
  }

  Submit(LoginForm:any){
    console.log(LoginForm.value);
    
  }

}
