import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular/clr-angular.module';
import { ClrIconModule } from '@clr/angular';
import {SidenavComponent } from './sidenav.component'
@NgModule({
  declarations: [ SidenavComponent],
  imports: [
    CommonModule,
    ClrIconModule
  ],
  exports: [
    SidenavComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SidenavtModule { }
