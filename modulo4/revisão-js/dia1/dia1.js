const convertDegrees = (celsius, scale) => {
  if (scale === "F") {
    let farenheit = (celsius * 9) / 5 + 32;
    return `${celsius}ºC equivale a ${farenheit}ºF`;

  } else if (scale === "K") {
    let kelvin = celsius + 273.15;
    return `${celsius}ºC equivale a ${kelvin} K`;

  } else if (isNaN(celsius) === true) {
    return `Erro. Parâmetro Inválido (${celsius})!`;
    
  } else {
    return `Erro. Parâmetro Inválido (${scale}))!`;
  }
};

console.log(convertDegrees(30, "F"));
console.log(convertDegrees(30, "K"));

console.log(convertDegrees("trinta", "E"));
console.log(convertDegrees(30, "G"));
console.log(convertDegrees(30, "k"));
