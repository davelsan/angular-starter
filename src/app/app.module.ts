/* CORE */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

/* MODULES */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule }     from './shared/shared.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContentComponent } from './layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
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
