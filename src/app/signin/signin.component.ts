import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    private authenticationService: AuthenticationService
  ) {}
  
  ngOnInit() {
    
  }
  
  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if ( socialPlatform == "google" ) {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          this.authenticationService.login(userData.idToken);
        }
      );
    }
  }
}
