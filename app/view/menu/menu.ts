/**
 * Created by lh on 2016/12/8.
 */
import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'menu-page',
  templateUrl: 'menu.html'
})

export class MenuPage implements OnInit {
  @ViewChild('buttonCollapse') btnColl: ElementRef;

  ngOnInit(): void {
    $(this.btnColl.nativeElement).sideNav({
      closeOnClick: true
    });
  }
}
