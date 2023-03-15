//Elementos HTML
const salida = document.getElementById('salida');
const entrada = document.getElementById('entrada');
const enviar = document.getElementById('enviar');

//Función para crear la serie de Fibonacci
function crearFibonacci(){
    let numero = entrada.value;
    let fib = [];
    fib[0]=0;
    fib[1]=1;

    for(let i=2;i<=numero-1;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }

    return fib;
}

//Función para crear la tabla
function crearTabla(){

    // Obtener la serie de Fibonacci
    const fib = crearFibonacci();

    //Definir filas y celdas


    // Agregar cada número de la serie a una celda en la tabla
    let posicion = 0;

    for(let i=0;i<fib.length;i++){

        for(let j=0;j<fib.length;j++){

            salida.textContent += fib[posicion];
            posicion++;
        }

        salida.appendChild(document.createElement('br'));
    }
}

// Añadir eventos
enviar.addEventListener('click', crearTabla);


