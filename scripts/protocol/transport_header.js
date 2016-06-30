"use strict";

class TransportHeader {
	constructor(
		prefix,
		number,
		channel,
		type,
		flags,
		CRC
	) {
		this.prefix = prefix,
		this.number = number,
		this.channel = channel,
		this.type = type,
		this.flags = flags,
		this.CRC = CRC
	}
	writeTo(buf) {
		buf.writeInt32LE(this.prefix, 0);
		buf.writeInt16LE(this.number, 8);
		buf.writeInt16LE(this.channel, 12);
		buf.writeInt16LE(this.type, 16);
		buf.writeInt16LE(this.flags, 20);
		buf.writeInt32LE(this.CRC, 24);
	}
	readFrom(buf) {
		this.prefix = buf.readInt32LE(0);
		this.number = buf.readInt16LE(8);
		this.channel = buf.readInt16LE(12);
		this.type = buf.readInt16LE(16);
		this.flags = buf.readInt16LE(20);
		this.CRC = buf.readInt32LE(24);
	}
};

module.exports = TransportHeader;
