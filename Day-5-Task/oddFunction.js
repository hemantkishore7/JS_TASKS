
////Anonymous Function 

let oddNum = function(num){
    for (let i = 0;i<num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
            }
    }  
    console.log(" ");        
}
var arr1 = [1,2,3,4,5,6,7,8,9,10]
oddNum(arr1);


//IIFE - Function 

(function(num) {
    for (let i = 0;i< num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
        }
    }
    console.log(" ");
})([1,2,3,4,5,6,7,8,9,10]);


//Arrow Function

let oddNumArrow = (num) => {
    for (let i = 0;i< num.length; i++){
        if(num[i]%2!=0){
            console.log(num[i])
        }
    }
    console.log(" ");
}
var arr2 = [1,2,3,4,5,6,7,8,9,10]
oddNumArrow(arr2);