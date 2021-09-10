import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: AccountsComponent},
  {path: 'edit/:id', component:AccountEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
