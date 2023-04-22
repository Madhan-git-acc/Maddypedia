import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import {MatButtonModule } from '@angular/material/button';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentsComponent } from './contents/contents.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { RandomArticleComponent } from './random-article/random-article.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpPageComponent } from './help-page/help-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContentsComponent,
    CurrentEventsComponent,
    RandomArticleComponent,
    AboutUsComponent,
    ContactUsComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  ngOninit(): void {

  }
}
