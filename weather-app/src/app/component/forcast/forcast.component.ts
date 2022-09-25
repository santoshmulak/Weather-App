import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent implements OnInit {
  temp: any;
  weatherData: any;
  description: any;
  city :any;
  snowfall: any;
  windSpeed: any;

  constructor(private getapiService: GetapiService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }
  
   getWeatherData(){
    this.getapiService.getWeatherApi().subscribe((data)=>{
      this.weatherData = data;
      console.log('add..',data);
      this.temp = this.weatherData.data[10].temp
     this.description = this.weatherData.data[10].weather.description
     this.snowfall = this.weatherData.data[10].snow
    this.windSpeed = this.weatherData.data[10].wind_gust_spd
     this.city = this.weatherData.city_name

})
  //   this.getapiService.getWeatherDataDynamic().subscribe(data=>{
  //     console.log('dyanamic..',data);
  //  this.temp = this.weatherData.data[12].wind_gust_spd
  //   })
  }

  
  // this.weatherData = data;
  //               console.log('data--->>>>>', this.weatherData.data[12].wind_gust_spd);
  //               console.log('city name', this.weatherData.city_name);
  //               console.log('w description',this.weatherData.data[12].weather.description);
    
}
