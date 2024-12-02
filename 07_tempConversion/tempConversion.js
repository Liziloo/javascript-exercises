const convertToCelsius = function(tempF) {
  const tempC = ((tempF - 32) * (5/9)).toFixed(1);
  return parseFloat(tempC);
};

const convertToFahrenheit = function(tempC) {
  const tempF = (tempC * (9 / 5) + 32).toFixed(1);
  return parseFloat(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
