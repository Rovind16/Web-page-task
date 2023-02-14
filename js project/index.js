//problem1


var array = [1, 2, 3, 4, 5];
    console.log(binarySearch(array, 2, 0, array.length- 1));
    function binarySearch(array, x, start, end) {
        if (start > end){
        return "false";
        }
        var mid = Math.floor((start + end) / 2);
        if (array[mid] == x){
             return true;
        }
        if (array[mid] > x){
        return binarySearch(array, x, start, mid - 1);
        }else{
        return binarySearch(array, x, mid + 1, end);
        }
}



//problem2

var a=prompt();
var sum=0;
while(a!=0){
    sum=sum+a%10;
    a=Math.floor(a/10);
}
function isoddoreven(sum) {
    if(sum%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(isoddoreven(Math.floor(sum)));


// //problem3


var arr=[[1,2],[3,4],[4,5]];
var arr1=[];
arr.concat();
for(var i=0;i<arr.length;i++){
    arr1=arr1.concat(arr[i]);
}
console.log(arr1);