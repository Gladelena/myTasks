"use strict";
function Lamp(name) {
   Device.call(this, "lamp", name);
   this.MIN_VALUE_POWER = 0;
   this.MAX_VALUE_POWER = 100;
   this._currentLight = 50;
}

   Lamp.prototype = Object.create(Device.prototype);
   Lamp.prototype.constructor = Lamp;

   Lamp.prototype.getPower = function() {
      return this._currentLight;
   };
   Lamp.prototype.plusPower = function() {
      if (this._currentLight < this.MAX_VALUE_POWER) {
         this._currentLight++;
      } 
   };
   Lamp.prototype.minusPower = function() {
      if(this._currentLight > this.MIN_VALUE_POWER) {
         this._currentLight--;
      } else {
      this.isPowered();
      }
   };
   Lamp.prototype.isPowered = function() {
      if (this._currentLight != this.MIN_VALUE_POWER) {
         this.on();
      } else {
         this.off();
      }
   };
