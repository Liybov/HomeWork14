'use strict'
// #1

var n = +prompt('Enter number', '');

if ((n >= 25) && (n <= 99)){
    console.log('The number ' + n + ' is in the range 25-99.');
}  else {
    console.log('You have entered a number that is not in the range of 25-99');
}


//#2
var a=2;
var b=2;

/*if(a === b) { 
console.log("a and b are equal");
 } else if(a > b) { 
 	console.log("a is greater");
 } else { 
console.log("b is greater"); 
}*/

var c = (a === b) ? "a and b are equal" : 
        (a > b) ? "a is greater":
        "b is greater";

console.log(c);

// #3 Чому будуть рівні наступні вирази
/*
"" + 1 + 0   рівне 1
"" - 1 + 0   рівне -1
true + false  рівне false
6 / "3"       рівне 2  
"2" * "3"     рівне 23  
4 + 5 + "px"  рівне9px  
"$" + 4 + 5  рівне $45  
"4" - 2      рівне2  
"4px" - 2  рівне  NaN  
7 / 0     рівне Infinity  
"  -9\n" + 5  рівне  -95  
"  -9\n" - 5 рівне -14 
5 && 2  рівне  2   
2 && 5  рівне  5   
5 || 0  рівне  5   
0 || 5  рівне  5   
null + 1 рівне  1
undefined + 1 рівне  NaN
null == "\n0\n" рівне false
+null == +"\n0\n" рівне  true
*/

