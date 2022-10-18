import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { ApiUserLoginsService } from '../services/api-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  data: UserLogin
  constructor(public apiService: ApiUserLoginsService, public router: Router) { 
    this.data = new UserLogin();
  }

  ngOnInit() {
  }

    
  login() {
    this.apiService.login(this.data).subscribe((response) => {
      debugger;
      localStorage.setItem('data_token', response['data'].access_token);
      this.router.navigate(['dieta-list']);
    });
  }

  cadastro() {
    
      this.router.navigate(['user-create']);
    
  }


  
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['userlogin-list']);
    });

  }
}
