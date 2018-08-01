/*
Write a converter function that accepts a temperature in Fahrenheit and returns the temperature in Celsius.

For your reference, here is the equation for converting Fahrenheit to Celsius: T(°C) = (T(°F) - 32) × 5/9

Examples

1.

INPUT: converter(77);
OUTPUT: 25
*/
function converter(a){
 var temperature = (a -32) * 5/9;
 return temperature;
}