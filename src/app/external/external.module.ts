import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ExternalRoutingModule } from './external-routing.module';

import { ExternalComponent } from './external.component';
import { LandingComponent } from './components';

@NgModule({
  declarations: [ExternalComponent, LandingComponent],
  imports: [SharedModule, ExternalRoutingModule],
  providers: []
})
export class ExternalModule {}
