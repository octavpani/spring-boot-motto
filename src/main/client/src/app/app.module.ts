import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MottoService } from './services/motto.service';
import { CompanyListComponent } from './components/company-list/company-list.component';

import {Routes, RouterModule} from '@angular/router';
import { IndustryMenuComponent } from './components/industry-menu/industry-menu.component';
import { SearchComponent } from './components/search/search.component';
import { MottoDetailsComponent } from './components/motto-details/motto-details.component';

const routes: Routes = [
  {path: 'companies/:id', component: MottoDetailsComponent},
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
    CompanyListComponent,
    IndustryMenuComponent,
    SearchComponent,
    MottoDetailsComponent
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
