//js

//Ejercicio 0) TRABAJANDO CON LA CONSOLA DEL NAVEGADOR

const nombre = "Gabriel"
const apellido = "Rodríguez"

let yo = document.getElementById("yo")

const miNombre = () => {
    console.log(nombre);
    yo.innerHTML = "Mi nombre es: " + nombre;
}
const miApellido = () => {
    console.log(apellido);
    yo.innerHTML = "Mi apellido es: " + apellido;
}
const nombreCompleto = () => {
    console.log(nombre + " " + apellido);
    yo.innerHTML = "Soy " + nombre + " " + apellido;
}

//Ejercicio 1) Ensalada de Frutas

let ensaladaDeFrutas = ["manzana", "banana", "pera", "naranja", "mandarina"];

function lasFrutas(ensaladaDeFrutas) {
    let lista = document.getElementById("frutas");
    console.log("las frutas que hay en la ensalada son");
    for (let fruta in ensaladaDeFrutas) {
        console.log(ensaladaDeFrutas[fruta]);
        lista.innerHTML += (
            "<li>" + ensaladaDeFrutas[fruta] + "</li>"
        );

    }
}

//Ejercicio 2) Promedio Edades

let edades = [7, 10, 23, 40, 8];
const fijarEdades = document.getElementById("edades")
fijarEdades.innerHTML = edades;

function promedio(edades) {
    let result = document.getElementById("result");
    let sum = 0;
    for (let i in edades) {
        sum += edades[i]
    };
    let prom = sum / edades.length;
    result.innerHTML = prom;
    console.log("las edades son: " + edades);
    console.log("el promedio de edad es: " + prom)
}

//Ejercicio 3) Mis Amigos

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

function esAmigo(amigo) {
    let listaAmigos = document.getElementById("listaAmigos");
    let misAmigos = [];
    console.log("Mis amigos son: ");
    for (let i in amigo) {
        if (amigo[i].length == 4) {
            misAmigos += amigo[i];
            listaAmigos.innerHTML += "<li>" + amigo[i] + "</li>";
            console.log(amigo[i]);
        }
    }
}

//Ejercicio 4) Lista de Súper

const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];

function laLista(listaDeSuper) {
    let listaSuper = document.getElementById("listaSuper");
    listaDeSuper.push("shampoo");
    listaDeSuper.shift();
    console.log("la lista del súper contiene " + listaDeSuper.length + " elementos");
    if (listaDeSuper.indexOf("shampoo")) {
        console.log("la lista incluye shampoo!")
    }
    for (let i in listaDeSuper) {
        listaSuper.innerHTML += "<li>" + listaDeSuper[i] + "</li>"
    }
}

//Ejercicio 5) Saludo

function saludo() {
    alert("Bienvenido/a!!")
}

// Ejercicio 6) Calculando el mayor

function calculoMayor(num1, num2) {
    if (num1 > num2) {
        alert("El mayor es " + num1)
    } else if (num2 > num1) {
        alert("El mayor es " + num2)
    } else if (num1 === num2) {
        alert("Los números ingresados son iguales")
    }
}

function calculadoraMayor() {
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    if (num1 > num2) {
        alert("El mayor es " + num1)
    } else if (num2 > num1) {
        alert("El mayor es " + num2)
    } else if (num1 === num2) {
        alert("Los números ingresados son iguales")
    }
}

//Ejercicio 7) Mis Amigos 2

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];

function filtrarAmigos(arr) {
    let otrosAmigos = document.getElementById("otrosAmigos");
    let losAmigos = arr.filter(i => i.length == 4);
    console.log(losAmigos);
    otrosAmigos.innerHTML = losAmigos;
}

//Ejercicio 8) Tirar Dado

const dado = [1, 2, 3, 4, 5, 6];

const randomNumber = document.getElementById("randomNumber");

function tirarDado() {
    let random = Math.floor(Math.random() * dado.length);
    console.log(dado[random]);
    randomNumber.innerHTML = dado[random];
}

//Ejercicio 9) Creando y consultando un objeto

const toDoList = {
    tipoDeTarea: "Compras",
    dia: "Martes",
    productos: ["harina", "leche", "huevos"],
    cantidadDeProductos: 3,
    estado: "Pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!")
    }
};

let cosa = document.getElementById("cosa")

const mostrarTipo = () => {
    console.log(toDoList['tipoDeTarea'])
    cosa.innerHTML = toDoList['tipoDeTarea'];
}
const mostrarDia = () => {
    console.log(toDoList.dia)
    cosa.innerHTML = toDoList.dia
}
const mostrarCantidad = () => {
    console.log(toDoList['cantidadDeProductos'])
    cosa.innerHTML = toDoList['cantidadDeProductos'];
}
const mostrarProductos = () => {
    console.log(toDoList.productos)
    cosa.innerHTML = toDoList.productos;
}
const mostrarAlerta = () => {
    console.log(toDoList.notificacion());
}

//Ejercicio 10) Consultando valores

const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}

let her = document.getElementById("her")

const mostrarNombre = () => {
    console.log(superHeroes.members[1].name);
    her.innerHTML = "Su nombre es: " + superHeroes.members[1].name;
}
const mostrarEdad = () => {
    console.log(superHeroes.members[1].age)
    her.innerHTML = "Su edad es: " + superHeroes.members[1].age + " años";
}
const mostrarPoder = () => {
    console.log(superHeroes.members[1].powers[2])
    her.innerHTML = "Uno de sus poderes es: " + superHeroes.members[1].powers[2];
}
const mostrarSquad = () => {
    console.log(superHeroes.squadName)
    her.innerHTML = "El nombre de su equipo es: " + superHeroes.squadName;
}

//Ejercicio 11) Corrígeme la frase

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const frasesExclamadas = frases.map((frase) => ("¡" + frase + "!"))

let laFrase = document.getElementById("laFrase");

const mostrarFrases = () => {
    console.log(frases);
    laFrase.innerHTML = frases;
}

const mostrarFrasesExc = () => {
    console.log(frasesExclamadas);
    laFrase.innerHTML = frasesExclamadas;
}