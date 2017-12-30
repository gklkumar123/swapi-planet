import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) { }

  getPlanets(){
    return this.http.get('https://swapi.co/api/planets');
  }
}
