//Variables
const salida=document.getElementById("salida");
//Creamos la clase que nos permita instanciar edificios
class Edificio{
    //Propiedades en las que almacenaremos la información de cada edificio
    calle;
    numero;
    codigo;
    plantas;
    //Constructor
    //Cada vez que instanciemos un edificio le pasaremos la calle, número y código postal como parámetros
    constructor(calle,numero,codigo){
        this.calle=calle;
        this.numero=numero;
        this.codigo=codigo;
        //Dentro de cada planta tendremos un número de puertas, por lo que plantas es un array
        this.plantas=new Array();
        //Cada vez que se crea un edificio se muestra automáticamente un mensaje
        salida.innerText += "Se ha construido un nuevo edificio en la calle " +this.calle +", nº " +this.numero +", CP: " +this.codigo +"\n";
    }
    //Definimos los métodos de la clase, utilizando la variable this, que hace referencia al objeto sobre el que invocamos el método
    agregarPlantasyPuertas(numplantas,puertas){
        //Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
        this.plantas.length+=numplantas;
        this.puertas+=puertas;
        for(var i=0; i<this.plantas.length;i++){
            this.plantas[i]=new Array(puertas);
        }
        salida.innerText +="Se han añadido " +numplantas +" plantas al edificio, con " +puertas +" puertas cada una."+"\n";
    }
    //Setter y getter
    //Le pasamos el nuevo número del edificio para que lo actualice. 
    modificarNumero(numero){
        this.numero=numero;
    }
    //Le pasamos la nueva calle del edificio para que lo actualice. 
    modificarCalle(calle){
        this.calle=calle;
    }
    //Le pasamos el nuevo código postal del edificio para que lo actualice. 
    modificarCodigoPostal(codigo){
        this.codigo=codigo;
    }
    //Devuelve la calla
    imprimeCalle(){
        return this.calle;
    }
    //Devuelve el número
    imprimeNumero(){
        return this.numero;
    }
    //Devuelve el código postal
    imprimeCodigoPostal(){
        return this.codigo;
    }
    // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
    agregarPropietario(nombre,planta,puerta){
        //Como el index del array empieza en 0, cada planta y cada puerta serán igual al número de planta y de puerta menos uno
        planta-=1;
        puerta-=1;
        // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
        this.plantas[planta][puerta]=nombre;
        //Cada vez que se añada un propietario a un piso de un edificio se muestra un mensaje
        salida.innerText += this.plantas[planta][puerta] +" es ahora el propietario de la puerta " +(puerta+1) +" de la planta " +(planta+1)+"\n";
    }
    imprimePlantas(){
        //Recorrerá el edificio e imprimirá todos los propietarios de cada puerta
        for(var i=0; i<this.plantas.length;i++){
            for(var j=0;j<this.plantas[i].length;j++){
                if(this.plantas[i][j]!=null){
                //Si los pisos tienen propietario, se mostrará el siguiente mensaje
                salida.innerText += "Propietario del piso " +(j+1) +" de la planta " +(i+1)  +": "+this.plantas[i][j] +"\n"; 
                } else {
                    //sino, se mostrará el campo de propietario vacío
                    salida.innerText +="Propietario del piso " +(j+1) +" de la planta " +(i+1)  +": " +"\n"; 
                }
            }  
        }
    }
}
//Instanciamos 3 objetos edificioA, edificioB y edificioC 
const edificioA=new Edificio("García Prieto",58,15706);
const edificioB=new Edificio("Camino Caneiro",29,32004);
const edificioC=new Edificio("San Clemente", "s/n", 15705);
salida.innerText += "El código postal del edificio A es: " +edificioA.imprimeCodigoPostal() +"\n";
salida.innerText += "La calle del edificio C es: " +edificioC.imprimeCalle() +"\n";
salida.innerText += "El edificio B está situado en la calle " +edificioB.imprimeCalle() +" número " +edificioB.imprimeNumero() +"\n";
//Agregamos 2 plantas y 3 puertas por planta al edificio A...
edificioA.agregarPlantasyPuertas(2,3);
//Agregamos 4 propietarios al edificio A
edificioA.agregarPropietario("José Antonio Lopez",1,1);
edificioA.agregarPropietario("Luisa Martinez",1,2);
edificioA.agregarPropietario("Marta Castellón",1,3);
edificioA.agregarPropietario("Antonio Pereira",2,2);
//Listado de propietarios
edificioA.imprimePlantas();
//Agregamos 1 planta más al edificio A
edificioA.agregarPlantasyPuertas(1);
//Agregamos un propietario más al edificio A planta 3, puerta 2
edificioA.agregarPropietario("Pedro Mejide",3,2);
//Listado de propietarios con el nuevo propietario añadido
edificioA.imprimePlantas();

//Crea un objeto inmobiliaria (creando una clase para ello): esta clase podrá almacenar Edificios
class Inmobiliaria extends Edificio{
    nombre;
    edificios;
    numEdificios;
    constructor(nombre, calle, numero, codigo){
        super(calle, numero, codigo);
        this.nombre=nombre;
        this.edificios = new Array();
        this.numEdificios=0;
        salida.innerText += "Se ha construido un nueva inmobiliaria llamada " +this.nombre +", en la calle " +this.calle +", nº " +this.numero +", CP: " +this.codigo +"\n";
    }
    agregarEdificios(edificio){
        this.edificios[this.numEdificios]=edificio;
        this.numEdificios++;
        salida.innerText +="Se ha añadido el edificio de la calle " +edificio.calle +", nº " +edificio.numero +", CP: " +edificio.codigo +".\nCon un total de " +this.numEdificios +" edificios en toda la inmobiliaria.\n";
    }
    
    //Para imprimir todos los edificios de la inmobiliaria
    imprimirEdificios(){
        salida.innerText+= "Listado de propiedades de la inmobiliaria " +this.nombre +":\n";
        for(var j=0; j<this.edificios.length;j++){
            if(this.edificios[j]!=null){
            salida.innerText += "- Edificio "+(j+1) +": en la calle " +this.edificios[j].calle +", nº:" +this.edificios[j].numero +" y código postal " +this.edificios[j].codigo +".\n";
            }else{
                salida.innerText += "- Edificio "+(j+1) +":\n";
            }
        }
    }

    //Para borrar un edificio concreto, primero busco el index del edificio a borrar y luego lo borro
    borrarEdificios(edificio){
        for(var i=0; i<this.edificios.length;i++){
            if(this.edificios[i]==edificio){
                this.edificios[i]=null;
                this.numEdificios--;
                salida.innerText +="Se ha borrado el Edificio " + (i+1) +" de la inmobiliaria " +this.nombre +"\n";
                salida.innerText +="Quedan un total de " +this.numEdificios +" edificios en toda la inmobiliaria.\n";
            }
        }
    }

}
const inmobiliariaA = new Inmobiliaria("Inmobiliairia S.A", "C/Sin nombre", "7", "36959");
inmobiliariaA.agregarEdificios(edificioA);
inmobiliariaA.agregarEdificios(edificioB);
inmobiliariaA.agregarEdificios(edificioC);
inmobiliariaA.imprimirEdificios();
inmobiliariaA.borrarEdificios(edificioA);
inmobiliariaA.imprimirEdificios();


    