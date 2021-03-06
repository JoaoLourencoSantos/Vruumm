import { NgxImageCompressService } from 'ngx-image-compress';
import { CompressService } from './../../../../../../shared/services/compress.service';
import { CarService } from './../../../services/car.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarDTO } from 'src/app/shared/models/dto/cart.dto';

import { ToastService } from './../../../../../../shared/services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditCarComponent implements OnInit {
  public carEntity: CarDTO = new CarDTO();
  public isUpdate: boolean = false;

  public showImage: boolean = true;

  constructor(
    private toast: ToastService,
    private service: CarService,
    public dialogRef: MatDialogRef<EditCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarDTO,
    private compressService: CompressService
  ) {
    if (data) {
      this.carEntity = { ...data };
      this.isUpdate = true;

      this.showImage = this.carEntity.imagem ? true : false;
    }
  }

  ngOnInit(): void {}

  public save(): void {
    if (!CarDTO.isValid(this.carEntity)) {
      this.toast.baseWarnAlertWithMessage('Preencha os campos obrigatórios!!');

      return;
    }

    if (!CarDTO.isNumberSeatsValid(this.carEntity)) {
      this.toast.baseWarnAlertWithMessage(
        'A quantidade de assentos deve ser menor que 12!'
      );
      return;
    }

    if (this.isUpdate) {
      this.update();
      return;
    }

    this.create();
  }

  create() {
    this.service.create(this.carEntity).subscribe((result) => {
      if (!result) return;

      if (result.sucesso) {
        this.toast.successAlert();
        this.dialogRef.close({ reload: true });
      } else {
        this.toast.baseWarnAlertWithMessage(result.mensagem);
      }
    });
  }

  update() {
    this.service.update(this.carEntity).subscribe((result) => {
      if (!result) return;

      if (result.sucesso) {
        this.toast.successAlert();
        this.dialogRef.close({ reload: true });
      } else {
        this.toast.baseWarnAlertWithMessage(result.mensagem);
      }
    });
  }

  public getImage(image?: string): string {
    return image || '../../../../../../../assets/images/default-car.png';
  }

  public changeAvailability(event: any): void {
    console.log(event);
  }

  public compressFile() {
    this.compressService.compressFile().subscribe((result) => {
      if (result) {
        this.carEntity.imagem = result;
      }
    });
  }

  public changeShowImage(toggle: boolean) {
    this.showImage = toggle;
  }
}
