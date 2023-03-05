import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MottoListComponent } from './components/motto-list/motto-list.component';
import { HttpClientModule } from '@angular/common/http'
import { MottoService } from './services/motto.service';
import { CompanyListComponent } from './components/company-list/company-list.component';

import {Routes, RouterModule} from '@angular/router';
import { IndustryMenuComponent } from './components/industry-menu/industry-menu.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'search/:keyword', component: CompanyListComponent},
  {path: 'category/:id', component: CompanyListComponent},
  {path: 'category', component: CompanyListComponent},
  {path: 'companies', component: CompanyListComponent},
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: '**', redirectTo: '/companies', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MottoListComponent,
    CompanyListComponent,
    IndustryMenuComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [MottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
