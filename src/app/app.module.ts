import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';

// fontawsome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// ngx-bootstrap
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    TooltipModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
