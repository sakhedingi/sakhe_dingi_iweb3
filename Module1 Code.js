//Looping a triangle

for (let i = 1; i <= rows; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += '#';
    }

    console.log(output);
}

//Recursion

function isEven(n) {

    if (n < 0) {
        n = -n;
    }
    
    if (n === 0) {
        return true;
    }
    
    if (n === 1) {
        return false;
    }
    
    return isEven(n - 2);
}

console.log(isEven(-4));
console.log(isEven(7)); 
console.log(isEven(4));
console.log(isEven(-7));

//Bean counting

function countChar(string, char) {
    if (string.length === 0) {
        return 0;
    }
    let count = string[0] === char ? 1 : 0;
    return count + countChar(string.slice(1), char);
}

console.log(countChar("hello world", "l"));
console.log(countChar("JavaScript", "a"));
console.log(countChar("Beancounting", "n"));

//FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Chessboard

let size = 8;

for (let row = 0; row < size; row++) {
    let line = '';
    for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            line += ' ';
        } else {
            line += '#';
        }
    }
    console.log(line);
}

//Minimum

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(0, 10));
console.log(min(0, -10));
