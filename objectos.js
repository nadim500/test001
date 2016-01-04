//forma de crear objetos
/*var Persona = {
	nombre: ,
	saludo: function(){
		console.log("hola " + this.nombre);
	},
	primos: ["Maria", "Antonio"]
};
Persona.saludo();
*/
//otra forma de crear objeto
function Persona (nombre){
	this.nombre = nombre;

	this.saludo = function(){
		console.log("hola " + this.nombre);
	}
};

var jose = new Persona("jose");
jose.saludo();


