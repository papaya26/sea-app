import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SignInComponent } from '@app/core/modals';

import { ModalService } from '@app/core/services';

@Component({
  selector: 'app-external-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  constructor(private modalService: ModalService) {}

  public signIn() {
    this.modalService.open(
      SignInComponent,
      {},
      { panelClass: 'clear-modal-space-around' }
    );
  }
}
