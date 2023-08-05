let nombreUsuario = prompt("Ingrese su nombre");
let saludo = "Hola" + " " + nombreUsuario + ", " + "bienvenido a zComputación";
alert(saludo);

const precioGrafica = 300000;
const precioTeclado = 20000;

let costoTotal = 0;

while (true) {
    const opcion = prompt("Si quiere comprar una tarjeta gráfica, ingrese 1. Si quiere comprar un teclado, ingrese 2. Si no desea comprar más productos, ingrese 0:");

    const seleccion = parseInt(opcion);

    if (seleccion === 0) {
        break;
    } else if (seleccion !== 1 && seleccion !== 2) {
        alert("Opción inválida. Verifique el número de producto y escríbalo nuevamente.");
        continue;
    }

    const cantidad = prompt("Ingrese la cantidad que desea comprar:");

    let costoParcial = 0;
    if (seleccion === 1) {
        costoParcial = precioGrafica * cantidad;
    } else if (seleccion === 2) {
        costoParcial = precioTeclado * cantidad;
    }

    costoTotal += costoParcial;
}

alert("El costo total es: " + costoTotal);