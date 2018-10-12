import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserService } from './shared_service/user.service';

import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const appRoutes: Routes=[
  {path:'', component: ListUserComponent},
  {path:'op',component:UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
