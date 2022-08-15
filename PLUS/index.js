let weather = {};
console.log(weather);
weather = {
  temp: 19,
  humidity: 50,
};
console.log(weather);
console.log(weather.temp);
console.log(weather.humidity);

weather.windSpeed = 3;
console.log(weather.windSpeed);

console.log(weather["temp"]);
console.log(weather["humidity"]);
console.log(weather["windSpeed"]);

let forecost = [
  //створюємо масив з об'єктів(день тижня та температура)
  { day: "Friday", temp: 19 },
  { day: "Sunday", temp: 15 },
  { day: "Monday", temp: 20 },
  { day: "Tuesday", temp: 21 },
];
console.log(forecost);
console.log(forecost[0].temp);
console.log(`The temperature fo tomorrow will be ${forecost[0].temp}`);
