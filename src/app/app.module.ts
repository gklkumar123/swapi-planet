import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';

// fontawsome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// ngx-bootstrap
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

// Directive
import { UppercaseDirective } from './directive/uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
