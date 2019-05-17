import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarDataService } from './../car-data.service';
import { ICar } from './../car';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public idCar;
  carLoading=false;

  constructor(private route: ActivatedRoute ,private _carService: CarDataService) { }

public currentCar: ICar;

  ngOnInit() {
    this.carLoading=true;
    let id = this.route.snapshot.paramMap.get('id');
    this.idCar = id;
    this._carService.getCar(this.idCar).subscribe(data => {
      this.carLoading = false;
      this.currentCar = data;
    });
  }

}
