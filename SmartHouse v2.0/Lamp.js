"use strict";
class Lamp extends Device {
   constructor(name) {
      super ("lamp", name);
      this._power = Lamp.MIN_VALUE_POWER;
   }
   static get MAX_VALUE_POWER() {
      return 100;
   }
   static get MIN_VALUE_POWER() {
      return 0;
   }
   get power() {
      return this._power;
   } 
   plusPower() {
      if (this._power < Lamp.MAX_VALUE_POWER) {
         this._power++;
      } 
   }
   minusPower() {
      if (this._power > Lamp.MIN_VALUE_POWER) {
         this._power--;
      } else {
         this.isPowered();
      }
   }
   isPowered() {
      if (this._power != Lamp.MIN_VALUE_POWER) {
         this.on();
      } else {
         this.off();
      }
   }
}
