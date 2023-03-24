"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get dni() {
        return this._dni;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    set cumpleanos(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    get mails() {
        return this._mails;
    }
    set mails(mails) {
        this._mails = mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    get notas() {
        return this._notas;
    }
    set notas(notas) {
        this._notas = notas;
    }
    mostrar_datospersonales() {
        console.log("Nombre: " + this._nombre);
        console.log("Apellidos: " + this._apellidos);
        console.log("Edad: " + this._edad);
        console.log("DNI: " + this._dni);
        console.log("Cumpleaños: " + this._cumpleanos);
        console.log("Color favorito: " + this._colorFavorito);
        console.log("Sexo: " + this._sexo);
        for (let i = 0; i < this._direcciones.length; i++) {
            console.log("Dirección " + (i + 1) + ": " + this._direcciones[i].mostrar_direccion());
        }
        for (let i = 0; i < this._mails.length; i++) {
            console.log("Email " + (i + 1) + ": " + this._mails[i].mostrar_mail());
        }
        for (let i = 0; i < this._telefonos.length; i++) {
            console.log("Teléfono " + (i + 1) + ": " + this._telefonos[i].mostrar_telefonos());
        }
        console.log("Notas: " + this._notas);
    }
}
exports.Persona = Persona;
