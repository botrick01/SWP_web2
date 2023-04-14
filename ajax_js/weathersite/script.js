function loadWeather() {
  var city = document.getElementById("input").value;

  fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
    method: "GET",
    headers: {
      "X-Api-Key": "vLfdi88FGGJ72BV60gGk7A==rWnyvHNHqxrgjL1Y",
    },
  })
    .then((response) => response.json())
    .then(function (data) {
      if (!data.error) {
        let html = "<div class='city'> <div class='name'>" + city + "</div>";

        let temp = "<div>" + data.temp + "°C </div> </div>";
        if (data.temp > 20) {
          html += "<div> <img class='temp' src='img/hot.png'>" + temp;
        } else {
          html += "<div> <img class='temp' src='img/cold.png'>" + temp;
        }

        let clouds = "<div>" + data.cloud_pct + "% </div> </div>";
        if (data.cloud_pct > 80) {
          html += "<div> <img class='square' src='img/clouds.png'>" + clouds;
        } else if (data.cloud_pct > 50) {
          html += "<div> <img class='square' src='img/cloud.png'>" + clouds;
        } else if (data.cloud_pct > 20) {
          html += "<div> <img class='square' src='img/suncloud.png'>" + clouds;
        } else {
          html += "<div> <img class='square' src='img/sun.png'>" + clouds;
        }

        let humidity = "<div>" + data.humidity + "% </div> </div>";
        html +=
          "<div> <img class='square' src='img/humidity.png'>" +
          humidity +
          "</div>";

        document.getElementById("content").innerHTML += html;
        console.log(data);
      }
      else {
        throw new Error(data.error);
      }
    })
    .catch(function (error) {
      if (error != undefined) {
        document.getElementById("content").innerHTML += "<div>" + city + ": " + error + "</div>";
      }
    });
}
