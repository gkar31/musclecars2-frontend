import { Component, OnInit } from '@angular/core';

import { CarDataService } from '../car-data.service';
import { ICar } from './../car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  
  public cars:ICar[] = [];

  displayedColumns: string[] = ['Picture', 'Name', 'Power', 'Couple', 'Perf'];

  dataSource:ICar[] = [];

  carsLoading = false;

  constructor(private router: Router,private _carService: CarDataService) { }

  ngOnInit() {
    this.carsLoading = true;
    this._carService.getCars()
    .subscribe(data => {
      this.carsLoading=false;
      this.dataSource = data
    });


  }

  displayCarsDetail(car){
    //console.log(car);
    
    this.router.navigate(['/carsList', car._id ]);
  }

}
