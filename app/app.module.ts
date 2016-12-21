import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ResumePage} from "./view/resume/resume";
import {ProductionPage} from "./view/production/production";
import {MenuPage} from "./view/menu/menu";
import {ProfilePage} from "./view/profile/profile";
import {MessagePage} from "./view/message/message";
import {ShortTimePipe} from "./pipe/shortTime.pipe";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import 'rxjs/Rx';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    MessagePage,
    ShortTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
