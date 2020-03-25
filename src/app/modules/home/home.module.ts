import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

/* NG_MODULES */
import { SharedModule }     from '@shared/shared.module';
import { HomeRoutingModule} from './home-routing.module';

/* COMPONENTS */
import { HomeComponent }      from './page/app-home/home.component';
import { HighlightComponent } from './component/highlight/highlight.component';
import { LinksComponent }     from './component/links/links.component';
import { ResourcesComponent } from './component/resources/resources.component';
import { StepsComponent }     from './component/steps/steps.component';


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
