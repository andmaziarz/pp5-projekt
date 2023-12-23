function weather_data(){    
    const apiKey = "RMFD55BTFJSM7A5T6S84MMUPJ";
    const location = ["Kraków", "Warszawa", "Nowy York"];
    location.forEach(city =>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=RMFD55BTFJSM7A5T6S84MMUPJ&contentType=json", {
        "method": "GET",
        "headers": {
        }
        })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
})
}