//Integrantes:

// Beatriz Collin
// Cristina Tumbajoy
// Casseli Layza
// German Fraire
// Diana Carolina Galeano
// Dindi Lamadrid
// Constanza Andrea Isaza Maya


//Objetos literales

/*Descripción del problema:
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:
● N.º de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).
Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:*/

/* 1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias).*/

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    }
  ];


/* 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.*/

let banco ={
        clientes: arrayCuentas
    };

console.log(banco);

/* 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);*/
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    }
  ];

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombre) {
                return this.clientes[i];
            }
            
        }
    return "Cliente no encontrado";
    }
};

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
 console.log(clienteEncontrado);


/* 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.*/

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    }
  ];

let banco = {
    clientes: arrayCuentas,
    deposito: function(nombre,pago) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombre) {
                this.clientes[i].saldoEnPesos += pago;
                return this.clientes[i];

            }
            
        }
    return "Cliente no encontrado";
    }
};

let clienteEncontrado = banco.deposito("Ramon Connell",500000000);
 console.log(clienteEncontrado);

/* 5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.*/

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    }
  ];

let banco = {
    clientes: arrayCuentas,
    extracion: function(nombre,pago) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombre ){
                if(this.clientes[i].saldoEnPesos >= pago){
                    this.clientes[i].saldoEnPesos -= pago;
                return "Extracción realizada correctamente, su nuevo saldo es: " + this.clientes[i].saldoEnPesos;
                }else{
                    return "Fondos insuficientes" 
                }
            }
            
        }
    return "Cliente no encontrado";
    }
};

let clienteEncontrado = banco.extracion("Ramon Connell",5000);
 console.log(clienteEncontrado);

 //Bonus extra
 /*Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 
Ejemplo: 
let  array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]*/
let  array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ];
let cadena = "";
function propiedadUnica(array, cadena ){
    let arrayNew=[];
    for(let i=0;i<array.length;i++){
        arrayNew[i]={};
        arrayNew[i][cadena] = array[i][cadena];
    }
    return arrayNew;
}

console.log(propiedadUnica(array, "nombre")); // [{ nombre: 'Lean' }, { nombre: 'Eze' }]
console.log(propiedadUnica(array, "edad"));   // [{ edad: 27 }, { edad: 49 }]

//Calculador de notas:

/*Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
Nombre
Número de legajo
Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses todos los métodos y propiedades que puedan hacer falta para que el programa funcione correctamente de la manera solicitada.*/

let alumno = 
{
    nombre:"Pepito Perez",
    nLegajo: 12345,
    notas:[4,8,9,7,7,8,9]
    }

function aprobacion(criterio){
    let promedio=0;
    let sumatoria=0;
    for(let i=0;i<alumno.notas.length;i++){
        sumatoria += alumno.notas[i];
    }
    promedio=sumatoria/alumno.notas.length;
    if(promedio>=criterio){
        return "Felicidades aprobaste con: " + promedio;
    }else{
    return "Nos vemos el siguiente semestre, reprobaste con: " + promedio;
    }
}

console.log(aprobacion(8));



