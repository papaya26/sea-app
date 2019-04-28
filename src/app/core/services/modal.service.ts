import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class ModalService {
  public afterClose: Observable<any>;

  private modalRef: MatDialogRef<any>;

  constructor(private modal: MatDialog) {}

  public open(component, data = {}, options: MatDialogConfig = {}) {
    this.modalRef = this.modal.open(component, {
      data,
      ...options
    });

    this.afterClose = this.modalRef.afterClosed();
  }

  public close() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
