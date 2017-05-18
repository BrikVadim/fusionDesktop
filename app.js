//
// Copyright © Brik Vadim. All rights reserved.
//
// Licensed under the MIT License.
// See License.txt in the project root for license information.
//

//------------------------------------------------------------------------------

// fusionDesktop v0.2.1
// Cross-platform remote control client

//------------------------------------------------------------------------------

// Library for call remote functions
const dnode = require('dnode');

// Import server controller variables
const {
  port,
  host,
  methods,
  listenServerCallback
} = require('./controllers/server');

//------------------------------------------------------------------------------

// Create dnode server
// NOTE: See methods in controllers/server.js
const server = dnode(methods);

//------------------------------------------------------------------------------

// Start server
server.listen(host, port, listenServerCallback);

//------------------------------------------------------------------------------
