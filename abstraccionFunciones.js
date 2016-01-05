//ejemplo:
function forEach(array,action){
	for(var i=0;i<array.length;i++)
		action(array[i]);
}
forEach(["Hola","como","estas"],console.log);
//la funcion tmb se puede crear en los parametros
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {sum += number;});
console.log(sum);
//Notacion JSON
//JSON.stringify:convierte una notacion en js a JSON
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
//JSON.parse: toma la notacion JSON, y busca su valor de la llave
console.log(JSON.parse(string).born);
// → 1980
//ejemplo mas hard:
/*function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
//otra forma de la primera parte del filter
console.log(ancestry.filter(function(person) {
  return person.born>1900 && person.born<1925;
}));*/
//formas de crear objetosy llamar a sus metodos:
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'
//EJEMPLO:
var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
};
//creacion de un objeto
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
//Ejemplo: Creacion de objeto con un constructor
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black
//se puede agregar un metodo en el prototipo con el comando prototype
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small