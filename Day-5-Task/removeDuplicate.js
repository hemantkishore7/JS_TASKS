//Anonymous Function

let findDuplicate = function(strArr) {
    let checkStr = [...new Set(strArr)];
    console.log(checkStr);
}
let arr = ['A', 'B', 'A', 'C', 'B'];
findDuplicate(arr);


//IIFE - Function 

(function(strArr){
    let checkStr = [...new Set(strArr)];
    console.log(checkStr);
})([1,3,5,3,1,6,7,6,9,6])