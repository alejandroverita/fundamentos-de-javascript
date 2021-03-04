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

## FUNCIONES COMO PARAMETROS

En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

Valores falsy (valores falsos) en Javascript:

- false
- 0
- null
- ""
- undefined
- NaN

Los demás son valores [Truthy](https://developer.mozilla.org/es/docs/Glossary/Truthy "Truthy") (valores verdaderos).

Es posible pasar funciones como parámetros como si fuera cualquier otro tipo de variable.

Cómo se declara?
Como cualquier función.

La siguiente función es una respuesta a la función saludar del código que traemos de las clases anteriores:



    function responderSaludo(){
    	console.log(`Buen día`)
    }

Cómo se implementa al prototipo?

Se agrega un parámetro a la función que la va a disparar dentro del prototipo (‘saludar(fn)’, en este caso) y un if que evalúe si es llamada.

	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
		if(fn){
			fn()
		}
	}

**Cómo se ejecuta?**

Se ejecuta invocando la función sin paréntesis dentro de los paréntesis de la función saludar ya que es una respuesta al saludo:

`sacha.saludar(responderSaludo)`

**Si quiero pasar parámetros?**

Los agrego al declarar la función y luego los agrego entre paréntesis a la invocación de la misma dentro de la función que la dispara en el prototipo. Funcionan implícitamente, es decir, no se agregan cuando invoco la función dentro del ‘saludar()’.

En la declaración:



    function responderSaludo(_nombre_, _apellido_, _esDev_){
    	console.log(`Buen día ${_nombre_} ${_apellido_}.`)
    	if (_esDev_) {
    		console.log(`Ah mirá, no sabía que eras dev.`)
    	}
    }

En la función nativa:

	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
		if(fn){
			fn(_this.nombre_, _this.apellido_)
		}
	}

Se invoca:

`sacha.saludar(responderSaludo)`

Para despejar la lectura del código y escribir menos:

	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
		if(fn){
			var {nombre, apellido} = this 
			// == var nombre = this.nombre // var apellido = this.apellido
			fn(nombre, apellido)
		}
	}

Hay valores que al ser evaluados dentro de un if dan verdadero y otros falso, en este caso fn dentro del if evalúa si existe la función en la invocación de saludar().

El código completo quedaría así:



    class Persona {
    	constructor(nombre, apellido, altura, genero){
    		this.nombre = nombre
    		this.apellido = apellido
    		this.altura = altura
    		this.genero = genero
    	}
    	saludar(fn){
    		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    		if(fn){
    			var {nombre, apellido} = this
    			fn(nombre, apellido)
    		}
    	}
    	soyAltX(){
    		var altX = this.genero == 'masculino' ? 'alto' : 'alta'
    		var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y definitivamente soy ${altX}.` 
    										: `Soy ${this.nombre} ${this.apellido} y no, no soy ${altX}.`
    		console.log(string)
    	}
    }
    
    class Desarrollador extends Persona {
    	constructor(nombre, apellido, altura){
    		super(nombre, apellido, altura)
    	}
    	saludar(fn){
    		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollader.`)
    		if(fn){
    			var {nombre, apellido} = this
    			fn(nombre, apellido, true)
    		}
    	}
    }
    
    function responderSaludo(nombre, apellido, esDev){
    	console.log(`Buen día ${nombre} ${apellido}.`)
    	if (esDev) {
    		console.log(`Ah mirá, no sabía que eras dev.`)
    	}
    }
    
    var pablo = new Persona('Pablo', 'Andrés', 1.78, 'masculino')
    var joaquin = new Desarrollador('Joaquín', 'Perez', 1.91, 'masculino')
    var rosa = new Persona('Rosa', 'Mosqueta', 1.81, 'femenino')
    var elis = new Persona('Elis', 'Detta', 1.73, 'femenino')
    
    pablo.saludar()
    joaquin.saludar(responderSaludo)
    rosa.saludar(responderSaludo)
    elis.saludar(responderSaludo)


<br>

[========]

## CÓMO FUNCIONA EL ASINCRONISMO EN JAVASCRIPT

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

<br>

[========]

## COMO FUNCIONA EL TIEMPO EN JAVASCRIPT

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. 

Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.


<br>

