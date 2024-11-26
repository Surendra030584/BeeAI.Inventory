import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, NgForm } from '@angular/forms';

import { GenericApiService } from '../service/generic-api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  show: boolean = false;
  form: any = {
    empemail: null,
    emppassword: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private _userdata: any;
  constructor(private routes: Router, public router: Router,
    public _genericApiService: GenericApiService, private toastr: ToastrService

  ) { }


  password() {
    this.show = !this.show;
  }
  ngOnInit() {
    if (localStorage.getItem('token') != "" && localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/secure')
    }


  }


  onSubmit(): void {
    this._genericApiService.postData('User/login', this.form).subscribe({
      next: (x: any) => {

        if (x.message === 'success') {
          this._userdata = x.data;
          localStorage.setItem('loggedUser', JSON.stringify(this._userdata));
          localStorage.setItem('Auth', this._userdata.token);
          localStorage.setItem('token', this._userdata.token);

          this.routes.navigate(['/admin']);
          if (this.form.rememberMe) {
            localStorage.setItem('username', this.form.empemail);
            localStorage.setItem('password', this.form.emppassword);
            localStorage.setItem('remember', 'true');
          } else {
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
            localStorage.setItem('remember', 'false');
          }


        } else {
          this.toastr.warning('warning', x.message);
        }
      },
      error: (error) => {
        console.log('There was an error in retrieving data from the server');
      }
    });
  }




}
export interface UserLogin {
  empemail: string;
  emppassword: string;
  rememberMe: string;
}
