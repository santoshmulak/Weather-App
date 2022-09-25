import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  lat=19.09;
  lon=72.87;
  hours=48;

  weatherUrl = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?lat=19.09&lon=72.87&hours=48'
  weatherUrlDynamic ='https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?'
  headerBody = {
    'X-RapidAPI-Key': '04c336eb96msh74505f5bc219783p1e48f0jsn82df14d88286',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
  getApiData: any;

  constructor(private http :HttpClient) { }
getWeatherApi(){
  return this.http.get(this.weatherUrl,{headers:this.headerBody})
}
getWeatherDataDynamic(){
  return this.http.get(this.weatherUrlDynamic+'lat='+this.lat+'&lon='+  this.lon+'&hours='+this.hours, {headers:this.headerBody});
}
}
