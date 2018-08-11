"use strict";
class Lamp extends Device{
   constructor(name){
      super ("lamp", name);
      Lamp.MIN_VALUE_POWER = 0;
      Lamp.MAX_VALUE_POWER = 100;
      this._power = Lamp.MIN_VALUE_POWER;
   }

   get() {
      return this._power;
   }
   set(value){
      if (value>=Lamp.MIN_VALUE_POWER && value<=Lamp.MAX_VALUE_POWER) {
         this._power = value;
      }
      this.isPowered();
   }
   plusPower() {
      if (this._power < Lamp.MAX_VALUE_POWER) {
         this._power++;
      } 
   }
   minusPower() {
      if(this._power > Lamp.MIN_VALUE_POWER) {
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
