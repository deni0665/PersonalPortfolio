import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent }from './portfolio/portfolio.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationComponent } from './about/education/education.component';
import { SkillsComponent } from './about/skills/skills.component';


const appRoutes: Routes =[
  {path:'about', component:AboutComponent},
  {path: 'portfolio',component:PortfolioComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AboutComponent,
    PortfolioComponent,
    EducationComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
