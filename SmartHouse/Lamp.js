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
   Lamp.prototype.setPower = function(value) {
      if (value < this.MIN_VALUE_POWER || value > this.MAX_VALUE_POWER || (value % 5)){
         throw new RangeError("Incorrect value power. Value power must be multiple of five and in range from " + this.MIN_VALUE_POWER + " to " + this.MAX_VALUE_POWER);
      } else {
         this._power = value;
      }
   };
   Lamp.prototype.plusPower = function() {
      if (this._power < this.MAX_VALUE_POWER) {
         this._power += 5;
      } else {
         this.isPowered();
      }
   };
   Lamp.prototype.minusPower = function() {
      if(this._power > this.MIN_VALUE_POWER) {
         this._power -= 5;
      } else {
         this.isPowered();
      }
   };
   Lamp.prototype.isPowered = function() {
      if (this._power == this.MIN_VALUE_POWER) {
         this.off();
      } else {
         this.on();
      }
   };
