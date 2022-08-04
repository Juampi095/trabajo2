//Saludo
function saludar() {
    let nombre = prompt("Cual es tu nombre?");
    alert("¡Bienvenido a CarArt! " + nombre);
}
saludar();

// //Marca de Autos


function marcaDeAuto() {

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
}
marcaDeAuto();







