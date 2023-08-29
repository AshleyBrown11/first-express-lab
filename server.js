// Load express
const express = require('express');

// Creating our Express app (server)
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Define a "root" route directly on app
app.get('/', (request, response) => {
  // the response should be the last thing you do, think of it like the return keyword
  response.status(200).send('<h1 style="color: red" >Hello Express!</h1>');
});
// Step 1
app.get('/greetings', (req, res) => {
  res.send('<h1>"Hello Stranger"</h1>');
});

// Step 2
app.get('/greetings/:name', (req, res) => {
  res.send('<Name> Hello, ${req.params.name}! It is so great to see you!</Name>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, () => {
  console.log('The Launch Successful Captain3000');
});

// Tip Calculator
//tip/:total/:tipPercentage
// Parameters that come from the browser are STILL A STRING
// Have to convert to a number
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total*tipPercentage) /100;
    res.send(`<h1>Your tip amount is: ${tipAmount}</h1>`);
  });
  
 // Magic 8 Ball
 app.get('/magic', (req, res) => {
    // Create response array
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    // Returns a number
    // const randomResponse = Math.random(req.params.response);
    res.send(`<h1> Will I be a Millionaire? <br> Magic Eight Ball Says: "${randomResponse}"</h1>`);
  });
  