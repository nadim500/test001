//ejemplo: creacion de objeto con sus atributos
var anObject = {left:1,rigth:2};
console.log(anObject.left);
//el operador delete borra cualquier atributo
delete anObject.left;
console.log(anObject.left);
//operador "in" permite ver si su atributo esta en el objeto, retorna un booleano
console.log("left" in anObject);
console.log("rigth" in anObject);
//otro ejmplo
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
//otro ejemplo2:
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081
console.log(map);
//metodos unshift y shisft, agregan y eliminan del principio del array,
//es como push and poop
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

//Ejemplo para ver en que consiste indexOf y lastIndexOf
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
//Ejemplo del metodo slice, donde el primer indice es inclusiva
//el segundo indice es exclusiva, te devuelve lo qu esta entre ellos
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
//Ejemplo con metodo concat
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
//Ejemplo de trim, elimina el cual
//remueve los espacios en blanco (spaces, newlines, tabs, and similar characters)
console.log("  okay \n ".trim());
// → okay

//Uso del operador arguments:
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");
// → You gave me 3 arguments.
//otro ejemplo:
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
//es de otra clase
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza","running", "television");