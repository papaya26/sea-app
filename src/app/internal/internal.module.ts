import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { SharedModule } from '@app/shared/shared.module';
import { InternalRoutingModule } from './internal-routing.module';

import { InternalComponent } from './internal.component';
import { DashboardComponent } from './components';
import { HeaderComponent } from './components';

import { InternalStore } from './internal.store';

@NgModule({
  declarations: [InternalComponent, DashboardComponent, HeaderComponent],
  imports: [CKEditorModule, SharedModule, InternalRoutingModule],
  providers: [InternalStore]
})
export class InternalModule {}
