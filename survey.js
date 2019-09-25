const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 let person = [];
 let personObject = {name:"", favouriteActivity:"", favouriteMeal: "", favouriteSport: "", superPower:""};

rl.question('What is your name? ', (answer) => {
  // TODO: Log the answer in a database
  personObject.name = answer;

  rl.question('What is your favourite activity? ', (answer) => {
    // TODO: Log the answer in a database
    personObject.favouriteActivity = answer;

    rl.question('What is your favourite meal? ', (answer) => {
      // TODO: Log the answer in a database
      personObject.favouriteMeal = answer;

      rl.question('What is your favourite sport? ', (answer) => {
        // TODO: Log the answer in a database
        personObject.favouriteSport = answer;

        rl.question('What is your super power? ', (answer) => {
          // TODO: Log the answer in a database
          personObject.superPower = answer;
          console.log(`Hello, ${personObject.name} your favourite activity is ${personObject.favouriteActivity}, wow cool! We love to eat ${personObject.favouriteMeal} too! We agree ${personObject.favouriteSport} is a great sport! And ${personObject.superPower} is one hell of a super power!`);
          rl.close(); 
        });
      });
    });
  });
});