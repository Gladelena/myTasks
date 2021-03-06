"use strict";
function Condition(name) {
   Device.call(this, "condition", name);
   this._temperature = 23;
   this._modes = ["cool","heat","auto"];
   this._currentMode = this._modes[2];
}
   Condition.MAX_VALUE_TEMPER = 30;
   Condition.MIN_VALUE_TEMPER = 15;
   
   Condition.prototype = Object.create(Device.prototype);
   Condition.prototype.constructor = Condition;

   Condition.prototype.plusTemperature = function(){
      if (this._temperature < Condition.MAX_VALUE_TEMPER) {
         this._temperature++;
      }
   };
   Condition.prototype.minusTemperature = function(){
      if (this._temperature > Condition.MIN_VALUE_TEMPER){
         this._temperature--;
      }
   };
   Condition.prototype.getTemperature = function(){
      return this._temperature;
   };
   Condition.prototype.setMode = function(value){
      if (this._modes.includes(value)){
         this._currentMode = value;
      }
      if (this._currentMode == "cool"){
         this._temperature = 16;
      }
      if (this._currentMode == "heat"){
         this._temperature = 26;
      }
   };
   Condition.prototype.getMode = function() {
      return this._currentMode;
   };
