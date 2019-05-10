import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  
  public cars = [];

  constructor(private _carService: CarDataService) { }

  ngOnInit() {
    this._carService.getCars()
    .subscribe(data => this.cars = data);
  }

}
