import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private overlayElem: any;
  private menu: any;
  private hamburgerIcon: any;
  public title = "Impact Initiatives";



  public menuItemsArray: any[] = [
    {"title":"Home", "link":"/"},
    {"title":"Dashboard","link":"./dashboard",
      "subItems":[
        {"title": "Dashboard", "link":"./dashboard"},
      ]
    },
  ];


  public onItemSelect(item:any){
  if(!item.subItems) {
    this.router.navigate([item.link])
    this.hideSideMenu()
  }
  }

  /**
   * @desc: Hides the right side menu
   */
  private hideSideMenu(): void {
    this.menu = document.getElementsByClassName('show-menu');
    this.overlayElem = document.getElementsByClassName('cuppa-menu-overlay');
    this.hamburgerIcon = document.getElementsByClassName('hamburger-arrow-left');

    // Hide Menu
    if(this.menu.length > 0) {
      this.menu[0].classList.add('hide-menu');
      this.menu[0].classList.remove('show-menu');
    } else {
      console.warn('Cuppa slide menu could not be found.')
    }

    // Remove overlay
    if (this.overlayElem.length > 0) {
      this.overlayElem[0].style['opacity'] = 0;
    } else {
      console.warn('Cuppa slide menu overlay could not be found')
    }

    // Replace the arrow-left icon with the hamburger icon
    if(this.hamburgerIcon.length > 0) {
      this.hamburgerIcon[0].classList.remove('is-active')
    } else {
      console.warn('Cuppa slide menu hamburger icon could not be found')
    }
  }




}
