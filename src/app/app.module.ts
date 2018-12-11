import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            "690498261301-52hmvst859qpt2ti537o7pt9ad3jf3uj.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}
import { AuthenticationService } from './_services/authentication.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
