const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
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
        }
    }

    generarSecuencia() {
        //generar un array de numeros random
        //this.secuencia=[1,2,3,4,5] esta es una forma
        //map no va a funcionar cuando tengamos elementos sin definir en el array
        //math.floor redondea para abajo un numero
        this.secuencia=new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

}

function empezarJuego() {
window.juego = new Juego();
}