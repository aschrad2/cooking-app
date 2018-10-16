var convert = function(gallon) {
  return gallon*3.875;
};

var gallon = parseInt(prompt("Enter a number of gallons:"));
var result = convert(gallon);
alert(result);