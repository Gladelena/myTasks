arr=[7,2,3,4,5,1,9];
var ln=arr.length;
var tmp;
console.log("Старый массив " +arr);
for (j=0; j<ln; j++){
	for (var i=0; i<ln-1; i++){
		if (arr[i]>arr[i+1]) {
			tmp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=tmp;
		}
	}
}	
console.log("Новый массив " + arr);