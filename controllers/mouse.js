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
function moveMouse({x = 0, y = 0}) {
  try {
    robot.moveMouse(x, y)
  } catch(err) {
    // Only on debug
    console.error(err);
  }
}

//------------------------------------------------------------------------------

// Export
exports.moveMouse = moveMouse

//------------------------------------------------------------------------------
