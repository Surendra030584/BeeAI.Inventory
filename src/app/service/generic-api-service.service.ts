import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, throwError } from 'rxjs';
 
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService {

  subscription: Subscription | undefined;

  private headerOptions: any;

  constructor(public router: Router,
    public http: HttpClient,
    public _router: Router,
     ) { }

  private setHeaders() {
    const token = localStorage.getItem('token');
    if (token != null) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'Token': token.toString()
      });
      return headers;
    }
    else {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      return headers;
    }
  }

  postData(apiUrl: string, dataModel: any) {
    this.headerOptions = this.setHeaders();
    return this.http.post(environment._apiUrl +apiUrl, JSON.stringify(dataModel), { headers: this.headerOptions })
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }

  putData(apiUrl: string, dataModel: any, id: string) {
    this.headerOptions = this.setHeaders();
    return this.http.put(environment._apiUrl + apiUrl + id, JSON.stringify(dataModel), { headers: this.headerOptions })
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }

  getList(apiUrl: string) {
    this.headerOptions = this.setHeaders();
    return this.http.get(environment._apiUrl+apiUrl, { headers: this.headerOptions })
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }
  logout() {
    localStorage.setItem('loggedUser', "")
    localStorage.setItem('Auth', "")
    localStorage.setItem('token', "")
    this.router.navigateByUrl('/')
  }

  getDictionary(apiUrl: string) {
    return this.http.get(environment._apiUrl +apiUrl)
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }

  deleteData(apiUrl: string, id: number) {
    this.headerOptions = this.setHeaders();
    return this.http.delete(environment._apiUrl +apiUrl + id, { headers: this.headerOptions })
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }

  GET(apiUrl: string): any {
    this.headerOptions = this.setHeaders();
    return this.http.get(apiUrl, { headers: this.headerOptions })
      .pipe(catchError(async (error) => this.HandleError({ error })));
  }

  //Authenticate for gettin Token
  Login(apiUrl: string, uname: string, pwd: string) {
    const body =   JSON.stringify({ "email": uname, "password": pwd });
    return this.http.post(environment._apiUrl +apiUrl, body);
  }

    

  HandleError(error: any) {
    console.log(error);
    if (error.status === 401) {
      this._router.navigate(['/login']);
    }
    else {
      console.log(error);
    }
  }

  async checkLogin() {
    return true;
  }
}
