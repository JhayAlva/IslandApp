import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IslandRoutingModule } from './island-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrouselFotosComponent } from './components/carrousel-fotos/carrousel-fotos.component';
import { HeroComponent } from './components/hero/hero.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MainPageComponent,
    LayoutPageComponent,
    NavBarComponent,
    CarrouselFotosComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    IslandRoutingModule
]
})
export class IslandModule { }
