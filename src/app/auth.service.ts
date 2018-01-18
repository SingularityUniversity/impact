import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {

  clientID = 'zv9tUmRwHv5jtofQz0BFo6b2qxlxDFPQ';

  auth0 = new auth0.WebAuth({
    clientID: 'zv9tUmRwHv5jtofQz0BFo6b2qxlxDFPQ',
    domain: 'singularityu-dev.auth0.com',
    responseType: 'token id_token',
    audience: 'https://singularityu-dev.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/dashboard',
                        scope: 'openid name picture',
  });

  constructor(public router: Router, private http: HttpClient) {}


  public login(): void {
    this.auth0.authorize();
    // this.handleAuthentication();
  }


  public getProfile(authTokenId: string) {
    const url: string = 'https://su-directory-webapp-dev.herokuapp.com/api/v1/member/';
    this.http.get(
      url, {
        headers: new HttpHeaders().set('Authorization', "Bearer " + authTokenId)
          .set('X-TOKEN-CLIENT-ID', this.clientID),
      }).subscribe(data => {
      let profileInfo = data['results'];
      console.log('profile', profileInfo);
      return profileInfo;
    })
  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log('auth result', authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
      this.getProfile(authResult.idToken);
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/dashboard']);
        console.log(err);
      }
    });
  }


  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log('expiresAt set', expiresAt);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }


  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }


  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // console.log('expiresAt', expiresAt);
    // console.log('isAuth', new Date().getTime() < expiresAt)
    return new Date().getTime() < expiresAt;
  }
}
