"user strict";
arr = [4, 15, -7, 5, 3, 6, -5, 6, 0, 2, 1];
function quickSort(arr, left, right) {
   var mid = arr[Math.floor((right + left) / 2)];
   var i = left;
   var j = right;
   while (i < j) {
      while (arr[i] < mid) {
         i++;
      }
      while (arr[j] > mid) {
         j--;
      }
      if (i <= j) {
         var tmp = arr[i];
         arr[i] = arr[j];
         arr[j] = tmp;
         i++;
         j--;
      }
   }
   if (left < j) {
      quickSort(arr, left, j);
   }
   if (i < right) {
      quickSort(arr, i, right);
   }
   return arr;
}
var result = quickSort(arr, 0, arr.length-1);
console.log(result);
