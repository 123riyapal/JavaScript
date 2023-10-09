const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', function (userInput) {
  const userNumber = parseFloat(userInput);

  if (!isNaN(userNumber)) {
    console.log('User input as a number:', userNumber);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }

  rl.close();
});
