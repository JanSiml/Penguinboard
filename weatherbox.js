window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");


  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      //Log in der Browser-Konsole:
      //console.log(position)
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/a49243e16acd2b8365860db572961395/${lat},${long}`;

      fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          //console.log(data);
          const {temperature, summary, icon}= data.currently;
          //Set DOM Elements from the API
          temperatureDegree.textContent = Math.round(((temperature-32)/1.8)*10)/10;
          temperatureDescription.textContent = summary;
          //Gibt Europe/Berlin zurück (anscheind API Abfrage sehr ungenau)
          //locationTimezone.textContent = data.timezone;
          // TODO: Andere API oder prüfen, ob API genauer geht
          locationTimezone.textContent = "Erlangen";
          //Set Iconn
          setIcons(icon, document.querySelector('.icon'));

        });
    });
  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon =icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
  }
});
