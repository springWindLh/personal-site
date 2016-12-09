import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ResumePage} from "./view/resume/resume";
import {productionPage} from "./view/production/production";
import {MenuPage} from "./view/menu/menu";
import {ContactPage} from "./view/contact/contact";
import {ProfilePage} from "./view/profile/profile";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'resume',
        component: ResumePage
      },
      {
        path: 'production',
        component: productionPage
      },
      {
        path: 'contact',
        component: ContactPage
      }
    ])
  ],
  declarations: [
    AppComponent,
    MenuPage,
    ProfilePage,
    ResumePage,
    productionPage,
    ContactPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
