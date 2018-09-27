import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { QuickMenuProfileComponent } from './quick-menu-profile/quick-menu-profile.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MenuFooterComponent,
    QuickMenuProfileComponent,
    TopNavigationComponent,
    ContentComponent
     ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
