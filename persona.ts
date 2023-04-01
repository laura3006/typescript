import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor (nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string)
        {
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

        get nombre(): string {
            return this._nombre;
        }

        set nombre(nombre: string) {
            this._nombre = nombre;
        }

        get apellidos(): string {
            return this._apellidos;
        }

        set apellidos(apellidos: string) {
            this._apellidos = apellidos;
        }

        get edad(): number {
            return this._edad;
        }
        
        set edad(edad: number) {
            this._edad = edad;
        }

        get dni(): string {
            return this._dni;
          }
        
          set dni(dni: string) {
            this._dni = dni;
          }
        
          get cumpleanos(): Date {
            return this._cumpleanos;
          }
        
          set cumpleanos(cumpleanos: Date) {
            this._cumpleanos = cumpleanos;
          }
        
          get colorFavorito(): string {
            return this._colorFavorito;
          }
        
          set colorFavorito(colorFavorito: string) {
            this._colorFavorito = colorFavorito;
          }
        
          get sexo(): string {
            return this._sexo;
          }
        
          set sexo(sexo: string) {
            this._sexo = sexo;
          }
        
          get direcciones(): Direccion[] {
            return this._direcciones;
          }
        
          set direcciones(direcciones: Direccion[]) {
            this._direcciones = direcciones;
          }
        
          get mails(): Mail[] {
            return this._mails;
          }
        
          set mails(mails: Mail[]) {
            this._mails = mails;
          }
        
          get telefonos(): Telefono[] {
            return this._telefonos;
          }
        
          set telefonos(telefonos: Telefono[]) {
            this._telefonos = telefonos;
          }
        
          get notas(): string {
            return this._notas;
          }
        
          set notas(notas: string) {
            this._notas = notas;
          }

          public mostrar_datospersonales(): void {

            console.log("Nombre: " + this._nombre);
            console.log("Apellidos: " + this._apellidos);
            console.log("Edad: " + this._edad);
            console.log("DNI: " + this._dni);
            console.log("Cumpleaños: " + this._cumpleanos);
            console.log("Color favorito: " + this._colorFavorito);
            console.log("Sexo: " + this._sexo);
            
            for (let i = 0; i < this._direcciones.length; i++) {
              console.log("Dirección " + (i+1) + ": " + this._direcciones[i].mostrar_direccion());
            }
            
            for (let i = 0; i < this._mails.length; i++) {
              console.log("Email " + (i+1) + ": " + this._mails[i].mostrar_mail());
            }           
            
            for (let i = 0; i < this._telefonos.length; i++) {
              console.log("Teléfono " + (i+1) + ": " + this._telefonos[i].mostrar_telefonos());
            }           

            console.log("Notas: " + this._notas);
        }
}