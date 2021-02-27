# FUNDAMENTOS DE JAVASCRIPT

## INTRODUCCION

[Diapositivas](https://static.platzi.com/media/public/uploads/fundamentos-de-javascript_b2d669af-7b0e-4098-9a0d-31269bcf0099.pdf "Diapositivas")
[Js for cats](http://jsforcats.com/ "Js for cats")
[Repositorios](https://github.com/platzi/FundamentosJSCurso "Repositorios")

## VARIABLES

var = Una varible global
const = Una varible en la cual no se puede cambiar su contenido
let = Varible que permite declarar variables limitando su alcance

## VARIABLES: STRINGS

**str.toUpperCase()** - Cambia el string a mayúsculas
**str.toLowerCase()** - Cambia el string a minúsculas
**str.charAt()** - Trae el carácter en la posición en, requiere el parámetro de la posición del carácter al que queremos acceder.

El 1er caracter de todo string se encuentra en la posición 0. str.charAt(0) .

**str.length** - Se llama al atributo length, que entrega la cantidad de letras que contiene un string.
Interpolación de variables :
Se realiza con las comillas invertidas “``”:

${var1} ${var2}

Dentro de las llaves se puede escribir código js.

${str.toUpperCase()}

**str.substr(posicion, número de caracteres a traer)** - trae una subcadena, la cual es cortada dependiendo del 1er parámetro que es desde donde queremos que empiece y del 2ndo parámetro que es cuántos caracteres queremos que traiga la subcadena.

<br>

[========]


## VARIABLES: NÚMEROS

Tipo números y las operaciones más comunes en este tipo de variables.

En esta clase veremos operadores matemáticos como:

suma ( + )
resta ( - )
multiplicación
división

Operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso. Ej. var total = ( precioDeVino * 100 * 3) / 100

Para redondear una operación se utiliza la función: Math.round


<br>

[========]

## FUNCIONES

Las funciones son pedazos de codigo reutilizables 

 Para declarar una funcion se emplea la palabra reservada function
     
     function nombreFuncion (parametros){
     cuerpo de la funcion, cod reutilizable
      }
  



<br>

[========]

## ALCANCE DE LAS FUNCIONES

   Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.

<br>

[========]

## OBJETOS

Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.

<br>

[========]

## DESESTRUCTURAR OBJETOS

Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona
<br>

[========]

## PARÁMETROS COMO REFERENCIA O COMO VALOR

A los tres puntos “…” se llama operador de propagación ([Spread operator](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/Reference/Operators/Spread_syntax "Spread operator")), es una nueva implementación en ES6. Básicamente lo que hace es crear un duplicado de nuestro objeto para luego modificarlo según lo que necesitemos.

<br>

[========]

## COMPARACIONES EN JAVASCRIPT

Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

1. Boolean
2. Null
3. Undefined
4. Number
5. String

<br>

[========]