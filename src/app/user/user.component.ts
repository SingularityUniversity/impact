import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var Auth0Lock;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const CLIENT_ID:string = 'ZS53SFdfzPVFu4zpJXnim1sAh8QruxuC';
    const DOMAIN: string = 'kwasi-su.auth0.com';

    var lock = new Auth0Lock(CLIENT_ID, DOMAIN);

  document.getElementById('btn-login').addEventListener('click', function () {
    lock.show();
  });

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
