import { Component, OnInit } from '@angular/core';
import { UserLoginCreate } from '../models/user-login-create';
import { ApiUserLoginsService } from '../services/api-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserLoginCreatePage implements OnInit {

  data: UserLoginCreate
  constructor(public apiService: ApiUserLoginsService, public router: Router) { 
    this.data = new UserLoginCreate();
  }

  ngOnInit() {
  }
  
  register() {
    debugger;
    this.apiService.register(this.data).subscribe((response) => {
      debugger;
      localStorage.setItem('laravel_token', response['data'].access_token);
      localStorage.setItem('user_id', response['data'].user.id);
//      localStorage.setItem('id_user', response['data'].access_token);
      this.router.navigate(['finalize registration']);
    });
  } 
 
}
