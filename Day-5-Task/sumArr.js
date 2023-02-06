//Anonymous Function 

let sum1 =function(numArr1) {
    for(var i =0 ; i<numArr1.length; i++){
        result += numArr1[i];
    }
    console.log("sum of even: "+ result);
}
let result= 0;
let arr1 =[2,4,6,8,10,12,14]
sum1(arr1);

//IIFE - Function 

(function(numArr) {
    for(var i =0 ; i<numArr.length; i++){
        result += numArr[i];
    }
    console.log("sum of odd: "+ result);
})([1,3,5,7,9,11,13]);

//Arrow Function

let sum2 = (numArr2) =>{
    for(var i =0 ; i<numArr2.length; i++){
        res += numArr2[i];
    }
    console.log("sum of even: "+ res);
}
let res = 0;
let arr2 = [23,65,85,10,54,39]
sum2(arr2)