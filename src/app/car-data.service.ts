import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from './car';
import { ILogo } from './logo';
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  public logos: Observable<ILogo[]> = undefined;
  public currentLogo: Observable<ILogo> = undefined;
  private _url: string ='https://musclecars.herokuapp.com/carlist';
  private _localLogosUrl: string ="http://localhost:4000/logos";
  private _localLogoUrl: string ="http://localhost:4000/logo";
  

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]>{
    return this.http.get<ICar[]>(this._url);
  }

  getCar(idCar): Observable<ICar>{
    return this.http.get<ICar>(this._url+"/"+idCar);
  }

  getLogos(): Observable<ILogo[]>{
    this.logos= this.http.get<ILogo[]>(this._localLogosUrl);
    return this.logos;
  }

  getLogoByName(name: String):Observable<ILogo> {
    console.log("find logo for "+name);
    return this.http.get<ILogo>(this._localLogoUrl+'/'+name.toUpperCase());

  }
}
