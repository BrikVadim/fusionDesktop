//
// fusionDesktop
// server controller
//
// Copyright © Vadim Brik. All rights reserved.
//
// Licensed under the MIT License.
// See License.txt in the project root for license information.
//

//------------------------------------------------------------------------------

// Library for a check the correctness of port
const normalizePort = require('../lib/normalizePort');

const keyboardController = require('./keyboard');
const mouseController = require('./mouse');

//------------------------------------------------------------------------------

// Set value of environment variable 'port' or default port value
// Default port to debug 5050
const port = normalizePort(process.env.port);

// Methods implementing a remote control
// See mouse.js and keyboard.js in 'controllers' folder for other information
const methods = {
  // Mouse
  moveMouse: mouseController.moveMouse,
  mouseClick: mouseController.mouseClick,
  mouseToggle: mouseController.mouseToggle,
  scrollMouse: mouseController.scrollMouse,
  // Keyboard
  typeString: keyboardController.typeString,
  keyTap: keyboardController.keyTap,
  keyToggle: keyboardController.keyToggle
};

//------------------------------------------------------------------------------

// NOTE: CALLBACK FUNCTION
// Callback for server.listen
function listenServerCallback(error) {
  if (error) {
    throw error;
  }

  console.log(`Server started on ${port}!`);
}

//------------------------------------------------------------------------------

// Export
exports.listenServerCallback = listenServerCallback;
exports.methods = methods;
exports.port = port;

//------------------------------------------------------------------------------
