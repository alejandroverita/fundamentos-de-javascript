const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

//ultimo nivel
const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();

        setTimeout(this.siguienteNivel, 1000)
        
    }

    inicializar() {

        this.siguienteNivel= this.siguienteNivel.bind(this)

        //el this señala al juego y no a cada uno de los botones
        this.elegirColor = this.elegirColor.bind(this)

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
        this.secuencia = new Array(ULTIMO_NIVEL)
            .fill(0)
            .map((n) => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    transformarNumeroAColor (numero) {
        switch (numero) {
            case 0: 
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3: 
                return 'verde';
        }
    }

    transformarColorANumero (color) {
        switch (color) {
            case 'celeste': 
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde': 
                return 3;
        }
    }

    iluminarSecuencia (){
        // va a recorrer el array de la secuencia hasta el nivel en el que este el usuario
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]);
        //llamar una funcion para que ilumine ese color en particular
            /* console.log(color) */
            setTimeout(() => this.iluminarColor(color), 1000 * i);

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

    agregarEventosClick () {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
    }

    // se va a llamar en el navegador cuando js lo llame
    elegirColor(ev){
        /* console.log(ev) */
        const NOMBRECOLOR = ev.target.dataset.color; //en el evento click vemos el dataset de cada color.
        //Debemos transformar ese color al numero correspondiente
        const NUMEROCOLOR = this.transformarColorANumero(NOMBRECOLOR)

        this.iluminarColor(NOMBRECOLOR);
        //comparar el numero de color con la secuencia de la posicion del subnivel en el que se encuentra
        if (NUMEROCOLOR === this.secuencia[this.subnivel]) {
            this.subnivel++;
            if (this.subnivel === this.nivel) {
                this.nivel++;
                this.eliminarEventosClick();
                if (this.nivel === (ULTIMO_NIVEL + 1 ))
                {
                    //GANó

                }
                else {
                    //usamos la referencia a la funcion
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        } else {
            //perdió

        }
    }

}

function empezarJuego() {
window.juego = new Juego();
}