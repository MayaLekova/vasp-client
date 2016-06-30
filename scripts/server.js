"use strict";

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const TransportHeader = require('./protocol/transport_header.js');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  let buf = new Buffer(msg);
  let th = new TransportHeader();
  th.readFrom(buf);
  console.log(th);
});

server.on('listening', () => {
  let address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// server listening 0.0.0.0:41234
