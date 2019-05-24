import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarDataService } from './../car-data.service';
import { ICar } from './../car';
import { ILogo } from '../logo';


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
public currentLogo: ILogo;

  ngOnInit() {
    this.carLoading=true;
    let id = this.route.snapshot.paramMap.get('id');
    this.idCar = id;

    this._carService.getCar(this.idCar).subscribe(data => {
     
      this.currentCar = data;
      this._carService.getLogoByName(data.Marque.toUpperCase()).subscribe(data2 => this.currentLogo = data2);
      this.carLoading = false;
    });

    

  }

}
