"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// O ECMAScript introduziu classes no JavaScript, substituindo as funções construtoras. As classes têm um construtor para inicializar os atributos. A palavra reservada 'extends' permite a herança entre classes. Melhorias no encapsulamento permitem criar membros privados facilmente, usando '#' antes do nome da propriedade. Estes membros só são acessíveis dentro da própria classe.
var Pokemon = /*#__PURE__*/function () {
  function Pokemon(nomeDoPokemo, tipoDoPokemon) {
    _classCallCheck(this, Pokemon);
    _defineProperty(this, "hp", 100);
    this.nome = nomeDoPokemo;
    this.tipo = tipoDoPokemon;
  }
  return _createClass(Pokemon, [{
    key: "atacar",
    value: function atacar(nomeDoAtaque) {
      console.log("".concat(this.nome, " atacou com o ").concat(nomeDoAtaque));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      this.hp -= 10;
      console.log("O life do ".concat(this.nome, " agora \xE9 de: ").concat(this.hp, ";"));
    }
  }]);
}();
;
var Raichu = /*#__PURE__*/function (_Pokemon2) {
  function Raichu() {
    _classCallCheck(this, Raichu);
    return _callSuper(this, Raichu, ['Raichu do Bil', 'elÉtrico']);
  }
  _inherits(Raichu, _Pokemon2);
  return _createClass(Raichu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com ESPIRAL DE TROV\xD5ES"));
    }
  }]);
}(Pokemon);
var Pikachu = /*#__PURE__*/function (_Pokemon3) {
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _callSuper(this, Pikachu, ['Pikachu do Ash', 'ElétriC0']);
  }
  _inherits(Pikachu, _Pokemon3);
  return _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com CHOQUE DO TROV\xC3O"));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      this.hp -= 20;
      console.log("O life do ".concat(this.nome, " agora \xE9 de: ").concat(this.hp, ";"));
    }
  }]);
}(Pokemon); //RPG
var raichu = new Raichu();
var pikachu = new Pikachu();
console.log("".concat(raichu.nome, " \xE9 instanceof Pokemon:"), raichu instanceof Pokemon);
console.log("".concat(pikachu.nome, " \xE9 instanceof de Raichu:"), pikachu instanceof Raichu);
console.log(pikachu);
console.log(raichu);
pikachu.atacar();
raichu.recebeuAtaque();
pikachu.atacar();
pikachu.atacar();
raichu.recebeuAtaque();
raichu.atacar();
pikachu.recebeuAtaque();
raichu.atacar();
pikachu.recebeuAtaque();
console.log(raichu.hp);
console.log(pikachu.hp);