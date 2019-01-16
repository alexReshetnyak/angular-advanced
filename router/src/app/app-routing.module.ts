import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyPreload } from './modules/lazy/mypreload';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy', loadChildren: './modules/lazy/lazy.module#LazyModule' },
  // {
  //   path: 'lazy-without-preload',
  //   loadChildren: './modules/lazy/lazy.module#LazyModule',
  //   data: { nopreload: true }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreload })],
  exports: [RouterModule],
  providers: [MyPreload]
})
export class AppRoutingModule { }
