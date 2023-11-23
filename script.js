// exercise one

let number = 1;

while (number <= 100) {
  number++;
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
  console.log(number);
}

console.log("=========");

// exercise two

for (let n = 5; n <= 50; n++) {
  let isPrime = true; // this is the flag

  for (let i = 2; i < n; i++) {
    // if any number less than himself => is not going to be prime - greater than 1 less 5 - check = i = 2, 3, 4
    if (n % i === 0) {
      isPrime = false; // not a prime number
      break; // stop right there
    }
  }

  if (isPrime) {
    console.log(`${n} is a prime number`);
  }
}

// So first loop just goes over all our numbers (5-10),
// next we create a second for loop to then do some math,
// to see if our number is divisible.
// Its tricky because our i variable is dependent on our n variable

console.log("=========");

// exercise three

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n";

let currentCell = 1;

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// loop over the string

for (let i = 0; i < csv.length; i++) {
  //   console.log(csv[i]);

  // store each cell in a variable

  if (csv[i] === ",") {
    // if is a comma move to the next cell
    currentCell++;
  } else if (csv[i] === "\n") {
    // if is a \n move to the next row
    console.log(cell1, cell2, cell3, cell4);
    currentCell = 1;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    if (currentCell === 1) {
      cell1 += csv[i];
    } else if (currentCell === 2) {
      cell2 += csv[i];
    } else if (currentCell === 3) {
      cell3 += csv[i];
    } else if (currentCell === 4) {
      cell4 += csv[i];
    }
  }
}

console.log(cell1);

//counter = to see where we are + increase the counter oance the certain condition is met ( define outside the lopp, increase inside de loop)

//

// cand da de virgula imi incrementeaza  currentCell - Name va merge in celula 2 si tot asa
// cand ajunge la /n trebuie resetat tot ca sa inceapa iar de la currentCell 1 si sa puna fiecare in cell1, cell2, cell4, cell4 ( adica pe fiecare rand)
// daca nu e nici virgula si nici n o sa mearga in ultimul else
// python tuturor ca sa vezi tot procesul!!
