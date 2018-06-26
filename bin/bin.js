#!/usr/bin/env node

var myCalc = require('../index.js');

// Displays the text in the console
let params = process.argv;
if( params.length < 3 )
    console.log("Invalid parameters. Please provide expression to calculate!" );
else
    myCalc.calculate( params.slice( 2 ).join(" ") );
