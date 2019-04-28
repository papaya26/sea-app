import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { AngularMaterialModule } from './angular-material.module';

import { PageContainerComponent } from './components';

@NgModule({
  declarations: [PageContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
    AngularMaterialModule,

    PageContainerComponent
  ],
  providers: []
})
export class SharedModule {}
