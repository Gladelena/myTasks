"use strict";
function TV(name) {
   Device.call(this, "tv", name);
   this._name = name;
   this.MIN_CHANNEL_NUMBER = 1;
   this.MAX_CHANNEL_NUMBER = 999;
   this.MIN_VOLUME = 0;
   this.MAX_VOLUME = 100;
   this.channelNumber = this.MIN_CHANNEL_NUMBER;
   this.volume = 15;
}

   TV.prototype = Object.create(Device.prototype);
   TV.prototype.constructor = TV;

   TV.prototype.getChannel = function() {
      return this.channelNumber;
   };
   TV.prototype.isChannelValid = function(channelNumber) {
      if (channelNumber < this.MIN_CHANNEL_NUMBER || channelNumber > this.MAX_CHANNEL_NUMBER) {
         throw new RangeError("Incorrect channel number");
      }
      return true;
   };
   TV.prototype.setChannel = function(channelNumber) {
      if (this.isChannelValid(channelNumber)){
         this.channelNumber = channelNumber;
      }
   };
   TV.prototype.plusChannel = function() {
      if (this.channelNumber >= MIN_CHANNEL_NUMBER && this.channelNumber < MAX_CHANNEL_NUMBER) {
         this.channelNumber++;
      }
   };
   TV.prototype.minusChannel = function() {
      if(this.channelNumber > MIN_CHANNEL_NUMBER) {
         this.channelNumber--;
      }
   };
   TV.prototype.getVolume = function() {
      return this.volume;
   };
   TV.prototype.plusVolume = function() {
      if(this.volume < this.MAX_VOLUME) {
         this.volume++;
      }
   };
   TV.prototype.minusVolume = function() {
      if(this.volume > this.MIN_VOLUME) {
         this.volume--;
      }
   };