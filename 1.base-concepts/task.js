"use strict"
let root1 , root2;
let a = 1;
let b = 12;
let c = 36;
function solveEquation (a, b, c) 
{
    let arr = [];
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    
        console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
      );
    }
    
    
    return arr;
}