import { Component, OnInit,VERSION, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { ThemeStorage, DocsSiteTheme } from '../../services/theme-storage.service';
import { OverlayContainer } from '@angular/cdk/overlay';
declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  sidenavopened: any;
  version = VERSION;
  theme: DocsSiteTheme;
  themeToggle: boolean;
  themeChangerButton: string;
  themes: DocsSiteTheme[] = [
    { name: 'light-theme' },
    { name: 'dark-theme' }
  ];
  private _mobileQueryListener: () => void;
  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private overlay: OverlayContainer,
    private themeStorage: ThemeStorage) { 
      this.mobileQuery = media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

    onResize() {
      // if (window.innerWidth < 1000) {
      //   //this.sidenav.close()
      // }
      console.log('test');
      $("#slim-sidenav").toggleClass("slim");
    }
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

  ngOnInit() {
    this.installTheme(this.themeStorage.getStoredThemeName());
  }


  installTheme(themeName: string) {
    this.theme = this.themes.find(theme => theme.name === themeName);

    if (!this.theme) {
      return;
    }

    if (this.theme.name === 'dark-theme') {
      this.themeToggle = true;
      this.overlay.getContainerElement().classList.remove('light-theme' || '');
      document.body.classList.remove('light-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');
      document.body.classList.add('dark-theme');
      this.themeChangerButton = 'Light';
    } else {
      this.themeToggle = false;
      this.overlay.getContainerElement().classList.remove('dark-theme' || '');
      document.body.classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add('light-theme');
      document.body.classList.add('light-theme');
      this.themeChangerButton = 'Dark';
    }

    if (this.theme) {
      this.themeStorage.storeTheme(this.theme);
    }
  }
  drawer() {
  }

  toggleTheme(value) {
    console.log(value);
    
    this.themeStorage.clearStorage();
    if (this.overlay.getContainerElement().classList.contains('dark-theme')) {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add('light-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'light-theme'));
      this.themeChangerButton = 'Dark';
    } else if (this.overlay.getContainerElement().classList.contains('light-theme')) {
      this.overlay.getContainerElement().classList.remove('light-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'dark-theme'));
      this.themeChangerButton = 'Light';
    } else {
      this.overlay.getContainerElement().classList.add('light-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'light-theme'));
      this.themeChangerButton = 'Dark';
    }
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'light-theme'));
      this.themeChangerButton = 'Dark';
    } else if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'dark-theme'));
      this.themeChangerButton = 'Light';
    } else {
      document.body.classList.add('light-theme');
      this.themeStorage.storeTheme(this.themes.find(theme => theme.name === 'light-theme'));
      this.themeChangerButton = 'Dark';
    }
  }

}
