import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  WeatherData: any;
  constructor() { }

  ngOnInit():void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }


getWeatherData(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=rajahmundry&appid=ebd561c5bf6201fcac8864860d7630e1')
  .then(response=>response.json())
  .then(data=>{this.setWeatherData(data);})
}
setWeatherData(data: any)
{
this.WeatherData = data;
let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
let currentDate = new Date();
this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
}
}

const routes: Routes = [
  {path:'**',component:HomeComponent},
  {path:'slider',component:SliderComponent},
 
  ];