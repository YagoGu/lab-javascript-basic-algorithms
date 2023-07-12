// Iteration 1: Names and Input
let hacker1 = "Quixote";
let hacker2 = "Cervantes";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let comparation = hacker1.localeCompare(hacker2);
if (comparation) {
  console.log("The driver has the longest name, it has XX characters.");
}
else if (!comparation) {
  console.log("It seems that the navigator has the longest name, it has XX characters.");
}
else{
  console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops

//Loops 1
let newHacker1 = "";
let i = 0;
while (i < hacker1.length) {
    newHacker1 += hacker1[i].toUpperCase() ;
    i++
    newHacker1 += " ";
}
console.log(newHacker1);

//Loops 2
console.log(hacker1.split("").reverse().join(" "));

//Loops 3
let hackers = [hacker1, hacker2];
orderedHackers = hackers.sort();
if (orderedHackers[0] === hacker1) {
    console.log("The driver's name goes first.");
}
else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?.");
}
else {
    console.log("Yo, the navigator goes first, definitely.");
}

//Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius vehicula augue in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque non dolor lobortis, ultrices nibh et, lobortis odio. Etiam mollis, tortor non rhoncus ultrices, nibh diam accumsan lorem, porttitor varius mauris eros a nisi. Vestibulum egestas, eros laoreet posuere consectetur, erat mauris tristique lorem, ut gravida quam risus vitae mauris. Nulla facilisi. Vivamus scelerisque a urna ac gravida. Duis interdum in dui non tempor. Fusce in libero ut nibh tempus rutrum id ac eros. Integer id efficitur justo, ut luctus felis. Suspendisse sed risus gravida, pulvinar quam nec, tincidunt ex. In a ligula sapien. Quisque sodales accumsan tellus a tincidunt. Sed eu dignissim dolor. Vivamus eu hendrerit risus. Donec a vehicula eros. In eget ipsum pulvinar, consequat nulla ac, imperdiet metus. Proin sed nisl finibus lacus ornare egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at iaculis sem. Ut tempor nec lectus vitae iaculis. Duis sit amet est in augue suscipit fringilla. Aenean vulputate sollicitudin massa, in dapibus quam semper id. Nullam suscipit varius dui ac auctor. Mauris enim sem, egestas porta erat vitae, finibus luctus arcu. Integer eu efficitur lacus, a tristique lacus. Nullam fringilla, velit at ornare feugiat, leo augue faucibus augue, vel egestas nunc felis eu diam. Nullam ornare, ante vel viverra tristique, sem lorem feugiat arcu, sit amet congue libero mauris id dolor. Integer venenatis augue erat, vel lacinia mi placerat in. In eget elementum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

let words = 0;
let etWords = 0;
for (let k = 0; k <= longText.length; k++) {
    if (longText[k] == " ") {
        words += 1;
    }
    else if (longText[k] + longText[k+1] === "et") {
        etWords += 1;
    }
}

console.log(`On the text:
    ${longText} 
    -There is ${words} words.
    -The word "et" is repeating itself ${etWords} times.`);

//Bonus 2