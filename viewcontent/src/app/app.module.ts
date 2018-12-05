import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { NestedComponent } from './components/nested/nested.component';
import { ColoryDirective } from './directives/colory.directive';
import { ChildComponent } from './components/child/child.component';
import { DelayDirective } from './directives/delay.directive';
import { BannerComponent } from './components/banner/banner.component';
import { HostDirective } from './directives/host.directive';
import { Banner2Component } from './components/banner2/banner2.component';
import { ConvertPipe } from './pipes/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NestedComponent,
    ColoryDirective,
    ChildComponent,
    DelayDirective,
    BannerComponent,
    HostDirective,
    Banner2Component,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [BannerComponent, Banner2Component], // ! Entry components needed for dynamics components
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
