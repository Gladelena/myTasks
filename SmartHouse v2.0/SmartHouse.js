"use strict";
class SmartHouse {
   constructor() {
      this._devices = {
         tv: [],
         condition:[],
         lamp: []
      };
   }

   addDevice(type, name) {
      if(!this._devices[type].includes(this.get(type, name))){ 
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
   }
   addDevices(device) {
      if (this._devices.hasOwnProperty(device.getType())) {
         this._devices[device.getType()].push(device);
      }
   }
   get(type, name){
      var array = this._devices[type];
      for (var i in array) {
         if (array[i].get() == name) {
            return array[i];
         } 
      }
      return "there is no such device";
   }

   deleteDeviceByName(type, name) {
      var array = this._devices[type];
         for (var i in array) {
            if(array[i].get() == name) {
               array.splice(i, 1);
         }
      }
   }
}
var smart = new SmartHouse();
smart.addDevice("tv", "qwe");
smart.addDevice("lamp", "asd");
smart.addDevice("condition", "zxc"); 


