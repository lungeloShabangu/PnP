import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BankingDetailsComponent } from './Component/banking-details/banking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
