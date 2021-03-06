/*
 * Bedrock Server Module Configuration
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;
var path = require('path');

config.server = {};
config.server.port = 18443;
config.server.httpPort = 18080;
config.server.bindAddr = ['bedrock.dev'];
config.server.domain = 'bedrock.dev';
config.server.host = config.server.domain;
if(config.server.port !== 443) {
  config.server.host += ':' + config.server.port;
}
config.server.baseUri = 'https://' + config.server.host;
config.server.key = path.join(__dirname, '../pki/test-bedrock.key');
config.server.cert = path.join(__dirname, '/../pki/test-bedrock.crt');
//config.server.ca = [];
config.server.https = {};
// options to pass directly to `tls.createServer`; any individual options that
// can be set on `config.server.*`, if present, will overwrite the options
// specified here
config.server.https.options = {
  //secureOptions: require('constants').SSL_OP_NO_SSLv3
  //ciphers: '...'
};
