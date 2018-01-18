import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
declare var Auth0Lock;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  /**
   * Authenticate user
   */
  public login () {
    this.auth.login();
  }

  /**
   * Sets up user authentication
   */
  activate() {
    const CLIENT_ID:string = 'zv9tUmRwHv5jtofQz0BFo6b2qxlxDFPQ';
    const DOMAIN: string = 'singularityu-dev.auth0.com';

    // Get Auth0's lock object using credentials
    let lock = new Auth0Lock(CLIENT_ID, DOMAIN);

    document.getElementById('btn-login').addEventListener('click', function () {
    });

    // Setup event listener to add user info to local storage for persistent sessions
    lock.on("authenticated", function(authResult) {
      lock.getProfile(authResult.idToken, function(error, profile) {

        if (error) {
          // Error callback
          console.error("Something went wrong: ", error);
        }
        console.log('profile', profile);
        localStorage.setItem('userProfile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken)

      });
    })
  }



}
