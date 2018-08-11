"use strict";
function Lamp(name) {
   Device.call(this, "lamp", name);
   this._power = Lamp.MIN_VALUE_POWER;
}
   Lamp.MIN_VALUE_POWER = 0;
   Lamp.MAX_VALUE_POWER = 100;
   Lamp.prototype = Object.create(Device.prototype);
   Lamp.prototype.constructor = Lamp;

   Lamp.prototype.getPower = function() {
      return this._power;
   };
   Lamp.prototype.setPower = function(value){
      if (value>=Lamp.MIN_VALUE_POWER && value<=Lamp.MAX_VALUE_POWER) {
      this._power = value;
    }
    this.isPowered();
   };
   Lamp.prototype.plusPower = function() {
      if (this._power < Lamp.MAX_VALUE_POWER) {
         this._power++;
      } 
   };
   Lamp.prototype.minusPower = function() {
      if(this._power > Lamp.MIN_VALUE_POWER) {
         this._power--;
      } else {
      this.isPowered();
      }
   };
   Lamp.prototype.isPowered = function() {
      if (this._power != Lamp.MIN_VALUE_POWER) {
         this.on();
      } else {
         this.off();
      }
   };
