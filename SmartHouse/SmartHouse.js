"use strict";
function SmartHouse() {
   this._devices = {
      tv: [],
      condition:[],
      lamp: []
   };
}

   SmartHouse.prototype.addDevice = function (type, name) {
      if (!this._devices[type].includes(this.getDeviceByName(type, name))){ 
         switch (type) {
            case "tv":
               this._devices.tv.push(new TV(name));
               break;
            case "condition":
               this._devices.condition.push(new Condition(name));
               break;
            case "lamp":
               this._devices.lamp.push(new Lamp(name));
               break;
         }
      } else {
         throw new TypeError("Name of device already exists");
      }
   };

   SmartHouse.prototype.getDeviceByName = function(type, name){
      var array = this._devices[type];
      for (var i in array) {
         if (array[i].getName()==name) {
            return array[i];
         }
      }
         return "there is no such device";
   };

   SmartHouse.prototype.deleteDeviceByName = function(type, name) {
      var array = this._devices[type];
      for (var i in array) {
         if(array[i].getName()==name) {
            delete array[i];
         }
      }
   };

  
var Smart = new SmartHouse();
Smart.addDevice("tv", "Samsung Hall");
Smart.addDevice("tv", "Sony Bedroom");
Smart.addDevice("lamp", "Lamp Kitchen");
Smart.addDevice("lamp", "Lamp Hall");
Smart.addDevice("lamp", "Lamp Bathroom");
Smart.addDevice("condition", "Toshiba Hall");
Smart.addDevice("condition", "Toshiba Bedroom");
Smart.deleteDeviceByName("lamp", "Lamp Kitchen");

