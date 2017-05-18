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

//------------------------------------------------------------------------------

//Export
exports.typeString = typeString

//------------------------------------------------------------------------------
