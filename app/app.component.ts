import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ProfilePage} from "./view/profile/profile";

@Component({
  selector: 'my-app',
  template: `
<menu-page></menu-page>
<div class="row">
<div class="col s12 m4">
<profile-page></profile-page>
</div>
<div class="col s12 m8">
<router-outlet></router-outlet>
</div>
</div>
`
})
export class AppComponent{

  constructor(private router: Router) {

  }

}
