"use strict";

const dgram = require('dgram');
const TransportHeader = require('./protocol/transport_header.js');
const consts = require('./protocol/constants.js');

const message = new Buffer(32);
let th = new TransportHeader(consts.Prefix, 1, 1, consts.MediaChannel, consts.TransportFlags.startOfPacket | consts.TransportFlags.important, 42);
th.writeTo(message);

const client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 41234, 'localhost', (err) => {
  client.close();
});
