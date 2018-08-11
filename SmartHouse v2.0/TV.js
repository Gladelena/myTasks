"use strict";
class TV extends Device{
   constructor(name){
      super ("tv", name);
      this._name = name;
      TV.MIN_CHANNEL_NUMBER = 1;
      TV.MAX_CHANNEL_NUMBER = 200;
      TV.MIN_VOLUME_LEVEL = 0;
      TV.MAX_VOLUME_LEVEL = 100;
      TV.channelNumber = TV.MIN_CHANNEL_NUMBER;
      TV.volume = 15;
   }

   get() {
      return this.channelNumber;
   }
   set(channelNumber) {
      if (channelNumber < TV.MIN_CHANNEL_NUMBER || channelNumber > TV.MAX_CHANNEL_NUMBER) {
         throw new RangeError("Incorrect channel number");
      } else {
         this.channelNumber = channelNumber;
      }
   }
   plusChannel() {
      if (this.channelNumber >= TV.MIN_CHANNEL_NUMBER && this.channelNumber < TV.MAX_CHANNEL_NUMBER) {
         this.channelNumber++;
      }
   }
   minusChannel() {
      if(this.channelNumber > TV.MIN_CHANNEL_NUMBER) {
         this.channelNumber--;
      }
   }
   get() {
      return this.volume;
   }
   plusVolume() {
      if(this.volume < TV.MAX_VOLUME) {
         this.volume++;
      }
   }
   minusVolume() {
      if(this.volume > TV.MIN_VOLUME) {
         this.volume--;
      }
   }
}
