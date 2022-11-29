let nombreCliente = prompt("PARA VERIFICAR SU SALDO PENDIENTE INGRESE SU NOMBRE");

let saldoPendiente = 5000;

let mensaje = nombreCliente + " tiene un saldo pendiente de " + "$" + saldoPendiente;

console.log(mensaje);

let deuda = prompt("Escriba pagar para cancelar su deuda");

while(deuda != "pagar") {
    console.log(deuda);
    deuda = prompt("Escriba pagar para cancelar su deuda");
}

if(deuda = "pagar") {
    alert("Ya no posees deudas!");
    console.log(nombreCliente + " Ya no posee deudas!! ");
}