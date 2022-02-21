var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clases en TypeScript
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Lionel', 'Messi');
// Clases con constructor breve (si declaramos los parámetros del constructor con
// modificador de acceso se crean las propiedades con el mismo nombre)
var Player = /** @class */ (function () {
    function Player(name, surname, goals) {
        this.name = name;
        this.surname = surname;
        this.goals = goals;
    }
    return Player;
}());
var jugador2 = new Player('Lionel', 'Messi', 0);
var estadoBotonEnvio = {
    hidden: false,
    disabled: true,
    waiting: false
};
var Proveedor = /** @class */ (function () {
    function Proveedor(razonSocialIn, cifIn) {
        this.razonSocial = razonSocialIn;
        this.cif = cifIn;
    }
    Proveedor.prototype.getCif = function () {
        return this.cif;
    };
    Proveedor.prototype.setCif = function (cif) {
        this.cif = cif;
    };
    return Proveedor;
}());
// Herencia en TypeScript
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.mobileNumber = '';
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, role) {
        var _this = _super.call(this, name, age) || this;
        _this.role = role;
        return _this;
    }
    return Manager;
}(Employee));
