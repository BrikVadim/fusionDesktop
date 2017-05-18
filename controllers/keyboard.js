//
// fusionDesktop
// keyboard controller
//
// Copyright © Vadim Brik. All rights reserved.
//
// Licensed under the MIT License.
// See License.txt in the project root for license information.
//

//------------------------------------------------------------------------------

// Desktop automation library
const robot = require('robotjs');

//------------------------------------------------------------------------------

// Function for typing text from keyboard
// Input: textString - string for type
function typeString(textString = '') {
  try {
    robot.typeString(textString)
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

// Function for emulate key taps
// Input: key - key string, modified - alt|command/win|control|shift
function keyTap(key = '', modified = []) {
  try {
    robot.keyTap(key, modified)
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

// Function for emulate keyboard toggle
// Input: key-key string, state-up|down,  modified-alt|command/win|control|shift
function keyToggle(key = '', state = 'down', modified = []) {
  try {
    robot.keyToggle(key, state, modified);
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

//------------------------------------------------------------------------------

//Export
exports.typeString = typeString;
exports.keyTap = keyTap;
exports.keyToggle = keyToggle;

//------------------------------------------------------------------------------
