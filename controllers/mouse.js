//
// fusionDesktop
// mouse controller
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

// Function for change mouse position
// Input: Object {x, y} - mouse position
function moveMouse({ x = 0, y = 0 }) {
  try {
      robot.moveMouseSmooth(x, y);
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

// Function for emulate mouse click
// Input: button - left|right|middle, isDouble (double click) - boolean
function mouseClick(button = 'left', isDouble = false) {
  try {
    robot.mouseClick(button, isDouble);
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

// Function for emulate mouse toggle
// Input: state - up|down, button - left|right|middle
function mouseToggle(state = 'down', button = 'left') {
  try {
    robot.mouseToggle(state, button);
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

// TODO: Scroll don't work!
function scrollMouse({ value = 0, direction = 'down' }) {
  try {
    robot.scrollMouse(value, direction);
  } catch (err) {
    // Only on debug
    console.error(err);
  }
}

//------------------------------------------------------------------------------

// Export
exports.moveMouse = moveMouse;
exports.mouseClick = mouseClick;
exports.mouseToggle = mouseToggle;
exports.scrollMouse = scrollMouse;

//------------------------------------------------------------------------------
