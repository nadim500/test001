/*

//Declarar una funcion y la llamas despues
function saludos(){
	console.log("hola a todos");
}
saludos();
*/


//Declarar una funcion y la llamas ahora
/*
(function saludos(){
	console.log("hola a todos");
})();
*/

/*
var saludos = function (){
	console.log("hola a todos");
}
saludos();

//ejemplo:
var square = function(x){
	return x*x;
};
console.log(square(25));
//ejemplo:
var makeNoise = function(){
	console.log("Pling!");
};
makeNoise();
//ejemplo:
var power=function(base,exponent){
	var result=1;
	for(var count=0;count<exponent;count++){
		result *= base;
	}
	return result;
};
console.log(power(2,10));
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());

function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}
*/
function multiplier(factor){
	return function(number){
		return number*factor;
	}
}
var twice = multiplier(2);
console.log(twice);
console.log(twice(5));
//ejemplo:
function min(a,b){
	var minimo;
	if(a>b)
		minimo=b;
	else
		minimo=a;
	return minimo;
}
console.log(min(4,5));