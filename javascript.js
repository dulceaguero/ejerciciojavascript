 
 // ejercicio 1
var x = 5
var y = 10
console.log(x + y)

// ejercicio 2

function suma(num1, num2){
    return num1 + num2
}

suma = (100 + 200)

console.log (suma)

// ejercicio 3

function esPar(num) {
    if(num % 2 === 0) {
    return true; 
    }
    else {
    return false; 
    }
    }
    
 
    console.log(esPar(4)); 

  // ejercicio 4

  var textoLargo = ("Hola mi nombre es Dulce.")

  textoLargo.length

  console.log(textoLargo.length)

  //ejercicio 5


  // Ejercicio 6

function sumaVarios(){
    let numero = 0
    for (let index = 1; index < 100; index++) {
        numero += index;
    }
    return numero;
        
    }

    console.log(sumaVarios());

//ejercicio 7

var array = [3, 5, 9, 5]
array.forEach (mostrar => {
    console.log(array)
})

//ejercicio 8

var palabras = ["Libro" + "taza" + "taller" + "sorteo"];


console.log(palabras.length)

//ejercicio 9

var numeroAlto = [1, 4, 6, 9];
console.log(Math.max(...numeroAlto));
//en la respuesta de math.max

// ejercicio 10
var numeros = [3, 6, 10]

function esPar(numero) {
    if(numero % 2 === 0) {
    return true; 
    }
}