[========]

## CALLBACKS

Usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.


<br>

[========]

## HACIENDO MULTIPLES REQUEST

Nunca sabemos en que orden llegaran las peticiones al servidor

<br>

[========]

## MANEJANDO EL ORDEN Y EL ASINCRONISMO EN JAVASCRIPT

Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada.

Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

async y await evitaría el callback hell

Agregamos primero otro parámetro a la función obtenerPersonaje().

`obtenerPersonaje(id, callback)`

Movemos la variable de la función al $.get.



    $.get(url, opts, function(people){
        console.log(people.name)
    })

Si queremos que lleguen en orden tenemos que hacer los requests uno después del otro y no en paralelo como los veníamos haciendo.
Para eso usamos el segundo parámetro en la función.



    function obtenerPersonaje(id, callback) {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(people){
            console.log(people.name)
        })
        if(callback) {
            callback()
        }
    }

Así podemos invocar la función del callback de la siguiente manera:



    obtenerPersonaje(1, function() {
        obtenerPersonaje(2, function() {
            obtenerPersonaje(3, function() {
                obtenerPersonaje(4)
            })
        })
    })
    
Pero esto trae la problemática del anidamiento infinito llamado CallbackHell.


<br>

[========]

## MANEJO DE ERRORES CON CALLBACKS

Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

Cómo solucionar o prever el que el programa se quede sin conexión u algo parecido?
Primero modificamos la función del $.get y borramos el if:



    //$.get(url, opts, function(person){
    //   console.log(person.name)
    //})
    //if(callback) {
    //    callback()
    //}

Queda así:

`$.get(url, opts, callback)`

El callback llama a la función declarada por parámetro en la invocación de obtenerPersonaje().
La invocación (1 de ellas) queda así:



    obtenerPersonaje(1, function(person){
        console.log(person.name)
    })

A demás del método get() podemos encadenar otro llamado al método fail() que va a recibir un callback y se va a disparar si hay algún error.




    $.get(url, opts, callback).fail(() => { console.log(`EROR! La conexión se ha interrumpido y no podemos mostrarte el resto de los personajes.`) })

Probamos en consola, pestaña ‘Network’ deshabilitamos la cache y después de recargar nos pusimos en modo offline y se reprodujo el error para disparar el fail().


<br>

[========]

## PROMESAS

En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

- pending
- fullfilled
- rejected

Las promesas se invocan de la siguiente forma:



    new Promise( ( resolve, reject ) => {
      // --- llamado asíncrono
      if( todoOK ) {
         // -- se ejecutó el llamado exitosamente
         resolve()
      } else {
         // -- hubo un error en el llamado
         reject()
      }
    } )


Con los callBacks teníamos un problema al anidarlos.
Para este problema existen las ‘promesas’.

Antes era necesario usar librerías externas pero ahora la mayoría de los browsers soportan las promesas.
Si queremos verificar si las promesas son soportadas por el usuario se podría usar lo que se llama un ‘polifield’. Este detecta si el navegador donde está corriendo nuestro código no soporta las promesas, y si así es, crea las clases de las promesas por nosotros y así podrían ser utilizadas por nosotros de manera transparente para nuestro código.

Qué son las promesas?
Tenemos que pensar las promesas como valores que aún no conocemos. Es la promesa de que ahí va a haber un valor cuando una acción asíncrona suceda y se devuelva.

Las promesas tienen 3 estados y son como cualquier otro objeto de javascript.

El primero de los estados es ‘pending’. Es el estado cuando las creamos.
Si se resuelve exitosamente pasa al estado ‘fulfilled’.
Si ocurre algún error y no se resuelve pasa al estado de ‘rejected’.

Las promesas pueden no ser asíncronas también.

Para obtener el valor de la resolución de la promesa llamamos a la función _.then(val =>) _a la que le vamos a pasar como parámetro otra función en la que el primer parámetro será el valor que esperábamos.

Si sucede algún error agregamos el método .catch(err=>) al que se le asigna una función también como parámetro que va a recibir el error.

Las promesas se declaran de la siguiente manera:



    new Promise( function( resolve, reject ) {
        ...
    }).then( valor => {
        ...
    }).catch( err => {
        ...
    })

