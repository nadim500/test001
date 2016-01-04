var caught=5*5;
console.log(caught);
var ten = 10;
console.log(ten*ten);
//las variables pueden cambiar a otro valor apuntado
var mood="ligth";
console.log(mood);
mood="dark";
console.log(mood);
//ingresando multiples variables en una linea
var one=1,two=2;
console.log(one+two);
var x=30;
console.log("El valor de x es "+x);
//valores retornados
console.log(Math.max(2,4));
console.log(Math.min(2,4)+100);

//loop while
var number=0;
while(number<=12){
	console.log(number);
	number+=2;
}
var result=1;
var cont=1;
while(cont<=10){
	result*=2;
	cont+=1;
}
console.log(result);

var cont = 1;
var cod = "#"
while(cont<=7){
	console.log(cod);
	cod+="#";
	cont++;
}
var tree="Fizz";
var five="Buzz";
var fifteen="FizzBuzz";
for(var i=1;i<=100;i++){
	if(i%15==0) console.log(fifteen);
	else if(i%5==0) console.log(five);
	else if(i%3==0) console.log(tree);
	else console.log(i);
}
