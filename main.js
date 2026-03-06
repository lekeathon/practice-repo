//for (let i = 0; i <= 10; i++) {
// console.log('i am awesome');
// for (let j = 1; j <= 5; j++) {
//     console.log(`im still awesome ${j}`);
//}
//}

//let i = 1;
//while (i <= 10) {
//  i++;
//console.log(' i think im awesome');

//}

/*let secret = 'Flash';
let guess = prompt('who is the fastest superhero?');
while (guess !== secret) {
    guess = prompt('Wrong again who is the fastest superhero?');

}

alert('you are correct!');
*/

/*let maximum = parseInt(prompt('Enter a maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid fucking number dumbass'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! enter a new guess");
    }
}

if (guess === 'q') {
    console.log("You're garbage ass quitting lol")
}*/









/*let maximum = parseInt(prompt('Enter a maximum number'));

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Enter your first guess (or q to quit)');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;

    attempts++;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess (or q to quit)');
    } else {
        guess = prompt('Too low! Enter a new guess (or q to quit)');
    }
}

if (guess === 'q') {
    console.log('Game quit.');
} else {
    console.log(`Congrats! You got it! It took you ${attempts} attempts.`);
} */



/*let names = ['flash', 'superman', 'batman', 'wonder woman', 'aquaman', 'green arrow', 'martian manhunter'];

for (let jla of names) {
    console.log(jla);
}


let name = "Lekeathon";

for (let nam of name) {
    console.log(nam);
} */

let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let are of arrays) {
    console.log(are);
}