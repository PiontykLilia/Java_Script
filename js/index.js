const greetings = 'Hello World!';
alert('greetings');

// number
// string
// boolean
// null
// undefined
// object
// symbol


const age = 42;
let isMarried = false;

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is ' + userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

const ageString = checkAge(userAge);
alert('You are ' + ageString);

function checkAge(age) {
    if (age < 18) { // < > <= >= == === != !==
        return 'child';
    } else {
        return 'adult';
    }
}

function checkAge(age) {
    if (age >= 100) { // < > <= >= == === != !==
        return 'old';
    } else {
        return 'adult';
    }
}