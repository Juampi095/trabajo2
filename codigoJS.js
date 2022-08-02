// //Marca de Autos
let marcaAutos = prompt("Ingresa la marca y te diremos el precio y la disponibilidad");
switch (marcaAutos) {
    case "lamborghini":
    case "LAMBORGHINI":

        alert("El precio es de $12499 y tenemos en stock");
        break;

    case "pagani":

    case "PAGANI":

        alert("El precio es de $14999 y tenemos en stock");

        break;

    case "ferrari":
    case "FERRARI":
        alert("El precio es de $12999 y tenemos en stock");
        break;

    default:
        alert("No tenemos en stock por el momento, revisa mas tarde");
        break;
}








