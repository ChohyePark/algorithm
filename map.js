const numbers = [1, 2, 3, 4, 5];

const modifiedNumbers = numbers.map(function(number) {
    if (number % 2) {
        return "Odd";
    } else {
        return "Even";
    }
});

console.log(modifiedNumbers); // ['Odd', 'Even', 'Odd', 'Even', 'Odd']