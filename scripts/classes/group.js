"use strict";

let SceneElement = require('./element');

class Group extends SceneElement {
	constructor(size, count, bbox, nodes) {
		this.size = size;
		this.count = count;
		this.bbox = bbox;
		this.nodes = nodes;
	}

	draw() {
		super.draw();
	}
};

module.exports = Group;
