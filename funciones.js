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
*/
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