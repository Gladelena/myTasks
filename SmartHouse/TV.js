"use strict";
function TV(name) {
   Device.call(this, "tv", name);
   this._name = name;
   this.channelNumber = TV.MIN_CHANNEL_NUMBER;
   this.volume = 15;
}

   TV.MIN_CHANNEL_NUMBER = 1;
   TV.MAX_CHANNEL_NUMBER = 200;
   TV.MIN_VOLUME = 0;
   TV.MAX_VOLUME = 50;
   
   TV.prototype = Object.create(Device.prototype);
   TV.prototype.constructor = TV;

   TV.prototype.getChannel = function() {
      return this.channelNumber;
   };
   TV.prototype.setChannel = function(channelNumber) {
      if (channelNumber < TV.MIN_CHANNEL_NUMBER || channelNumber > TV.MAX_CHANNEL_NUMBER) {
         throw new RangeError("Incorrect channel number");
      } else {
         this.channelNumber = channelNumber;
      }
   };
   TV.prototype.plusChannel = function() {
      if (this.channelNumber >= TV.MIN_CHANNEL_NUMBER && this.channelNumber < TV.MAX_CHANNEL_NUMBER) {
         this.channelNumber++;
      }
   };
   TV.prototype.minusChannel = function() {
      if(this.channelNumber > TV.MIN_CHANNEL_NUMBER) {
         this.channelNumber--;
      }
   };
   TV.prototype.getVolume = function() {
      return this.volume;
   };
   TV.prototype.plusVolume = function() {
      if(this.volume < TV.MAX_VOLUME) {
         this.volume++;
      }
   };
   TV.prototype.minusVolume = function() {
      if(this.volume > TV.MIN_VOLUME) {
         this.volume--;
      }
   };
