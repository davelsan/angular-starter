import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

/* MODULES */
import { HomeRoutingModule} from './home-routing.module';
import { SharedModule }     from '../../shared/shared.module';

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
