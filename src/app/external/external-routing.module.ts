import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components';
import { ExternalComponent } from './external.component';

const routes: Routes = [
  {
    path: '',
    component: ExternalComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule {}
