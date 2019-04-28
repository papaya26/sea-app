import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@app/shared/shared.module';

import { ModalComponent } from './components';

import { SignInComponent } from './modals';

import { HttpService, ModalService } from './services';

import { AppStore } from './store/app.store';

@NgModule({
  declarations: [ModalComponent, SignInComponent],
  entryComponents: [SignInComponent],
  imports: [BrowserAnimationsModule, HttpClientModule, SharedModule],
  exports: [BrowserAnimationsModule, HttpClientModule],
  providers: [HttpService, ModalService, AppStore]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
