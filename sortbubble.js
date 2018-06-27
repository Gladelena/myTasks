"user scrict";
arr = [7, 2, 3, 4, 5, 1, 9];
var ln = arr.length;
console.log("Старый массив " + arr);
for (var i = 0; i < ln-1; i++) {
   for (var j = 0; j < ln-1-i; j++) {
      if (arr[j] > arr[j+1]) {
         var tmp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = tmp;
      }
   }
};	
console.log("Новый массив " + arr);
