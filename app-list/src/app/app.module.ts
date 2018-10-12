import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
