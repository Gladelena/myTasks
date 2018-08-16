"use strict";
class Device {
   constructor (type, name){
   this._type = type;
   this._name = name;
   this._isOn = false;
}
   on() {
      this._isOn = true;
   }
   off() {
      this._isOn = false;
   }
   get name(){
      return this._name;
   }
   set name(name){
      this._name = name;
   }
   get type(){
      return this._type;
   }
}
