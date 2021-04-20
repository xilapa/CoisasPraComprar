import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoisaModule } from './coisas/coisa.module';
import { SharedModule } from './shared/shared.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';






registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    CoisaModule,
    SharedModule
  ],

  providers: [  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
