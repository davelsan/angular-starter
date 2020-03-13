/* CORE */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

/* NG_MODULES */
import { SharedModule }     from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

/* COMPONENTS */
import { AppComponent }     from './app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContentComponent } from './layout/content/content.component';
import { SvgDefsComponent } from './layout/svg-defs/svg-defs.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    SvgDefsComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    // core & shared
    SharedModule,

    // app
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
