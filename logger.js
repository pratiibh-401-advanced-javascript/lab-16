'use strict';

const events = require('./events.js');

events.on('create', payload => doLog('create', payload));
events.on('delete', payload => doLog('delete', payload));
events.on('update', payload => doLog('update', payload));

events.emit('err', 'there is an error');

function handleError(payload) {
  console.log('an error!');
}


function doLog(action, payload) {
  console.log( action.toUpperCase(), payload);
}