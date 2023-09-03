import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {RouterModule} from "@angular/router";
import {routes} from "./shell.routes";
import { LayoutComponent } from './layout/layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppModule} from "../../app.module";
import {HeaderComponent} from "./header/header.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatLineModule } from "@angular/material/core";


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatLineModule,
  ],
})
export class ShellModule { }
