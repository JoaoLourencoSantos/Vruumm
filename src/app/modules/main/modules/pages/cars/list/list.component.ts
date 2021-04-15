import { CarDTO } from 'src/app/shared/models/dto/cart.dto';
import { EditCarComponent } from './../edit/edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListCarComponent implements OnInit {
  cars: CarDTO[] = [
    new CarDTO('Gol 1.0 MPI (Flex)', 'Volkswagen', null, false),
    new CarDTO(
      'Gol 1.0 MPI (Flex)',
      'Volkswagen',
      'https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/11/novo-onix-premier-20.jpg',
      true
    ),
    new CarDTO('Gol 1.0 MPI (Flex)', 'Volkswagen', null, true),
    new CarDTO('Gol 1.0 MPI (Flex)', 'Volkswagen', null, false),
    new CarDTO(
      'Gol 1.0 MPI (Flex)',
      'Volkswagen',
      'https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/11/novo-onix-premier-20.jpg',
      true
    ),
    new CarDTO('Gol 1.0 MPI (Flex)', 'Volkswagen', null, true),
    new CarDTO('Gol 1.0 MPI (Flex)', 'Volkswagen', null, false),
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public getImage(image: string): string {
    return image || '../../../../../../../assets/images/default-car.png';
  }

  public createCar(): void {
    this.dialog.open(EditCarComponent);
  }

  public editCar(car: CarDTO): void {
    console.log(car);
    this.dialog.open(EditCarComponent, {
      data: car,
    });
  }

  public deleteCar(car: CarDTO): void {
    console.log(car);
  }
}
