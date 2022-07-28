import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/welcome',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/tabs',
      icon: 'globe'
    },
    {
      title: 'Report Incident',
      url: '/report-incident',
      icon: 'paper-plane'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'play'
    },
    {
      title: 'Contact',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'Help',
      url: '/helpus',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  ngOnInit() {

  }

  logout() {
    localStorage.clear();
  }

  navigateP(url){
    this.router.navigateByUrl(url);
  }
}