Se crea el nuevo objeto y se le asigna una función con dos parámetros ‘resolve’ y ‘reject’. Estas son dos funciones que debemos llamar si la promesa se resuelve o no.

Si se resuelve exitosamente llamamos a ‘.then(valor =>’ para obtener el valor del promise dentro del arrow function (valor=>).

Si sucede algún error podemos llamar al ‘.catch( err =>’ para obtener el tipo de error que sucedió y actuar en consecuencia.

Otra cosa más a cerca de las promesas es que luego de llegar al estado de 'fulfilled’ podemos retornar otra promesa dentro del .then y de esa manera ir encadenándolas en sucesivas acciones asíncronas. Cada una de ellas puede ser resuelta o rechazada en una nueva promesa que terminará en el estado de ‘fulfilled’.

Entonces en nuestro código borramos las invocaciones anidadas y volvemos a modificar obtenerPersonaje().



    function obtenerPersonaje() ya no recibirá un callback, directamente va a retornar una promesa.
    
    function obtenerPersonaje(id) {
        return new Promise( function(resolve, reject){ 
            ...
        })
    }

Como arrow function:



    function obtenerPersonaje(id) {
        return new Promise((resolve, reject) => { 
            ...  //Aquí dentro se genera el llamado asíncrono   ...
        })
    }

Dentro de esta función se va a generar el llamado asíncrono.
Devolvemos la generación de url y el $.get con el parámetro ‘callback’ reemplazado por una nueva función a modo de callback que se va a ejecutar recién cuando el get haya sido exitoso resolviendo la promesa. Por lo que le pasamos el parámetro ‘data’, a través del cual van a llegar los valores de nuestro personaje, y dentro de la función invocamos, a su vez, a la función resolve.

También vamos a vover a insertar el método .fail() invocando el parámetro/función ‘reject’ con parámetro ‘id’.



    function obtenerPersonaje(id) {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
            $
                .get(url, opts, function(data){
                    resolve(data)
                })
                .fail(() => reject(id))
        })
    }
    
La función se invocaría entonces solamente con el parámetro id.

`obtenerPersonaje(id)`

La forma de obtener el valor es llamando al .then() con su respectiva función como parámetro que va a estar trayendo a nuestro personaje a través del parámetro ‘data’ que está en la función invocada en los parámetros del .get si este es exitoso.



    obtenerPersonaje(1)
        .then(function(personaje){
            console.log(personaje.name)
        })


Y si sucede algún error en nuestro callback lo vamos a obtener con el método .catch() que va a recibir el id que viene a través del .fail() de la función.



    function onError(id){
        console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
    }
    
    obtenerPersonaje(1)
        .then(function(personaje){
            console.log(personaje.name)
        })
        .catch(function(id){
            onError(id)
        })

O directamente invocamos la función desde el parámetro del .catch:



    function onError(id){
        console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
    }
    
    obtenerPersonaje(1)
        .then(function(personaje){
            console.log(personaje.name)
        })
        .catch(onError)



<br>

[========]


## PROMESAS ENCADENADAS

A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

Encadenar promesas es mucho más limpio que con el método anterior.
Primero escribimos la invocación de la promesa con un arrow function:



    obtenerPersonaje(1)
        .then( personaje => {
            console.log(personaje.name)
        })
        .catch(onError)

Al resolver esta promesa vamos a retornar otra promesa invocando dentro del .then nuevamente la función obtenerPersona() con el id del siguiente personaje:



    obtenerPersonaje(1)
        .then( personaje => {
            console.log(personaje.name)
            return obtenerPersona(2)
        })
        .catch(onError)

Y para obtener los valores de esta promesa encadenamos otro .then y copiamos la función parámetro cambiando el valor del id.




    obtenerPersonaje(1)                                                                                                                                                            
        .then( personaje1 => {
            console.log(personaje1.name)
            return obtenerPersona(2)
        })
        .then( personaje2 => {
            console.log(personaje2.name)
            return obtenerPersona(3)
        })
        .then( personaje3 => {
            console.log(personaje3.name)                                                                    
            return obtenerPersona(4)
        })
        .
        .
        .
        .catch(onError)

Ahora es mucho más legible y si cualquiera de estas promesas da un error funciona el mismo .catch para todos.


