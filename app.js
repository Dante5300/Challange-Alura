// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables

let listaAmigos = []; //Ayudara a guaradar los amigos que se ingresen en la pagina web
let amigo = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos"); // Ayudara a mostrar los amigos que ingrese el usuario
let resultadoDeSorteo = document.getElementById("resultado");//seleccionara el amigo secreto

//Funciones

function agregarAmigo() {  //agregarAmigo esta en el index del html y es parte del evento del boton de añadir

    if (amigo.value == ""){ //ciclo por si esta vacia la casilla de añadir amigo
        alert("Porfavor ingresa un amigo"); 
    }

    listaAmigos.push(amigo.value); // Añadira a nuestro arreglo los nombres que se ingresen
    listaDeAmigos.innerHTML = listaDeAmigos.innerHTML + `<li> ${amigo.value} </li>`; //imprime los nombres ingresados en lista, esto es texto de html 

}


function sortearAmigo(){
    let amigoRandom = Math.floor(Math.random() * listaAmigos.length); // selecciona a cualquier amigo de la lista
    let amigoSecreto = listaAmigos[amigoRandom]; //guarda el amigo secreto seleccionado
    resultadoDeSorteo.innerHTML = `<li>${amigoSecreto} </li>`; //imprime al amigo secreto
}