import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

/* NG_MODULES */
import { SharedModule }     from '@shared/shared.module';
import { HomeRoutingModule} from './home-routing.module';

/* COMPONENTS */
import { AppHomeComponent } from './app-home/app-home.component';



@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [
    AppHomeComponent,
  ]
})
export class HomeModule { }
