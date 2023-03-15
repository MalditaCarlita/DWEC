//Botones
const enviar=document.getElementById("B1");
const color=document.getElementById("B2");
const borrar=document.getElementById("botonReset");

//Variables
const num=document.getElementById("numeroN");
const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
let anchoalto;
let x;
let y;
let contador=0;

//Funciones
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
function dibujarCuadrado(numero) {
    limpiarCanvas();
    for(let i=0;i<numero;i++){
    x = Math.floor(Math.random()*400+1);
    y = Math.floor(Math.random()*400+1);
    anchoalto = Math.floor(Math.random()*70+1);
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = '#' + randomColour;
    ctx.fillRect(x, y, anchoalto, anchoalto);
    contador++;
    }
  }

//Eventos
color.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + random;
});

enviar.addEventListener('click', ()=>{
    const numero=Number(num.value);
        if(num.value==''){
            alert("Por favor, introduzca un número");
            num.focus();
        } else if(numero<1 || numero>50){
            alert("Entrada no válida: debe estar comprendida entre 1 y 50");
            num.focus();
        } else {
            alert("¿Desea enviar la entrada anterior?");
            dibujarCuadrado(numero);
        }
    });

borrar.addEventListener('click', ()=>{
    limpiarCanvas();
    num.value='';
    num.focus();
});