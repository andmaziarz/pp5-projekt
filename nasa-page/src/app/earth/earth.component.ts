import { Component } from '@angular/core';

declare function weather_data(): any;
@Component({
  selector: 'app-earth',
  standalone: true,
  imports: [],
  templateUrl: './earth.component.html',
  styleUrl: './earth.component.scss'
})
export class EarthComponent {
  public date!: string;
  public tem!: string;
  public maxtem!: string;
  public mintem!: string;
  public humidity!: string;
  public windSpeed!: string;
  constructor(){
    document.body.style.backgroundImage = "url('assets/earth.jpeg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  weather_data(e: any){
    
    let choosen_city = e.target.value;
    console.log(choosen_city);
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${choosen_city}?unitGroup=metric&include=days&key=RMFD55BTFJSM7A5T6S84MMUPJ&contentType=json`, {
      "method": "GET",
      "headers": {
      }   
    })
    .then(response => response.json()) 
    .then(data => {
      this.date = data.days[0].datetime;
      this.tem = data.days[0].temp;
      this.maxtem = data.days[0].tempmax;
      this.mintem = data.days[0].tempmin;
      this.humidity = data.days[0].humidity;
      this.windSpeed = data.days[0].windspeed;
      console.log(choosen_city)
    })
}
}

  