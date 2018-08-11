"use strict";
class Condition extends Device{
   constructor(name){
      super ("condition", name);
      Condition.MAX_VALUE_TEMPER = 30;
      Condition.MIN_VALUE_TEMPER = 15;
      this._temperature = 23;
      this._modes = ["cool", "heat", "auto"];
      this._currentMode = this._modes[2];
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
   get(){
      return this._temperature;
   }
   set(value) {
      if (this._modes.includes(value)) {
         this._currentMode = value;
      }
      if (this._currentMode == "cool") {
         this._temperature = 16;
      }
      if (this._currentMode == "heat") {
         this._temperature = 26;
      }
   }
   get() {
      return this._currentMode;
   }
}
