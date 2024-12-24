const convertToCelsius = function(fahrenheit) {
  let clesius = (fahrenheit - 32) * 5/9;
  return Number((clesius).toFixed(1));
};  

const convertToFahrenheit = function(clesius) {
  let fahrenheit = ((clesius*9) / 5) + 32;
  return Number((fahrenheit).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
