import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(
      private http: HttpClient
    ) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        
        console.log( "currentUser", currentUser );
    }

    login(idToken: string) {
      
      // const XHR = new XMLHttpRequest();
      // const FD = new FormData();
      // FD.append("id_token", idToken);
      // XHR.addEventListener('load', (event) => {
      //   console.log( "LOAD", event );
      //   let target = <any>event.target;
      //   let response = JSON.parse(target.response);
      //   let token = response.token;
      //   this.token = token;
      //   localStorage.setItem('currentUser', JSON.stringify(response));
      // });
      // XHR.addEventListener('error', function(event) {
      //   console.log( "ERROR", event );
      // });
      // XHR.open("POST", "http://localhost:4201/tokensignin.php");
      // XHR.send(FD);
      // // location.href = "http://localhost:4201/tokensignin.php?id_token=" + userData.idToken;
      
      // let body = JSON.stringify({ id_token: idToken });
      // return this.http.post('http://localhost:4201/tokensignin.php', body, httpOptions)
      //   .pipe(
      //     tap(response => console.log( response ) )
      //   );
      //   // .map((response: Response) => {
      //   //   console.log( response );
      //   //   // login successful if there's a jwt token in the response
      //   //   let token = response.json() && response.json().token;
      //   //   if (token) {
      //   //     // set token property
      //   //     this.token = token;

      //   //     // store username and jwt token in local storage to keep user logged in between page refreshes
      //   //     localStorage.setItem('currentUser', JSON.stringify(response));

      //   //     // return true to indicate successful login
      //   //     return true;
      //   //   } else {
      //   //     // return false to indicate failed login
      //   //     return false;
      //   //   }
      //   // });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}