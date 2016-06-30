const MediaChannel = {
	calatog: 0,
	commands: 1,
	animation: 2,
	sound: 3,
	text: 4,
	dicByOrder: 5,
	reserved1: 6,
	reserved2: 7
}

const TransportFlags = {
	startOfPacket: 1 << 0,
	reserved1: 1 << 1,
	reserved2: 1 << 2,
	important: 1 << 3
}

const Prefix = 0b10010111;

module.exports = {
	MediaChannel,
	TransportFlags,
	Prefix
}
