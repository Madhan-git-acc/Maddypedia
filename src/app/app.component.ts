import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RandomArticleComponent } from './random-article/random-article.component';
import { ContentsComponent } from './contents/contents.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  selectedMenu : any = [MainPageComponent,HelpPageComponent,ContactUsComponent,CurrentEventsComponent,AboutUsComponent,RandomArticleComponent,ContentsComponent]; 

    goTo(paramText: string){
 this.selectedMenu = paramText
    }

}
