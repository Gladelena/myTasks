"use strict";
function Device (type, name) {
   this._type = type;
   this._name = name;
   this._isOn = false;
}
   Device.prototype.on = function () {
      this._isOn = true;
   };
   Device.prototype.off = function() {
      this._isOn = false;
   }
   Device.prototype.getName = function(){
      return this._name;
   };
   Device.prototype.setName = function(name){
      this._name = name;
   };
   Device.prototype.getType = function(){
      return this._type;
   };


