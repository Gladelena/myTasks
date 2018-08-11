"use strict";
class Device {
   constructor (type, name){
   this._type = type;
   this._name = name;
   this._isOn = false;
}
   on() {
      this._isOn = true;
   };
   off() {
      this._isOn = false;
   }
   get(){
      return this._name;
   };
   set(name){
      this.name = name;
   };
   get(){
      return this._type;
   };
}


