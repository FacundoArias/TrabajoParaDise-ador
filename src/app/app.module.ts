import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { MainComponent } from './componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutmeComponent,
    PortfolioComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
