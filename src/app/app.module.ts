import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { LearnStyleComponent } from './learn-style/learn-style.component';
import {LoopsComponent} from './loops/loops.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    EmailAlertComponent,
    LearnStyleComponent,
    LoopsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
