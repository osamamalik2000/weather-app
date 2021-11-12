import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../../services/fetch-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // This section is for handeling dates, days
  days: any[] = [];
  date = new Date(1970, 0, 1);
  today: any;
  todayDate:any;
  // End of date sections
  // For hadeling response
  data: any;
  forecast: any[] = [];
  private iconPath = "../../../assets/images/icons/";
  constructor(private ser: FetchServiceService) {}
  ngOnInit() {
    // this.getImage(5000);
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.ser
            .getLocation(pos.coords.latitude, pos.coords.longitude)
            .subscribe((res) => {
              this.data = res;
              this.forecast = this.data.daily.slice(0,6);
              this.getTodayDate();
              console.log(this.data);
            });
        },
        (err) => {
          console.log(`Can not get user location: ${err} ${err.code}`);
        }
      );  
    }
  }
  // Handeling today and upcoming dates
  getTodayDate(){
    this.date.setSeconds(this.data.current.dt);
    this.today = this.date.getDay();
    switch(this.today){
      case 0 :{
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        break;
      }
      case 1:{
        this.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        break;
      }
      case 2 :{
        this.days = ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday'];
        break;
      }
      case 3:{
        this.days = ['Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday',];
        break;
      }
      case 4 :{
        this.days = ['Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday'];
        break;
      }
      case 5:{
        this.days = ['Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday'];
        break;
      }
      case 6:{
        this.days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
        break;
      }
      default:{
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        break;
      }
    }
    this.todayDate = `${this.date.getDate()} ${this.date.toLocaleString('default', {month: 'long',})}`;
  }
  // Selecting images accroding to weather
  getImage(imgCode: any){
    let weatherCode = imgCode.toString();
    switch(weatherCode){
      case 'Thunderstorm':{
        // Thunderstorm
        return this.iconPath+'thunderstorm.svg';
      }
      case 'Drizzle':{
        // Drizzle
        return this.iconPath+'rain.svg';
      }
      case 'Rain':{
        // Rain
        return this.iconPath+'rainHeavy.svg';
      }
      case 'Snow':{
        // Snow
        return this.iconPath+'snow.svg';
      }
      case 'Clear':{
        // Clear
        return this.iconPath+'fullSun.svg';
      }
      case 'Clouds':{
        // Clouds
        return this.iconPath+'clouds.svg';
      }
      default:{
        // Atmosphere
        return this.iconPath+'cloud.svg';
      }
    }
  }
}
