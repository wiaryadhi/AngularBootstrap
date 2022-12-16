import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { GaleriComponent } from './galeri/galeri.component';
import { GaleriActiveComponent } from './galeri-active/galeri-active.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PbbComponent } from './pbb/pbb.component';
import {FormsModule} from "@angular/forms";
import { TodoComponent } from './todo/todo.component';
import { MenuAppComponent } from './menu-app/menu-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaleriComponent,
    GaleriActiveComponent,
    JumbotronComponent,
    PbbComponent,
    TodoComponent,
    MenuAppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
