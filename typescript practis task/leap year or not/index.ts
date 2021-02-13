function checkLeapYear(year:number):boolean  {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
}

// take input
//const year = parseInt(prompt('Enter a year:'));

const year = 2000;


if(checkLeapYear(year)) console.log(year+" is a leap year")
else console.log(year+" is not a leap year")