import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
  IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DrawerComponent } from './drawer/drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
