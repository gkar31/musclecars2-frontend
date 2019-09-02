import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';

import { CarDataService } from '../car-data.service';
import { ICar } from './../car';

const CAR_DATA: ICar[] = [
  { 
Couple_Nm: 0,
Cylindree: 0,
Cylindres: 0,
Image: "",
Indice_Perf: 0,
Marque: "Loading...",
Modele: "from Server",
Prix: "",
Puissance_ch: 0,
Serie: "",
VitesseMax_Kmh: 0,
acc_0_100: 0,
acc_0_200: 0,
acc_1000m_DA: 0,
acc_400m_DA: 0}
];

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  
  public cars:ICar[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['Image', 'Marque', 'Puissance_ch', 'Couple_Nm', 'Indice_Perf'];
  dataSource = new MatTableDataSource(CAR_DATA);



  carsLoading = false;

  constructor(private router: Router,private _carService: CarDataService) { }

  ngOnInit() {
    this.carsLoading = true;
    this._carService.getCars()
    .subscribe(data => {
      this.carsLoading=false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.carsLoading=false;
    },err => {
      console.error(err);
      this.dataSource = new MatTableDataSource(this._carService.getErrorDefaultCar());
      this.dataSource.sort = this.sort;
        this.carsLoading=false;
      });


  }

  displayCarsDetail(car){
    //console.log(car);
    
    this.router.navigate(['/carsList', car._id ]);
  }


  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = function(data, filter: string): boolean {

      return data.Marque.toLowerCase().includes(filter) || data.Modele.toLowerCase().includes(filter) || 
      data.Couple_Nm.toString().toLowerCase().includes(filter) || data.Puissance_ch.toString().includes(filter) || (data.Serie && data.Serie.toLowerCase().includes(filter));
  };
  }

}
