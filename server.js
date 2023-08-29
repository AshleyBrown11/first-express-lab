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
  
 