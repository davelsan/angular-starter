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
import { FooterComponent }  from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    ToolbarComponent,
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
