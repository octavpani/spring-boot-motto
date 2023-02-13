import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MottoListComponent } from './components/motto-list/motto-list.component';
import { HttpClientModule } from '@angular/common/http'
import { MottoService } from './services/motto.service';

@NgModule({
  declarations: [
    AppComponent,
    MottoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
