import { Component, OnInit } from '@angular/core';
declare var Auth0Lock;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.activate()
  }

  /**
   * Sets up user authentication
   */
  activate() {
    const CLIENT_ID:string = 'ZS53SFdfzPVFu4zpJXnim1sAh8QruxuC';
    const DOMAIN: string = 'kwasi-su.auth0.com';
    // Get Auth0's lock object using credentials
    var lock = new Auth0Lock(CLIENT_ID, DOMAIN);

    document.getElementById('btn-login').addEventListener('click', function () {
      lock.show();
    });

    // Setup event listener to add user info to local storage for persistent sessions
    lock.on("authenticated", function(authResult) {
      lock.getProfile(authResult.idToken, function(error, profile) {

        if (error) {
          // Error callback
          console.error("Something went wrong: ", error);
        }

        localStorage.setItem('userProfile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken)

      });
    })
  }



}
