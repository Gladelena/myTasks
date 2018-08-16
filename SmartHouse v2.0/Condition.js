"use strict";
class Condition extends Device{
   constructor(name){
      super ("condition", name);
      this._temperature = 23;
      this._modes = ["cool", "heat", "auto"];
      this._currentMode = this._modes[2];
   }
   static get MAX_VALUE_TEMPER(){
      return 30;
   }
   static get MIN_VALUE_TEMPER(){
      return 0;
   }
   get temperature(){
      return this._temperature;
   }
   plusTemperature() {
      if (this._temperature < Condition.MAX_VALUE_TEMPER) {
         this._temperature++;
      }
   }
   minusTemperature() {
      if (this._temperature > Condition.MIN_VALUE_TEMPER){
         this._temperature--;
      }
   }
   get modes() {
      return this._currentMode;
   }
   set modes(value) {
      if (this._modes.includes(value)) {
         this._currentMode = value;
      }
      if (this._currentMode == "cool") {
         this._temperature = 16;
      }
      if (this._currentMode == "heat") {
         this._temperature = 27;
      }
   }
}
