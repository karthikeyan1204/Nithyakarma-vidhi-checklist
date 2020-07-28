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

  constructor() { }

  ngOnInit() {
  }

}
