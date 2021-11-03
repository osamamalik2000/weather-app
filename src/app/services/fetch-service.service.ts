import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchServiceService {
  constructor(private http: HttpClient) {}

  APIkey = '972dd6236d62fcedef347feb8d9e9b5d';
  // Metric unit system
  getLocation(lat: any, lon: any): Observable<Object> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${this.APIkey}`
    )
  }
}
