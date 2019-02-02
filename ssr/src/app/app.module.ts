import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'srr' }), // * appId can be any uniq name
    AppRoutingModule,
    BrowserTransferStateModule // * needed for state service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
