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

## CONDICIONALES

<img src= "https://static.platzi.com/media/user_upload/7-Condicionales-3cd48a8e-a00c-48f6-89d1-a7f539efe269.jpg" alt= "Condicionales">


<br>

[========]


## FUNCTION QUE RETORNAN VALORES

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.

<br>

[========]

## ARROW FUNCTIONS

 Arrow Functions permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves

JS permite asignar una función a una variable. Se llama función anónima. Y se puede escribir de varias maneras:

    const MAYORIA_DE_EDAD = 18
    
    var esMayorDeEdad =function (persona) {   	
    	return persona.edad >= MAYORIA_DE_EDAD
    }

Sacha prefiere declararla como ‘const’ y no como ‘var’ para definir que es una función y no una variable:

    const esMayorDeEdad =function (persona) {   	
    	return persona.edad >= MAYORIA_DE_EDAD
    }

La palabra clave ‘`function`’ puede reemplazarse por un ‘=>’ después de persona y se convierte en un arrow function:

    const esMayorDeEdad = (persona) => {   	
    	return persona.edad >= MAYORIA_DE_EDAD
    }

**Se pueden seguir quitando caracteres.**

Cuando hay un sólo parámetro se pueden quitar los paréntesis
Si una función sólo retorna un valor se puede quitar el keyword ‘`return`’ y las llaves {}

`const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD`

También se puede desestructurar el parámetro ya que sólo nos interesa la edad. Hay que agregar paréntesis:

`const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD`


<br>

[========]


## ESTRUCTURAS REPETITIVAS FOR

El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.

<br>

[========]

## ESTRUCTURAS REPETITIVAS: WHILE

La estructura while nos permite repetir un código, hasta que se cumpla una condición

Lo primera que vamos a hacer, será modificar nuestra estructura anterior de la siguiente manera

    var angel = {
        nombre: 'Angel',
        apellido: 'Sulbaran',
        edad: 23,
        peso: 70
    
    }
    
    var pepe = {
        nombre: 'Pepe',
        apellido: 'Trueno',
        edad: 13
    }
    
    console.log(`anualmente al inicio ${angel.nombre} pesa ${angel.peso}kg`)
    
    const INCREMENTO_DE_PESO = 0.3
    
    const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
    const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
    const comeMucho = () => Math.random < 0.3
    const realizaDeporte = () => Math.random < 0.4
    var dias = 0
    
    const META = angel.peso - 3
    
    while (angel.peso > META) {
        debugger
        if(comeMucho()) {
            aumentarDePeso(angel)
        }
        if(realizaDeporte()) {
            adelgazar(angel)
        }
        dias += 1
    }
    
    console.log(`pasaron ${dias} dias hasta que ${angel.nombre} adelgazo 3kg`)
Lo primero que hacemos aca es borrar la estructura repetitiva “for” y asignaremos while de la siguiente manera “while(){}” donde while será la condición para que el código termine de ejecutarse, por lo que mientras no llegue a la condición, no se terminara de ejecutar, siendo asi, las funciones que cumplirá para llegar a la condición, la colocaremos dentro de las llaves.

Nuestra meta aca es que angel rebaje kg, por lo que debemos crear la meta para que angel baje kg.

  ` const META = angel.peso - 3`

   vamos a crear las funciones aleatorias para que angel aumente o rebaje de peso, de manera que;

    
    const comeMucho = () => Math.random < 0.3
    const realizaDeporte = () => Math.random < 0.4
    asi que agregaremod esto a la estructura while de la siguiente manera
    
    while (angel.peso > META) {
        debugger
        if(comeMucho()) {
            aumentarDePeso(angel)
        }
        if(realizaDeporte()) {
            adelgazar(angel)
        }
    }

Donde colocaremos, dos condiciones que pueden pasar aleatoriamente, si come mucho o si realiza deporte, ahora para calcular los días que le tomara a angel llegar a la meta, crearemos una variable, “dias”, que debe ser agregada de la manera “var días = ” no podemos usar “const” debido a que es un valor sujeto a cambios por lo que si usamos const, nos dará error. Luego de creada la variable, la agregaremos de la siguiente manera

    while (angel.peso > META) {
        debugger
        if(comeMucho()) {
            aumentarDePeso(angel)
        }
        if(realizaDeporte()) {
            adelgazar(angel)
        }
        dias += 1
    }


Y por último agregaremos un cambio al último console.log;


`console.log(pasaron ${dias} dias hasta que ${angel.nombre} adelgazo 3kg)`

Ahora luego de hecho todo esto, veras que, no te va a funcionar, aca viene una parte muy importante de esta clase, que el debuggin. Usaremos “debugger”;

    while (angel.peso > META) {
        debugger
        if(comeMucho()) {
            aumentarDePeso(angel)
        }
        if(realizaDeporte()) {
            adelgazar(angel)
        }
        dias += 1
    }

Donde sea que queramos debuggear algo cuando estes probando cosas dentro del navegador, agregaras esto al código que quieres reparar/arreglar/hacer funcionar, como te apetezca decirle, el punto es que esto lo vas a usar en la consola, y te va a cancelar la ejecución del código cada vez que le agregues “debugger” a uno, ahora nos vamos a pestaña sources.

Revisar video de eestructuras while, para repasar en caso de que se olvide un detalle de como sirve esto, o ver un video en Youtube en su defecto.
Aca el bug es muy simple de ver, y es algo que probablemente se te olvido al momento de escribir las arrow functions, pero es algo muy básico que debemos siempre tener en cuenta

`const comeMucho = () => Math.random() < 0.3`
`const realizaDeporte = () => Math.random() < 0.4`


No puedes dejar colocar los paréntesis al crear la función, porque con esto es que llamas las funciones, al menos de este tipo, como lo es random.


<br>

[========]


## ESTRUCTURAS REPETITIVAS: DO-WHILE

A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.




<br>

[========]


## CONDICIONAL MULTIPLE: SWITCH

Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle.