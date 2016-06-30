"use strict";

const dgram = require('dgram');
const TransportHeader = require('./protocol/transport_header.js');

const message = new Buffer(32);
let th = new TransportHeader(0b10010111, 1, 1, 1, 0b1001, 42);
th.writeTo(message);

const client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 41234, 'localhost', (err) => {
  client.close();
});
