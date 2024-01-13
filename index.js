let input = document.querySelector("#location");
let btn = document.querySelector("#search");

// const iconObj = {
//   Clear: "Clear Day",
//   Rain: "Rainy",
//   Clouds: "Cloud",
// }

async function weatherDetails(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=27777817e6432c42039240e24aa98ce6&units=metric`
  );

  const data = await response.json();
  console.log(data);

  document.querySelector("#temp").innerHTML = data.main.temp + "&deg; C";
  document.querySelector("#humidity").innerHTML = data.main.humidity + " gm/m<sup>3</sup>";
  document.querySelector("#wind").innerHTML = data.wind.speed + " km/hr";
  // document.querySelector("#weatherIcon").innerHTML = " " + iconObj[data.weather[0].main] + " ";
  document.querySelector("#weather").innerHTML = data.weather[0].main;
}

btn.addEventListener("click", () => {
  weatherDetails(input.value);
})