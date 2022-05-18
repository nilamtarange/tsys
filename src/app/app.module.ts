import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HighlightDirective } from './highlight.directive';
import { UserProfilePipe } from './user-profile.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { PriyaComponent } from './priya/priya.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routersConfig: Routes=[
{
  path:'home',
  component:HomeComponent
},
{
path:'contact',
component: ContactUsComponent

},
{
path:'list',
component:UserListComponent

}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    UserComponent,
    UserListComponent,
    HighlightDirective,
    UserProfilePipe,
    ContactUsComponent,
    PriyaComponent,
    HomeComponent,
    //CompanyNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routersConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