<br>

[========]

## ASINC-AWAIT

Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

Se parece mucho a la forma de escribir código hace unos años, de manera secuencial, desde arriba hacia abajo.
Lo que sí, incluye algunas palabras clave.

Como primer cambio a nuestro código anterior vamos a crear una función en la que incorporamos desde la declaración de la variable ‘ids’ hasta incluso el .catch.
A continuación llamamos a la función:



    function obtenerPersonajes() {
        var ids = []
        for (let i = 1; i <= 10; i++) {
            ids.push(i)
        }
        var promesas = ids.map( id => obtenerPersonaje(id) )
        Promise
            .all(promesas)
            .then(personajes => console.log(personajes))
            .catch(onError)
    }
    obtenerPersonajes()


Después de la declaración de la variable ‘promesas’ guardamos los resultados de esas promesas en una nueva variable ‘personajes’.



    async function obtenerPersonajes() {
        var ids = []
        for (let i = 1; i <= 10; i++) {
            ids.push(i)
        }
        var promesas = ids.map( id => obtenerPersonaje(id) )
        var personajes = await Promise.all(promesas)


Notese la palabra clave ‘await’ antes de Promise.all. Esta hace que el código dentro de la función se detenga en ese lugar hasta que se concretan todas las promesas.
Para poder usarlo debemos declarar la función como ‘async’.

Para que esto funcione debemos poner este await dentro de una estructura try/catch.



    function obtenerPersonajes() {
        var ids = []
        for (let i = 1; i <= 10; i++) {
            ids.push(i)
        }
        var promesas = ids.map( id => obtenerPersonaje(id) )
        try{
            var personajes = await Promise.all(promesas)
            console.log(personajes))
        } catch(id) {
            onError(id)
        }
    }
    obtenerPersonajes()


<br>

[========]

## JUEGO SIMON DICE

### COMENZANDO JUEGO 

Crearemos el juego Simon (Simón dice), en el que se van iluminando una secuencia de botones que el jugador tendrá que ir repitiendo, si se equivoca volverá a comenzar. El juego tendrá 10 niveles de dificultad, que deberán ser superados para ganar.


<br>

[========]

### GENERANDO UNA SECUENCIA DE NUMEROS

Para generar la secuencia del juego usaremos un array con números aleatorios, que representarán el color del botón que se iluminará cada vez. Usamos new Array() para crear el arreglo de manera dinámica, y llamamos al método fill para rellenar ese array con ceros y poder luego iterar sobre éste con map()

