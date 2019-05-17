import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from './car';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  private _url: string ='https://musclecars.herokuapp.com/carlist';

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]>{
    return this.http.get<ICar[]>(this._url);
  }

  getCar(idCar): Observable<ICar>{
    return this.http.get<ICar>(this._url+"/"+idCar);
  }
}
