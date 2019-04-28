import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './config';

const routes: Routes = [
  {
    path: appRoutes.external,
    loadChildren: '@app/external/external.module#ExternalModule'
  },
  {
    path: appRoutes.internal,
    loadChildren: '@app/internal/internal.module#InternalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