En esta clase lo que hacemos es crear la secuencia aleatoria del juego de la siguiente manera;




    class Juego {
        constructor(){
            this.inicializar()
            this.generarSecuencia()
        }

Vamos a clases y cremos en el contructor “this.generarSecuencia” para llamar la función;

 

      generarSecuencia(){
            this.secuencia = new Array(10).fill(0).map(n=> Math.floor(Math.random()*4))
        }


Como podemos observar en esta función vamoa a generar la secuencia y lo haremos creando un array, de una manera totalmente nueva cual no habíamos implementado antes, es muy importante aca usar la función “fill” para darle un valor a los arrays porque sino no va a funcionar nuestra función “map” para poder trabajar con los arrays y crear la secuencia, para ellos usamos una arrow function dentro de map, y usaremos el modulo de matemáticas universal de JavaScript y usaremos la función “floor” de este que lo que hará es redondearnos hacia abajo el numero que tengamos, esto lo haremos porque al usar math.random() como lo haremos a continuación, este crea un numero aleatorio entre 0 y 1 y debido a que lo multiplicamos x4 nos dará varios números entre 0 y 4 por lo que los queremos redondeados y para ello usamos esta función.

    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

Por ultimo creamos el atributo “this.nivel = 1” que es para indicar que el usuario iniciara por el nivel 1 , ya que ira avanzando a medida que juegue, y otro de detalle es que agregaremos los colores a un atributo de esta función,(dato curioso de JavaScript es el hecho de que cuando llamamos una variable o constante que su valor sea igual a su nombre, no hace falta escribirlo de la siguiente manera por ejemplo;



    this.colores = {
                celeste:celeste,
            }
Ya que hacerlo de esta manera es equivalente;



    this.colores = {
                celeste,
                violeta,
                naranja,
                verde
            }


<br>

[========]

### ILUMINANDO SECUENCIA DE COLORES

Se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. 

Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.

Siempre que sea posible debemos usar const sobre let, y let sobre var.

<br>

[========]

### ILUMINANDO SECUENCIA DE COLORES

Se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. 

Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.

Siempre que sea posible debemos usar const sobre let, y let sobre var.

<br>

[========]

### OBTENIENDO EL INPUT DE UN USUARIO

Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cuál es el botón que ha sido presionado.


<br>

[========]

### AGREGANDO LA VERIFICACIÓN DEL COLOR ELEGIDO

Para agregar atributos al objeto principal en el que está nuestro código, basta con usar this, haciendo referencia al contexto de la clase, y agregar los atributos con un punto: this.atributo = valor

La verificación del color elegido la haremos creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.

<br>

[========]

### AGREGANDO ESTADOS FINALES DEL JUEGO

Incluiremos una librería de mensajes con estilos mucho más agradables que el mensaje básico de javascript para mostrar los estados finales del juego al usuario.

<br>

## MEMOIZACION AHORRANDO PODER DE COMPUTO

La memorización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

Este proceso nos va a permitir ahorrar procesamiento, ahorrar cómputo, guardando ciertos resultados de algunas cuentas.

Usaremos otro ejemplo de recursividad:

Factoriales:

!6 = 6* 5 * 4 * 3 * 2 * 1 = 720

!12 = 12 * 11 * 10 * 9 * … * 1 == 12 * 11 * 10 * 9 * 8 * 7 * !6

Cómo guardamos los resultados para no tener que volver a realizar cuentas ya hechas.


	function factorial(n) {
		if(n === 1) {
			return 1
		}
		returnn * factorial(n - 1)
	}

Ahora guardamos en una cache los resultados de las operaciones ya hechas.


    	function factorial(n) {
    		if(!this.cache) {
    			this.cache = {}
    		}
    		if (this.cache[n]){
    			return this.cache[n]
    		}
    		if(n === 1) {
    			return 1
    		}
    		this.cache[n] = n * factorial(n - 1)
    		return this.cache[n]
    	}

<br>

[========]


## ¿HACE CUÁNTOS DÍAS NACISTE?

Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.

A las fechas podemos restarlas o sumarlas.
Math.abs() nos permite poner cualquier fecha en el primer orden de tal manera que el resultado siempre sea positivo o ‘absoluto’’.
La suma o resta nos da un número expresado en milisegundos.

    function diasEntreFechas(fecha1, fecha2) {
    	const unDia = 1000 * 60 *60 * 24	//1000ms x 60sec x 60min x 24hs
    	const diferencia = Math.abs(fecha1 - fecha2)
    
    	return Math.floor(diferencia / unDia)
    }
    
    const hoy = new Date()   // fecha actual por defecto
    const nacimiento = new Date(1981, 08, 12)   // el constructor de new Date() recibe año, mes (enero=00) y el día.
    
    diasEntreFechas(hoy, nacimiento)  // == 13638   si divido esta cantidad de días por 365 obtendré la edad en años. 
    
	

<br>

[========]

## FUNCIONES RECURSIVAS

La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

<br>

[========]

## CLOSURES

Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

Un closure es una función que recuerda el estado de las cosas cuando fue creada.
Una función que devuelve otra función con parámetros invocados en dos veces; primero el de la función ‘padre’ y luego el de la función ‘hijo’.

Para ejemplificar generemos una función que va a crear saludos. En este caso hagamos un saludo argentino, uno mexicano y otro para colombia.


    function crearSaludo(finalDeFrase) {
    	return function(nombre) {
    
    	}
    }

La función ‘padre’ es generadora o creadora de otras funciones y la función ‘hijo’ es anónima, es la que nos va a devolver el resultado.
Vamos a llamar esta función para crear constantes.


    const saludoArgentino = crearSaludo('che')
    const saludoMexicano = crearSaludo('wey')
    const saludoColombiano = crearSaludo('amigo')

Entonces ahora podemos llamar a la función nuevamente a través de cada variable constante y pasando el parámetro de la función ‘hijo’ esta vez, el parámetro ‘nombre’ para generar el saludo de la siguiente manera.


    saludoArgentino('Pablo')  // Hola Pablo che
    saludoMexicano('Pablo')   // Hola Pablo wey
    saludoColombiano('Pablo') // Hola Pablo amigo

Y agregamos la respuesta de la función (el console.log en este caso) en la que accedemos a la variable ‘finalDeFrase’ generada en la declaración de los diferentes saludos


    function crearSaludo(finalDeFrase) {
    	return function(nombre) {
    		console.log(`Hola ${nombre} ${finalDeFrase}`)
    	}
    }

La variable ‘finalDeFrase’ es la generada en las constantes con el nombre mismo de la función, a partir del parámetro que le pasamos; ‘che’, ‘wey’ o ‘amigo’ en este caso.

La función ‘hijo’ recuerda cada una de las variables generadas que se usó para crear el saludo.
Y la función ‘hijo’ va a ser cada una de las constantes creadas; saludoArgentino, saludoMexicano o saludoColombiano en este mismo caso.


`const saludoArgentino = crearSaludo('che')`

Al invocar la función ‘hijo’ luego, le pasamos el parámetro ‘nombre’ y así la función se completa y nos imprime el saludo ‘Hola Pablo che’ en este caso.


    saludoArgentino('Pablo')  // Hola Pablo che
    
    El código completo queda así:
    
    
    function crearSaludo(finalDeFrase) {
    	return function(nombre) {
    		console.log(`Hola ${nombre} ${finalDeFrase}`)
    	}
    }
    
    const saludoArgentino = crearSaludo('che')
    const saludoMexicano = crearSaludo('wey')
    const saludoColombiano = crearSaludo('amigo')
    
    saludoArgentino('Pablo')  // Hola Pablo che
    saludoMexicano('Pablo')   // Hola Pablo wey
    saludoColombiano('Pablo') // Hola Pablo amigo



<br>

[========]

## ESTRUCTURAS DE DATOS INMUTABLES

Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.

Las estructuras de datos inmutables nos van a permitir deshacernos de los “efectos colaterales” cuando estamos desarrollando (side effects; efecto de lado según Sacha).

Dada el siguiente código:

    
    const pablo = {
    	nombre: 'Pablo',
    	apellido: 'Andrés',
    	edad: 30
    }
    
    const cumpleanos = persona => persona.edad++

La función modificará la edad en el objeto cada vez que se ejecute:


    pablo
    //{nombre: "Pablo", apellido: "Andrés", edad: 30}
    
    cumpleanos(pablo)
    //30
    
    pablo
    //{nombre: "Pablo", apellido: "Andrés", edad: 31}
    
    cumpleanos(pablo)
    //31
    
    pablo
    //{nombre: "Pablo", apellido: "Andrés", edad: 32}
    
    cumpleanos(pablo)
    //32
    
    pablo
    //{nombre: "Pablo", apellido: "Andrés", edad: 33}


Este es el llamado side effect (efecto de lado). La función puede modificar el objeto sin que nosotros así lo queramos.
Para evitar este efecto colateral definimos una función inmutable.


    const cumpleanosInmutable = persona => ({
    	...persona,
    	edad: persona.edad + 1
    })

Si le pasamos el objeto ‘pablo’ la función nos devolverá un nuevo objeto sin modificar el anterior.



    pablo
    // {nombre: "Pablo", apellido: "Andrés", edad: 33}
    
    cumpleanosInmutable(pablo)
    // {nombre: "Pablo", apellido: "Andrés", edad: 34}
    
    cumpleanosInmutable(pablo)
    // {nombre: "Pablo", apellido: "Andrés", edad: 34}
    
    pablo
    // {nombre: "Pablo", apellido: "Andrés", edad: 33}
    
    cumpleanosInmutable(pablo)
    // {nombre: "Pablo", apellido: "Andrés", edad: 34}
    
    cumpleanosInmutable(pablo)
    // {nombre: "Pablo", apellido: "Andrés", edad: 34}
    
    pablo
    // {nombre: "Pablo", apellido: "Andrés", edad: 33}


La “desventaja” que tendremos es que para guardar el valor de la función vamos a tener que generar una nueva variable.


    const pabloViejo = cumpleanosInmutable(pablo)
    const pabloMasViejo = cumpleanosInmutable(pabloViejo)


Utilizar estructuras de datos es parte de las buenas prácticas de javascript ya que nos permite deshacernos de los “efectos de lado” y no preocuparnos de modificar código inconscientemente y que se “rompa todo” en cualquier otro lado.

<br>

[========]

## CAMBIANDO EL CONTEXTO AL LLAMAR A UNA FUNCIÓN

El contexto en javascript está definido por el objeto ‘this’ cuando se ejecuta un código.
Es muy común el error: ‘No se puede ejecutar este método porque es indefinido’, esto sucede porque el ‘this’ no es quien esperamos que sea.

Dado el siguiente código:



    const pablo = {
    	nombre: 'Pablo',
    	apellido: 'Andrés',
    }
    const mariela = {
    	nombre: 'Mariela',
    	apellido: 'Riesnik',
    }
    
    function saludar() {
    	console.log(`Hola, mi nombre es ${this.nombre}`)
    }
    
    // Si ejecuto:
    
    saludar()
    // Hola, mi nombre es undefined
    
    // Ya que tenemos la función definida dentro de un contexto global el 'this' en saludar() refiere al objeto 'window'. Por lo tanto es lo mismo que:
    
    window.saludar()
    // Hola, mi nombre es undefined
    

Cómo hacemos para cambiar ese ‘this’ de la función?
El método ‘.bind()’ se usa justamente para cambiar en contexto, el ‘this’, en una función.


    const saludarAPablo = saludar.bind(pablo)
    const saludarAMariela = saludar.bind(mariela)
    ‘.bind()’ nos devuelve una nueva función atando el parámetro,_ ‘(pablo)’
	
En este caso, al ‘this’ dentro de esa función, saludar en este caso.

Este nunca modifica a la función original.


    saludarAPablo()
    // Hola, mi nombre es Pablo
    
    saludarAMariela()
    // Hola, mi nombre es Mariela
    
    
    Otra forma de usarlo:
    
    
    setTimeout( saludar.bind(pablo), 1000) == setTimeout(saludarAPablo, 1000)


Y otra, agregado un parámetro a la función:



    function saludar(saludo = 'Hola') {
    	console.log(`${saludo}, mi nombre es ${this.nombre}`)
    }
    setTimeout( saludar.bind(pablo, 'Hola loco!'), 1000)
    // Hola loco!, mi nombre es Pablo
    
    //también se puede agragar en la declaración de la constante.
    const saludarAPablo = saludar.bind(pablo, 'Hola loco!!')
    // Hola loco!!, mi nombre es Pablo
    

El primer parámetro es el contexto y luego van los siguientes parámetros en el orden en el que aparezcan.

IMPORTANTE!!!

La función .bind() no ejecuta la función a la que se agrega, sino que simplemente nos retorna una nueva función con ese contexto cambiado.
Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.

Otros dos métodos que nos sirven para cambiar el contexto son: .call y .apply.

Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado.


    saludar.call(pablo)
    // Hola, mi nombre es Pablo  -  se ejecuta inmediatamente
    
    saludar.bind(pablo)
    // no produce ningún resultado, no la ejecuta.


Al .call le pasamos los parámetros separados por ‘,’ igual que en el .bind.


    saludar.call(pablo, 'Hola cheeee!!')
    // Hola cheeee!!, mi nombre es Pablo
    

Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores.



    saludar.apply(pablo, ['Hola mi querido'])
    // Hola mi querido, mi nombre es Pablo
    

Manejar a dónde refiere el ‘.this’ es algo que tenemos que tener muy presente, sobretodo cuando escribimos en modo asíncrono, ya que siempre que ejecutemos una función de esta naturaleza el ‘.this’ siempre cambia y es muy importante atarlo a nuestra clase, objeto o función.

<br>

[========]

## ¿CUÁNDO HACE FALTA PONER EL PUNTO Y COMA AL FINAL DE LA LÍNEA?

El punto y coma es opcional en JavaScript, excepto en algunos casos:

- Cuando usamos varias instrucciones en una mísma línea
- Al comenzar la próxima línea con un array
- Al comenzar la próxima línea con un template string
