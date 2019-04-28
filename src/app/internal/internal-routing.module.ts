import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalComponent } from './internal.component';
import { DashboardComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: InternalComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule {}
