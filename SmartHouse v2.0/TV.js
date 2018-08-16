"use strict";
class TV extends Device{
   constructor(name){
      super ("tv", name);
      this._name = name;
      this._channelNumber = TV.MIN_CHANNEL_NUMBER;
      this._volume = 15;
   }
   static get MIN_CHANNEL_NUMBER(){
      return 1;
   }
   static get MAX_CHANNEL_NUMBER(){
      return 200;
   }
   static get MIN_VOLUME_LEVEL(){
      return 0;
   }
   static get MAX_VOLUME_LEVEL(){
      return 100;
   }
   get channelNumber() {
      return this._channelNumber;
   }
   set channelNumber(channel) {
      if (channel < TV.MIN_CHANNEL_NUMBER || channel > TV.MAX_CHANNEL_NUMBER) {
         throw new RangeError("Incorrect channel number");
      } else {
         this._channelNumber = channel;
      }
   }
   plusChannel() {
      if (this._channelNumber >= TV.MIN_CHANNEL_NUMBER && this._channelNumber < TV.MAX_CHANNEL_NUMBER) {
         this._channelNumber++;
      }
   }
   minusChannel() {
      if(this._channelNumber > TV.MIN_CHANNEL_NUMBER) {
         this._channelNumber--;
      }
   }
   get volume() {
      return this._volume;
   }
   plusVolume() {
      if(this._volume < TV.MAX_VOLUME_LEVEL) {
         this._volume++;
      }
   }
   minusVolume() {
      if(this._volume > TV.MIN_VOLUME_LEVEL) {
         this._volume--;
      }
   }
}
