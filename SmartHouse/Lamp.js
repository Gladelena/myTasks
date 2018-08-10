"use strict";
function Lamp(name) {
   Device.call(this, "lamp", name);
   this.MIN_VALUE_POWER = 0;
   this.MAX_VALUE_POWER = 100;
   this._power = this.MIN_VALUE_POWER;
}

   Lamp.prototype = Object.create(Device.prototype);
   Lamp.prototype.constructor = Lamp;

   Lamp.prototype.getPower = function() {
      return this._power;
   };
     Lamp.prototype.setPower = function(value){
    if (value>=this.MIN_VALUE_POWER && value<=this.MAX_VALUE_POWER) {
      this._power = value;
    }
    this.isPowered();
  };
   Lamp.prototype.plusPower = function() {
      if (this._power < this.MAX_VALUE_POWER) {
         this._power++;
      } 
   };
   Lamp.prototype.minusPower = function() {
      if(this._power > this.MIN_VALUE_POWER) {
         this._power--;
      } else {
      this.isPowered();
      }
   };
   Lamp.prototype.isPowered = function() {
      if (this._power != this.MIN_VALUE_POWER) {
         this.on();
      } else {
         this.off();
      }
   };
