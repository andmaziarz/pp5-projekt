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
  constructor(){
    document.body.style.backgroundImage = "url('assets/earth.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }
  weather_data(){
   
    const apiKey = "RMFD55BTFJSM7A5T6S84MMUPJ";
    const location = ["kraków", "warszawa", "nowy jork"];
    location.forEach(city =>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/warszawa?unitGroup=metric&include=days&key=RMFD55BTFJSM7A5T6S84MMUPJ&contentType=json", {
        "method": "GET",
        "headers": {
        }
        })
      .then(response => response.json())
      .then(data => {
        const tem = data.days[0].windspeed;
        const airq = data.days[1].windspeed;

        console.log(tem , airq)
  })
  .catch(error => console.error("Błąd"))
  })
}
}