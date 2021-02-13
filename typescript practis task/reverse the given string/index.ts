function reversestr(str:string):string
{
    return str.split("").reverse().join("")
}

let value = prompt("Enter the value")
console.log(reversestr(value))