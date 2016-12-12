import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ResumePage} from "./view/resume/resume";
import {ProductionPage} from "./view/production/production";
import {MenuPage} from "./view/menu/menu";
import {ProfilePage} from "./view/profile/profile";
import {MessagePage} from "./view/message/message";

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
        component: ProductionPage
      },
      {
        path: 'message',
        component: MessagePage
      }
    ])
  ],
  declarations: [
    AppComponent,
    MenuPage,
    ProfilePage,
    ResumePage,
    ProductionPage,
    MessagePage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
