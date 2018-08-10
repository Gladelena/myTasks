'use strict';
class View {
   constructor(){
   }

   static setDeviceView (device){
      if (device instanceof Lamp)
         View.setLampView(device);
   }
   static setLampView(lamp){
      let progress = document.getElementById("lamp").querySelector("progress");
      progress.value = lamp.getPower();
      let changePower = lamp.getPower();
      document.getElementById("changePower").innerHTML = "power: "+changePower;
   }

   static addSelector(device){
      let container = document.getElementById(device.getType()+"Select");
      let content = "<option id=\""+device.getName()+device.getType()+"id"+"\" value=\""+device.getName()+"\">"+device.getName()+"</option>";
      container.innerHTML += content;
      container.value = device.getName();
   }

   addDeviceButton(){
      let addDeviceBtn = document.getElementById('btn1');
      addDeviceBtn.addEventListener("click", function() {
         let type = document.getElementById("type").value;
         let name = document.getElementById('input1').value;
         smartHouse.addDevice(type, name);
         View.addSelector(smartHouse.getDeviceByName(type, name));
         View.setDeviceView(smartHouse.getDeviceByName(type, name));
      });
   }

   deleteDeviceButton() {
      let buttons = Array.from(document.getElementsByClassName("deleteDevice"));
      buttons.forEach(function(e){
         e.addEventListener("click", function(){
            let type = e.parentNode.parentNode.parentNode.id;
            let name = document.getElementById(type).querySelector("select").value;
            let option = document.getElementById(name.toString()+type.toString()+"id");
            let select = option.parentNode;
            smartHouse.deleteDeviceByName(type, name);
            select.removeChild(option);
            if (select.children.length>0) {
               select.value = select.firstChild.value;
               View.setDeviceView(smartHouse.getDeviceByName(type, select.value));
               smartHouse.deleteDeviceByName(type, name);
            }
         });
      });
   }

   setSelector(){
      let target = document.getElementById("controller").querySelectorAll("select");
      target.forEach(function(e){
         e.addEventListener("change", function(){
            let type = e.parentNode.parentNode.parentNode.parentNode.id;
            let name = e.value;
            let device = smartHouse.getDeviceByName(type,name);
            View.setDeviceView(device);
         });
      });
   }

   setLampButtons(){
      let btnMinus = document.getElementById("lampMinus");
      let btnPlus = document.getElementById("lampPlus");
      let type = "lamp";

      btnMinus.addEventListener("click", function () {
         let name = document.getElementById(type).querySelector("select").value;
         let lamp = smartHouse.getDeviceByName(type, name);
         lamp.minusPower();
         View.setLampView(lamp);
      });
      btnPlus.addEventListener("click", function () {
         let name = document.getElementById(type).querySelector("select").value;
         let lamp = smartHouse.getDeviceByName(type, name);
         lamp.plusPower();
         View.setLampView(lamp);
      });
   }
}
