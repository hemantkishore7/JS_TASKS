//Anonymous Function 

let titleCap = function(string) {
    let s = string.split(" ");
    let result = [];
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
   
}
titleCap("hemant kishore");


//IIFE - Function 

(function (string){
    let s = string.split(" ");
    let result = [];
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
   
})("guvi is one of best e-platforms");


//Arrow Function

let str =(string) => {
    let s = string.split(" ");
    let result = [];    
    for(var i=0;i<s.length;i++){
        let word = s[i];
        result.push( word[0].toUpperCase()+ word.slice(1,word.length))
    }
   console.log(result.join(" "));
}

str("hi.. how are you?")