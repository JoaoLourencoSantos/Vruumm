import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _toast: ToastrService) {}

  errorAlert() {
    this.openSnackBar('Opss... erro ao executar esta ação!', 'snack-error');


    this.show(
      `Erro ao executar esta ação!`,
      'WARNING',
      'Opss...'
    );
  }

  errorAuth(motivo: string) {
    this.show(
      `${motivo}`,
      'WARNING',
      'Opss...'
    );
  }

  baseWarnAlertWithMessage(motivo: string) {
    this.show(
      `${motivo}`,
      'WARNING',
      'Opss...'
    );
  }

  errorAlertWithMessage(motivo: string) {
    this.show(
      `Houve algum erro: ${motivo}`,
      'ERROR',
      'Opss...'
    );
  }

  infoErroAlert() {
    this.show(
      'Preencha corretamente as informações!',
      'ERROR',
      'Opss...'
    );
  }

  successAlert() {
    this.openSnackBar('A operação foi executada com sucesso!', 'snack-success');

    this.show(
      'A operação foi concluida!',
      'SUCCESS',
      'Sucesso!!!'
    );
  }

  show(message: string, type: string | 'SUCCESS', title?: string): void {
    if (type === 'SUCCESS') {
      this._toast.success(message, title);

      return;
    }

    if (type === 'WARNING') {
      this._toast.warning(message, title);

      return;
    }

    this._toast.error(message, title);
  }

  openSnackBar(message: string, style: string) {
    // this._toast.open(message, '', {
    //   duration: 3000,
    //   horizontalPosition: 'end',
    //   verticalPosition: 'top',
    //   panelClass: style,
    // });
  }
}
