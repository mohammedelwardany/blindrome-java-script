//string 

//------------------------------------------task1---------------------------------------------//

var input = prompt("Enter string that is palindrome: ");
var Case = confirm("Consider case of the entered string?");
if (Case == true) {
    var re = /[^A-Za-z0–9]/g;
    var lowRegStr = input.replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (lowRegStr === reverseStr) {
        alert("It is a palindrome")
    } else {
        alert("It is not a palindrome")
    }
} else {
    var re = /[^A-Za-z0–9]/g;
    var lowRegStr = input.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (lowRegStr === reverseStr) {
        alert("It is a palindrome")
    } else {
        alert("It is not a palindrome")
    }
}