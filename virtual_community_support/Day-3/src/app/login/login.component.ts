import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router) { }
  
  login(){
    if(this.username === 'admin' && this.password === 'password'){
      this.router.navigate(['/welcome']);
    }else{
      this.errorMsg = 'Invalid Password Or Username'
    }
  }


  ngOnInit(): void {
  }

}
