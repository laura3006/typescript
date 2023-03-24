"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
// Creamos las personas
var persona1 = new persona_1.Persona("Laura", "Jimenez", 30, "47474747A", new Date(1992, 6, 13), "azul", "femenino", [new direccion_1.Direccion("Calle Margarita", 5, "1º", "A", 18123, "Barcelona", "Barcelona")], [new mail_1.Mail("personal", "laujim@gmail.com")], [new telefono_1.Telefono("personal", 687774077)], "No contactar por la mañana");
var persona2 = new persona_1.Persona("Anna", "Lopez", 33, "34523109N", new Date(1991, 11, 21), "amarillo", "femenino", [new direccion_1.Direccion("Calle Amapola", 38, "8º", "B", 47893, "Terrassa", "Barcelona")], [new mail_1.Mail("personal", "alo@gmail.com")], [new telefono_1.Telefono("personal", 687473509)], "Llamar los viernes");
var persona3 = new persona_1.Persona("Robert", "Hurtado", 30, "45671211S", new Date(1992, 7, 26), "verde", "masculino", [new direccion_1.Direccion("Calle Rosa", 58, "2º", "A", 18259, "Sabadell", "Barcelona")], [new mail_1.Mail("personal", "robhurtado@gmail.com")], [new telefono_1.Telefono("personal", 937892234)], "Llamar por la mañana los lunes y jueves");
// Mostramos el resultado
console.log("****** Información persona 1:");
persona1.mostrar_datospersonales();
console.log("Información persona 2:");
persona2.mostrar_datospersonales();
console.log("Información persona 3:");
persona3.mostrar_datospersonales();
// Buscamos la persona a modificar por dni
console.log("Cambios de datos persona con DNI 47474747A:");
var personaEncontrada = [persona1, persona2, persona3].find(Persona => Persona.dni === "47474747A");
// Añadimos las nuevas direcciones, mails y teléfonos
if (personaEncontrada) {
    var nuevaDireccion = personaEncontrada.direcciones;
    nuevaDireccion.push(new direccion_1.Direccion("Calle Nueva", 2, "3º", "B", 90983, "Cerdanyola", "Barcelona"));
    personaEncontrada.direcciones = nuevaDireccion;
    for (let i = 0; i < nuevaDireccion.length; i++) {
        console.log("Dirección " + (i + 1) + ": " + nuevaDireccion[i].mostrar_direccion());
    }
    var nuevoTelefono = personaEncontrada.telefonos;
    nuevoTelefono.push(new telefono_1.Telefono("trabajo", 989898989));
    personaEncontrada.telefonos = nuevoTelefono;
    for (let i = 0; i < nuevoTelefono.length; i++) {
        console.log("Teléfono " + (i + 1) + ": " + nuevoTelefono[i].mostrar_telefonos());
    }
    var nuevoEmail = personaEncontrada.mails;
    nuevoEmail.push(new mail_1.Mail("trabajo", "nuevolaura@outlook.com"));
    personaEncontrada.mails = nuevoEmail;
    for (let i = 0; i < nuevoEmail.length; i++) {
        console.log("Email " + (i + 1) + ": " + nuevoEmail[i].mostrar_mail());
    }
}
