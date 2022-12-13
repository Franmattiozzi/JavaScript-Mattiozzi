let nombreCliente = prompt("PARA VERIFICAR SU SALDO PENDIENTE INGRESE SU NOMBRE");

let saldoPendiente = 5000;

let mensaje = nombreCliente + " tiene un saldo pendiente de " + "$" + saldoPendiente;

console.log(mensaje);

let deuda = prompt("Escriba pagar para cancelar su deuda");

while(deuda != "pagar") {
    console.log(deuda);
    deuda = prompt("Escriba pagar para cancelar su deuda");
}


function deudaPagada(){
    alert("Ya no posees deudas!");
    console.log(nombreCliente + " Ya no posee deudas!! ");
}

if(deuda = "pagar") {
    deudaPagada();
}


class deudor {
    constructor(nombre, deuda){
        this.nombre = nombre;
        this.deuda = deuda;
    }
}

const Emiliano = new deudor("Emiliano", 10000)
const Lisandro = new deudor("Lisandro", 5000)
const Marcos = new deudor("Marcos", 2000)
const Julian = new deudor("Julian", 3000)
const Nicolas = new deudor("Nicolas", 12000)
const Lionel = new deudor("Lionel", 10)
const Lautaro = new deudor("Lautaro", 25000)
const Angel = new deudor("Angel", 8000)

const arrayDeudor = [Emiliano, Lisandro, Marcos, Julian, Nicolas, Lionel, Lautaro, Angel]

console.log("Deudores: ");
console.log(arrayDeudor);

console.log("ForEach: ");

arrayDeudor.forEach(deudor => console.log(deudor));

let nombreDeudor = prompt("PARA BUSCAR POR OTRO DEUDOR INGRESE EL NOMBRE");

const buscado = arrayDeudor.find(deudor => deudor.nombre === nombreDeudor);

console.log("Find: ");
console.log(buscado);