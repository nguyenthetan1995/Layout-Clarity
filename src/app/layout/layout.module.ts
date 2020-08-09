import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { ClarityModule } from '@clr/angular/clr-angular.module';
import {LayoutRoutingModule} from './layout-routing.module'
import { ClrIconModule } from '@clr/angular';
import {SidenavtModule} from './sidenav/sidenav.module'
@NgModule({
  declarations: [ HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    SidenavtModule
  ],
  exports: [
    HeaderComponent, ContentComponent
  ],
  /* schemas: [ CUSTOM_ELEMENTS_SCHEMA ] */
})
export class LayoutModule { }
