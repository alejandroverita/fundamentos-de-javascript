const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar() {
        //Lo primero que hace es ocultar el boton empezar
        btnEmpezar.classList.add("hide");
        this.nivel= 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    generarSecuencia() {
        //generar un array de numeros random
        //this.secuencia=[1,2,3,4,5] esta es una forma
        //map no va a funcionar cuando tengamos elementos sin definir en el array
        //math.floor redondea para abajo un numero
        this.secuencia=new Array(10)
            .fill(0)
            .map((n) => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor (numero) {
        switch (numero) {
            case 0: 
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3: 
                return 'verde'
        }
    }

    iluminarSecuencia (){
        // va a recorrer el array de la secuencia hasta el nivel en el que este el usuario
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
        //llamar una funcion para que ilumine ese color en particular
            console.log(color)
            setTimeout(() => this.iluminarColor(color), 1000 * i)

        }
    }

    iluminarColor (color) {
        //agregando una clase CSS para que se ilumine
        this.colores[color].classList.add('light')

        //hacer que se vaya la ilumiacion en un periodo de tiempo
        setTimeout(() => this.apagaColor(color), 350)
    }

    apagaColor(color) {
        this.colores[color].classList.remove('light');
    }

}

function empezarJuego() {
window.juego = new Juego();
}