//Anonymous Function

let isPalindrom = function(str){
   return str === str.split("").reverse().join("");
}

let getPalindrom =(arr)=> {
    let palindrom =[];
    for(var i=0;i<arr.length;i++){
        if(isPalindrom(arr[i])){
            palindrom.push(arr[i]);
        }
    }
    return palindrom;
}
let strArr = ["level", "apple", "malayalam","hello"]
let result = getPalindrom(strArr);
console.log(result);


//Arrow Function

let isPalindrom2 = function(str){
    return str === str.split("").reverse().join("");
}

let getPalindrom2 = function(arr) {
    let palindrom =[];
    for(var i=0;i<arr.length;i++){
        if(isPalindrom(arr[i])){
            palindrom.push(arr[i]);
        }
    }
    return palindrom;
}
let strArr2 = ["level", "apple", "malayalam","hello"]
let result2 = getPalindrom(strArr2);
console.log(result2);


