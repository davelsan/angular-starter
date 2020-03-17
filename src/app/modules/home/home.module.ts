import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

/* NG_MODULES */
import { SharedModule }     from '@shared/shared.module';
import { HomeRoutingModule} from './home-routing.module';

/* COMPONENTS */
import { HomeComponent }      from './app-home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { LinksComponent }     from './links/links.component';
import { ResourcesComponent } from './resources/resources.component';
import { StepsComponent }     from './steps/steps.component';


@NgModule({
  declarations: [
    HomeComponent,
    LinksComponent,
    HighlightComponent,
    ResourcesComponent,
    StepsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
