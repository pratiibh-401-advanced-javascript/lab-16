'use strict';

const fs = require('fs');
const Events = require('events');
const events = new Events();



const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    // if(err) { throw err; }
    events.on('err', handleError);
    // .then()
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
