import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule, // * For Lazy loading
    ServerTransferStateModule // * needed for state service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
