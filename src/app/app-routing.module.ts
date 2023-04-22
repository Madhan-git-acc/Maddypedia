import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { RandomArticleComponent } from './random-article/random-article.component';
import { ContentsComponent } from './contents/contents.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
{path:'mainpage',component: MainPageComponent},
{path:'events',component:CurrentEventsComponent},
{path:'article',component: RandomArticleComponent},
{path:'contents',component: ContentsComponent},
{path:'contact',component: ContactUsComponent},
{path:'about',component: AboutUsComponent},
{path:'help',component: HelpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
