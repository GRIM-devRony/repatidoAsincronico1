// 1) Actividad 1 Metodos de String
/*
let a = '';
let result = a.trim();

 function recibeString () {

        if (a == ' '){
        console.log('Campo vacio');
        }else{
            console.log(a);
        }
        
    }

*/

/*
// 2) Actividad 1 Metodos de String
function recibeString () {

    let cadena = 'abcde';
    let array = cadena.split('');
    console.log(array);

}

recibeString();
*/

// 3) Actividad 1 Metodos de String
/*
$(() => {
    
      let texto = 'Hola como estas aaa';
      let letra = 'a';
  
      console.log(contarCaracteres(texto, letra))
    });
  
  function contarCaracteres(texto, letra) {
      let posicion = 0; 
      let contador = 0;
      
      posicion = texto.indexOf(letra);
      while (posicion != -1) { 
          contador++;               
          posicion = texto.indexOf(letra, posicion + 1);
      }
      return contador;
  }
  */



// 1) Actividad 2, Valores de Referencia

/*
let persona = [
    [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
    }],

    [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
      }]

];


console.log(persona);

persona[0].Nombre = 'Rony';
*/

// 2) Actividad 2, Valores de Referencia

/*
let persona = [
    [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
    }],

    [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
      }],

      [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
    }],

    [{
        "Nombre": "Juan",
        "Apellido": "Gonzales",
        "CI": "12345678",
        
      }]

];


console.log(persona);

persona[2].Nombre = 'Rony';

*/

//3) Los tipos primitivos se comparan por valor mientras que los objetos se comparan por referencia.


//Actividad 3 - Utilizando métodos del array.

let peliculas = [

    {
    'titulo': 'Harry Potter',
     'id': 01, 
     'duracion':'120'
},
{
    'titulo': 'Piratas del Caribe',
     'id': 02, 
     'duracion':'130'
},
{
    'titulo': 'Hitman',
     'id': 03, 
     'duracion':'140'
},
{
    'titulo': 'Rambo',
     'id': 04, 
     'duracion':'150'
},
{
    'titulo': 'Cenicienta',
     'id': 05, 
     'duracion':'170'
},
{
    'titulo': 'Crepusculo',
     'id': 06, 
     'duracion':'110'
}

]

//1) FIND

/*
const peli = peliculas.find(element => element.id==05);
  console.log(peli); 
*/

//2) FILTER

/*
const peli = peliculas.filter(element => element.duracion < '120');
console.log(peli); 
*/


//3)MAP
/*
const pelis = peliculas.map(elements=> {
    return{
     titulo: elements.titulo,

    }
})
console.log(pelis);
*/


//Actividad 4 - Iteraciones 1)

/*
let texto = 'hola que tal como estas';
  
console.log(`vocales: ${contarVocales(texto)}`);


function contarVocales(texto) {
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
  if (vocales.indexOf(texto[i]) >= 0) {
    contadorVocales++;
  }
}
return contadorVocales;
}
*/


//Actividad 5 - DOM



/*
<div id=”padre”>
	<p>...</p>
	<p>...</p>
	<img src=”https://ihdemu.com/images/blog/que-es-lorem-ipsum.jpg” alt=”lorem ipsum”>
</div>
*/

/*
let objPadre = $('#padre p');

//2) 

let imagen = $('img');

//2.1) Creo que si es posible resorverlo con desestructuracion

//3)

let objPadreChild = $('#padre p:nth-child(2)');

//4) DOM MODIFICADO

/*
<div id=”padre”>
	<p>...</p>
	<p>...</p>
	<img src=”https://ihdemu.com/images/blog/que-es-lorem-ipsum.jpg” alt=”lorem ipsum”>

    <p id="resultado"></p>
</div>

  $("#resultado").html(objPadreChild);

*/



