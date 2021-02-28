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

<br>

[========]

## INTRODUCION A LOS ARRAYS

Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc


<br>

[========]

## FILTRAR UN ARRAY

Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Reto: escribe el filtrado de personas bajas.

<br>

[========]

## TRANSFORMAR UN ARRAY

El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.


En esta clase vamos a profundizar acerca de la función map, la función “map” a diferencia de filter lo que va a hacer devolvernos un nuevo array en el cual va a modificar cada uno de los elementos que le vayamos pasando del array original, con ello vamos a pasar la altura de las personas como están de metros a centímetros.
Y lo haremos de la siguiente manera:



    const pasarAlturaACms = persona => {
        persona.altura *= 100
        return persona
    }
    
    var personasCms = personas.map(pasarAlturaACms)

`console.log(personasCms)`


Al hacer esto map nos pasara la altura de las personas convertida a centímetros, pero. que pasa con el array personas? La respuesta es que también cambia, si lo revisas en la consola del navegador, veras que está en centímetros y esto es un inconveniente, por lo que;



    const pasarAlturaACms = persona => {
        return {
            ...persona,
            altura: persona.altura * 100
    
        }
    }

Al hacer esto, le estamos diciendo que queremos pasar la altura a centímetros sin modificar el array original, sino que nos retorne un array nuevo, con la altura modificada, puesto que estamos desglosando la persona y pisamos el valor de su altura abajo.

Por lo que, al crear este array nuevo, el mismo estará en otro espacio de la memoria RAM, a parte del original por lo que al hacer el cambio, como vimos en clases pasadas, no cambia los tributos del array original.
Podemos comparar, en la consola:

`Personas[0] === personasCms [0]`

Nos dira false porque son datos en espacios de memoria RAM distintos, por lo que si cambiamos la clave de uno no cambia la clave del otro, ejemplo;

Cambiemos en la consola el nombre de angel a pablo con;

`Personas[0].nombre = ‘pablo’`

Al escribir “personas[0]” nos mostrara que el nombre del primer objeto ha cambiado, por el mismo principio antes explicado.
Ahora otra cosa a tener en cuenta es que existe una forma de hacer que el arrow function retorne el array, escribiéndolo con otra nomenclatura;



    const pasarAlturaACms = persona => ({
        ...persona,
        altura:persona.altura * 100
    })

Si lo escribimos de esta manera, iniciando el paréntesis luego del arrow, encerramos la funcion entre llaves, haremos que el arrow function nos retorne el array automáticamente y queda mas prolijo de esta manera

<img src="https://static.platzi.com/media/user_upload/ARRAYS%20CHEATSHEET-860a3133-741f-43fe-a5aa-44fd88fa2828.jpg" alt="cheatsheet">

<br>

[========]



## REDUCIR UN ARRAY A UN VALOR


<br>

[========]

## COMO FUNCIONAN LAS CLASES EN JAVASCRIPT

Las clases son funciones cuya sintaxis tiene dos componentes:

- expresiones
- declaraciones

Dentro de una función, el valor de this depende de cómo es llamada ésta.

Hablar de objetos en javascript es hablar de prototipos.
- this hace referencia al nuevo objeto que se acaba de crear.
- la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
- La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

En JavaScript hablar de objetos es más bien referirse a Prototipos y no tanto a clases. Si bien en las nuevas versiones de JavaScript existen las clases no son clases como tales, como las pordríamos conocer en cualquier otro lenguaje de programación; no existe la herencia como tal.
Pero sí existen los Prototipos y vamos a ver que esas llamadas clases terminan siendo Prototipos.

Qué son los prototipos:

…“comenzaremos diciendo que (en JavaScript) todos los objetos dependen de un prototipo y que los prototipos son objetos, es más cualquier objeto puede ser un prototipo”…
…"un prototipo es un objeto del que otros objetos heredan propiedades. Los objetos siempre heredan propiedades de algún objeto anterior, de este modo solo el objeto original y primigenio de javascript es el único que no hereda de nadie…

Objetos => Prototipos

Crear un prototipo es muy similar a crear una variable:

• se antepone el keyword function;
• la primer letra del nombre va en mayúscula;
• para invocar un nuevo objeto a partir de este prototipo se usa el keyword ‘new’.


	function Persona(){
		console.log('Hola, soy un nuevo objeto.')	
	}
	var pablo = new Persona()

• se le pueden pasar parámetros;
• para generar nuevos parámetros o atributos dentro de la declaración del objeto se usa el keyword ‘this’
• es implícito en javaScript el retornar el objeto que se está creando


	function Persona(nombre, apellido){
		this.nombre = nombre
		this.apellido = apellido
	}
	var pablo = new Persona('Pablo', 'Andrés')

Es posible anexar funciones al prototipo usando el apéndice .prototype precedido de el nombre que le asignamos a nuestro nuevo prototipo y sucedido del nombre de nuestra nueva función encadenados. Luego este se iguala a una función anónima.

Se pueden usar los mismos atributos que en el objeto (this.xxx)


	function Persona(nombre, apellido){
		this.nombre = nombre
		this.apellido = apellido
	}

	Persona.prototype.saludar = function(){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
	}

	var pablo = new Persona('Pablo', 'Andrés')
	var joaquin = new Persona('Joaquín', 'Perez')
	var rosa = new Persona('Rosa', 'Mosqueta')

	rosa.saludar()
	// Hola me llamo Rosa Mosqueta


<br>

[========]

## MODIFICANDO UN PROTOTIPO

El prototipo es un objeto más de JS , a partir de que lo modifiquemos, éste va a quedar modificado.

Es de mucha importancia donde colocamos las funciones que va a tener el prototipo . Estos se deben de colocar juntos, ya que con ellos se va creando el prototipo del objeto, y deseamos que tenga juntas todas sus funciones.

Por ello definimos los prototipos arriba, y los utilizamos a lo largo del código.

NOTA: Cuando tenemos un error en JS, éste no se sigue ejecutando, se corta ahí la ejecución del código

JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.


Prototipo: Sistema de Herencia

El prototipo es un objeto más de javascript, si lo modificamos en un cierto lugar del código, a partir de ahí va a quedar modificado.

Por lo que una buena práctica, o más bien la manera de declarar un prototipo es al inicio del código y en bloque, es decir todo el código junto (propiedades y funciones del prototipo).

De otra manera, si queremos correr una función antes de declararla JS arrojará un error y quedará interrumpido el flujo de ejecución.

<br>

[========]


## EL CONTEXTO DE LAS FUNCIONES: QUIÉN ES THIS

En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en JavaScript es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

Window es el objeto global dentro del navegador.

Cuando this no es lo que esperamos, este es el principal error en JS.

En las Arrow functions, se asigna la función , pero cambia el this dentro de la función , ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.

Para comprobarlo en consola:

`this === window`

[Cuando no usar arrow functions](https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/ "Cuando no usar arrow functions")



<br>

[========]

## LA VERDAD OCULTA SOBRE LAS CLASES EN JAVASCRIPT


Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

<br>

[========]

## CLASES EN JAVASCRIPT

Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

<br>

[========]