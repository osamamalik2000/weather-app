import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchServiceService {
  constructor(private http: HttpClient) {}
  getlocation() {
    console.log(navigator.geolocation.getCurrentPosition(success, error));
    let lat, long;
    function success(position: any) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      lat = position.coords.latitude;
      long = position.coords.longitude;
    }
    if (navigator.geolocation) {
      this.getCity(lat, long);
    }
    function error(err: any) {
      console.log(err);
    }
  }
  getCity(lat: any, long: any) {
    let city = this.http.get(
      `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=972dd6236d62fcedef347feb8d9e9b5d`
    );
    console.log('city: ', city);
  }
}
