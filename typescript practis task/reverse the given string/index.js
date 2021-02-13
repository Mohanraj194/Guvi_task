function reversestr(str) {
    return str.split("").reverse().join("");
}
var value = prompt("Enter the value");
console.log(reversestr(value));
